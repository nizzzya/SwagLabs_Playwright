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
        test('Add a product to the cart', async () => {
            await login(page, user.username, user.password);
            await page.click('button[text="ADD TO CART"][0]');
            await page.waitForSelector('#shopping_cart_container ');


          });
    });

});