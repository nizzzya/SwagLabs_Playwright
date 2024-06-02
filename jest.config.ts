import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'jest-playwright-preset',
    testTimeout: 30000,
    testMatch: ['**/src/e2e/**/*.test.ts'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
};

export default config;
