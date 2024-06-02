// src/pages/LoginPage.ts
import { Page } from 'playwright';

class LoginPage {
    private page: Page;
    private url = 'https://www.saucedemo.com/v1/index.html';
    private usernameSelector = 'input[name="user-name"]';
    private passwordSelector = 'input[name="password"]';
    private loginButtonSelector = 'input[type="submit"]';

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameSelector, username);
        await this.page.fill(this.passwordSelector, password);
        await this.page.click(this.loginButtonSelector);
    }
}

export default LoginPage;
