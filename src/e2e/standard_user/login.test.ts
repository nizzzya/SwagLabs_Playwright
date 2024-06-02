import { chromium, Browser, Page } from 'playwright';
import { login } from '../../utils/loginUtil';
import users from '../../data/users.json';

let browser: Browser;
let page: Page;

beforeAll(async () => {
    browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
});

afterAll(async () => {
    await browser.close();
});

describe('User 1 Tests', () => {
    test('User 1 can login and navigate to dashboard', async () => {
        const user = users[0];
        await login(page, user.username, user.password);
        
        const currentUrl = page.url();

        const expectedUrl = 'https://www.saucedemo.com/v1/inventory.html';

        await page.screenshot({ path: 'example.png' });

    });
});
