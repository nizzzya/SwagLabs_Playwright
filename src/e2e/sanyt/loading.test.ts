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

describe('Sanyt testing for all users', () => {
    
    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    users.forEach((user: { username: string; password: string }) => {
        test('Correct url for user:' + user.username, async () => {
            await login(page, user.username, user.password);
            const currentUrl = page.url();
            expect(currentUrl).toBe('https://www.saucedemo.com/v1/inventory.html');
        });

        test('Check server response for user:' + user.username, async () => {
            await login(page, user.username, user.password);
            // Listening to the response
            page.on('response', response => {
                expect(response.status()).toBe(200);
            });
        });

        test('Checking the loading time of the site for user:' + user.username, async () => {
            const startTime = Date.now();
            await login(page, user.username, user.password);
            const endTime = Date.now();
            const loadTime = endTime - startTime;
            expect(loadTime).toBeLessThan(1000);
        });
    });
});
