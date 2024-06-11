import { test, expect } from '@playwright/test';
import users from '../data/users.json';
import { login } from '../utils/loginUtil';

users.forEach(user => {
    // test(`Logo is visible`, async () => {
    // });

    // test('Product have Title on the Catalog page', async () => {
    // });

    // test('Product have Description on the Catalog page', async () => {
    // });

    // test('Product have Photo on the Catalog page', async () => {
    // });

    // test('Product have ADD TO CART button on the Catalog page', async () => {
    // });

    // test('Product have Price on the Catalog page', async () => {
    // });

    // test('Price have symbol $ and . on the Catalog page', async () => {
    // });

    // test('Product have Title on the Product page', async () => {
    // });

    // test('Product have Description on the Product page', async () => {
    // });

    // test('Product have Photo on the Product page', async () => {
    // });

    // test('Product have ADD TO CART button on the Product page', async () => {
    // });

    // test('Product have Price on the Product page', async () => {
    // });

    // test('Price have symbol $ and . on the Product page', async () => {
    // });

    // test('Title have #E2231A color', async () => {
    // });

    // test('Price have #E2231A color', async () => {
    // });

    // test('ADD TO CART button have #E2231A color', async () => {
    // });

});