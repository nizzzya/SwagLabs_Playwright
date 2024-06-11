import { test, expect } from '@playwright/test';
import users from '../data/users.json';
import { login } from '../utils/loginUtil';

users.forEach(user => {

  test(`C0211: Verify the correctness of the login according to the data => ${user.username}`, async ({ page }) => {
    await login(page, user.username, user.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
  });

  test(`C0212: Verify server response after Log in => ${user.username}`, async ({ page }) => {
    let response = null;
    await login(page, user.username, user.password);
    await page.on('response', res => {
      expect(res.ok);
    });
  });

  test(`C0215: Verify loading time after Log in => ${user.username}`, async ({ page }) => {
    const startTime = Date.now();
    await login(page, user.username, user.password);
    const endTime = Date.now();
    const loadTime = endTime - startTime;
    expect(loadTime).toBeLessThan(1000);
  });
});