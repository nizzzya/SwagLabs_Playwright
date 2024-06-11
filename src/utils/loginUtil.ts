import page from '@playwright/test';
import LoginPage from '../pages/LoginPage';

export async function login(page, username: string, password: string) {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(username, password);
}