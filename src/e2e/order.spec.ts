import { test, expect } from '@playwright/test';
import users from '../data/users.json';
import { login } from '../utils/loginUtil';

users.forEach(user => {
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
