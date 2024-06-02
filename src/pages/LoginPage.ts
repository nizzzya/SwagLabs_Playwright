import { Page } from 'playwright';

export default class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/v1/index.html');
    }

    async login(username: string, password: string) {
        await this.page.fill('input[name="user-name"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('input[type="submit"]');
    }
}
