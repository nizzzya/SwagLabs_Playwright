import { Page } from 'playwright';
import LoginPage from '../pages/LoginPage';

/**
 * Logs in a user with the given credentials.
 * @param {Page} page - The Playwright page object.
 * @param {string} username - The username.
 * @param {string} password - The password.
 */
export async function login(page: Page, username: string, password: string) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(username, password);
}
