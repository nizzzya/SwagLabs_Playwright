Test SwagLabs testsite by Playwright on TS

# Test SwagLabs testsite by Playwright+TS

The project is tasked with performing a bug hunt on the SwagLabs demo website
(https://www.saucedemo.com/). This site is designed with intentional bugs across
different user scenarios. The goal is to identify and catch the most critical issues.

All tests have the same initial LogIn step. Therefore, it was decided to create `LoginPage.ts` and `loginUtil.ts` to remove this step and make it the default for all tests.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later)

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/nizzzya/SwagLabs_Playwright.git
    cd playwright-saucedemo-tests
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Ensure Playwright browsers are installed:
    ```sh
    npx playwright install
    ```

## Project Structure

### `src/data/users.json`
Contains the users credentials used for testing.

### `src/pages/LoginPage.ts`
Defines the `LoginPage` class that includes methods to interact with the login page.

### `src/utils/ loginUtil.ts`
Contains utility functions for the login process.

### `src/e2e/****.spec.ts`
Contains scripts for testing the site using Playwright.

## Running Tests

To run the tests, use the following command:

### Run all tests

```sh
npx playwright test
```

### Run all test from one *.spec.ts file

```sh
npx playwright test functional.spec.ts
```

### Run the test by ID using the -g flag

```sh
npx playwright test -g "C0211"
```
