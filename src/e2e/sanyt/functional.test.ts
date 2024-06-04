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
    
    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    users.forEach((user: { username: string; password: string }) => {
        test(`Add a product to the cart on the Catalog page =>${user.username}`, async () => {
            await login(page, user.username, user.password);
            // badge is enpty
            let badge = await page.$('#shopping_cart_container .shopping_cart_badge');
            expect(badge).toBeNull();
            // add product to cart
            await page.click('//button[contains(text(), "ADD TO CART")][1]');     
            // baget has 1 item
            badge = await page.$('#shopping_cart_container .shopping_cart_badge');
            const badgeText = await badge?.textContent();
            expect(badgeText?.trim()).toBe('1');
        });

        test(`Remove a product from the cart on the Catalog page used 'Remove' button =>${user.username}`, async () => {
            await login(page, user.username, user.password);
        });

        test(`Check the switch to product page from Catalog page =>${user.username}`, async () => {
        });

        test(`Add a product to the cart on the Product page =>${user.username}`, async () => {
        });

        test(`Remove a product from the cart on the Product page used 'Remove' button =>${user.username}`, async () => {
            await login(page, user.username, user.password);
        });

        test(`Check the return from Product page by "Back" button =>${user.username}`, async () => {
        });
        
        test(`Check switch and return for all products on the Catalog page =>${user.username}`, async () => {
        });
        
        test(`Check the switch to Cart from Catalog page =>${user.username}`, async () => {
        });

        test(`Check the switch to Cart from Product page =>${user.username}`, async () => {
        });
        
        test(`Check the CONTINUE SHOPPING button on the Cart page =>${user.username}`, async () => {
        });

        test(`Remove item from cart on the Cart page =>${user.username}`, async () => {
        });
        
        test(`The Logo unclickable on the Catalog page =>${user.username}`, async () => {
        });

        test(`Switch by Logo to Catalog page from Product, Cart, Checkout, Finish pages =>${user.username}`, async () => {
        });

        test(`Sort by A-Z =>${user.username}`, async () => {
        });

        test(`Sort by Z-A =>${user.username}`, async () => {
        });

        test(`Sort by Price (low to high) =>${user.username}`, async () => {
        });

        test(`Sort by Price (high to low) =>${user.username}`, async () => {
        });



    });
});
