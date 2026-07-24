import { defineConfig, devices } from '@playwright/test';
import { testConfig } from './testConfig';

const ENV = (process.env.ENV as keyof typeof testConfig.envURL) || 'qa';

export default defineConfig({
  testDir: './tests',
  timeout: 120 * 1000,
  retries: 1,
  fullyParallel: false,
  workers: 1,

  globalSetup: './global-setup.ts',
  globalTeardown: './global-teardown.ts',

  use: {
    headless: true,
    baseURL: testConfig.envURL[ENV],
    storageState: 'LoginAuthCQ.json',
    ignoreHTTPSErrors: true,

    actionTimeout: 20000,       // each click/fill/waitFor gets max 20s
    navigationTimeout: 60000,   // each page.goto/waitForURL gets max 60s

    screenshot: 'only-on-failure',  // capture page state on failure for debugging
    video: 'retain-on-failure',     // save video only for failed tests (saves disk space)
    trace: 'on-first-retry',        // capture trace on retry to diagnose flaky failures
  },

  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  reporter: [
    ['list'],
    [
      'html',
      {
        outputFolder: 'html-report',
        open: 'never',
        attachments: false, // ✅ prevents embedding heavy files in report
      },
    ],
    ['allure-playwright'],
  ],
});
