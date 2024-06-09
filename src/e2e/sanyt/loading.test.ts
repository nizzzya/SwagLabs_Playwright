import { Page } from 'playwright';
import { login } from '../../utils/loginUtil';

/**
 * ID @001
 */
export async function testCorrectUrl(page: Page, user: { username: string; password: string }) {
  await login(page, user.username, user.password);
  const currentUrl = page.url();
  console.log(`URL for ${user.username}: ${currentUrl}`);
  if (currentUrl !== 'https://www.saucedemo.com/v1/inventory.html') {
    throw new Error(`URL mismatch for user ${user.username}`);
  }
}

export async function testServerResponse(page: Page, user: { username: string; password: string }) {
  await login(page, user.username, user.password);
  page.on('response', response => {
    if (response.status() !== 200) {
      throw new Error(`Server response error for user ${user.username}`);
    }
  });
}

export async function testLoadingTime(page: Page, user: { username: string; password: string }) {
  const startTime = Date.now();
  await login(page, user.username, user.password);
  const endTime = Date.now();
  const loadTime = endTime - startTime;
  console.log(`Load time for ${user.username}: ${loadTime}ms`);
  if (loadTime >= 1000) {
    throw new Error(`Load time too long for user ${user.username}`);
  }
}
