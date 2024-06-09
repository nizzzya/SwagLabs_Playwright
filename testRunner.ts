import { chromium, Browser, Page } from 'playwright';
import * as path from 'path';
import * as fs from 'fs';
import minimist from 'minimist';
import users from './src/data/users.json';

let browser: Browser;

interface User {
  username: string;
  password: string;
}

interface TestResult {
  testId: string;
  user: string;
  status: 'passed' | 'failed';
  error?: string;
}

async function runTest(
  file: string,
  testId: string,
  testFunc: (page: Page, user: User) => Promise<void>,
  user: User
): Promise<TestResult> {
  const page = await browser.newPage();
  const result: TestResult = { testId, user: user.username, status: 'passed' };

  try {
    await testFunc(page, user);
  } catch (error) {
    result.status = 'failed';
    result.error = (error as Error).message;
  } finally {
    await page.close();
  }

  return result;
}

async function main() {
  const args = minimist(process.argv.slice(2));
  const testId = args['testId'];
  const userName = args['user'];
  const testFile = args['file'];

  const selectedUser = userName ? users.find((user: User) => user.username === userName) : null;
  const testUsers = selectedUser ? [selectedUser] : users;

  if (!testFile || !fs.existsSync(path.resolve(__dirname, testFile))) {
    console.error(`Test file ${testFile} does not exist`);
    process.exit(1);
  }

  const testModule = await import(path.resolve(__dirname, testFile));
  const testFunctions = Object.entries(testModule).filter(([name, fn]) => {
    if (typeof fn === 'function') {
      const fnString = fn.toString();
      return fnString.includes(`ID @${testId}`);
    }
    return false;
  });

  browser = await chromium.launch();
  const results: TestResult[] = [];
  
  try {
    for (const user of testUsers) {
      for (const [name, testFunc] of testFunctions) {
        const testFunction = testFunc as (page: Page, user: User) => Promise<void>;
        if (!testId || testFunction.toString().includes(`ID @${testId}`)) {
          results.push(await runTest(testFile, testId || '', testFunction, user));
        }
      }
    }
  } finally {
    await browser.close();
  }

  logResults(results);
}

function logResults(results: TestResult[]) {
  console.log('\nTest Results:');
  results.forEach(result => {
    if (result.status === 'passed') {
      console.log(`✅ Test ID: ${result.testId}, User: ${result.user} - Passed`);
    } else {
      console.log(`❌ Test ID: ${result.testId}, User: ${result.user} - Failed`);
      console.log(`   Error: ${result.error}`);
    }
  });

  const passedCount = results.filter(result => result.status === 'passed').length;
  const failedCount = results.length - passedCount;

  console.log(`\nTotal: ${results.length}, Passed: ${passedCount}, Failed: ${failedCount}`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
