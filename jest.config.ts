// jest.config.ts
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout: 30000,
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testMatch: ['**/src/e2e/**/*.test.ts'],
};

export default config;
