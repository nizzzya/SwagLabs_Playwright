import { chromium, Browser, Page } from 'playwright';
import { login } from '../../utils/loginUtil';
import users from '../../data/users.json';

let browser: Browser;
let page: Page;

beforeAll(async () => {
    browser = await chromium.launch();
    const context = await browser.newContext();
});

afterAll(async () => {
    await browser.close();
});

describe('Sanyt Functional Tests', () => {
    users.forEach((user: { username: string; password: string }) => {
        test('Logo is visible', async () => {
          });
    });

});