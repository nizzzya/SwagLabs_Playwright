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

describe('Sanyt Non Functional Tests', () => {
    users.forEach((user: { username: string; password: string }) => {
        test('Logo is visible', async () => {
          });

        test('Product have Title on the Catalog page', async () => {
        });

        test('Product have Description on the Catalog page', async () => {
        });

        test('Product have Photo on the Catalog page', async () => {
        });

        test('Product have ADD TO CART button on the Catalog page', async () => {
        });

        test('Product have Price on the Catalog page', async () => {
        });

        test('Price have symbol $ and . on the Catalog page', async () => {
        });

        test('Product have Title on the Product page', async () => {
        });

        test('Product have Description on the Product page', async () => {
        });

        test('Product have Photo on the Product page', async () => {
        });

        test('Product have ADD TO CART button on the Product page', async () => {
        });

        test('Product have Price on the Product page', async () => {
        });

        test('Price have symbol $ and . on the Product page', async () => {
        });

        test('Title have #E2231A color', async () => {
        });

        test('Price have #E2231A color', async () => {
        });

        test('ADD TO CART button have #E2231A color', async () => {
        });
        
    });

});