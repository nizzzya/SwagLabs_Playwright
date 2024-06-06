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

describe('Make and checkout an order', () => {
    
    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    users.forEach((user: { username: string; password: string }) => {
        test(`Making the order with 1 item =>${user.username}`, async () => {
        });
        
        test(`Making the order with 3 item =>${user.username}`, async () => {
        });
        
        test(`Stop the making  an order on the "Checkout: Overview" page =>${user.username}`, async () => {
        });

        // Negative
        test(`Making the order without item in the cart =>${user.username}`, async () => {
        });

    });
});
