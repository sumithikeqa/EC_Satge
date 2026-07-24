import { test as baseTest } from '@playwright/test';
import { ECLoginPage } from '@pages/LoginPage';
import { ECUATPage } from '@pages/UAT_TestCases_Page';

// Extend Playwright test to include page objects
type MyFixtures = {
  ecLoginPage: ECLoginPage;
  ecUATPage: ECUATPage;
};

export const test = baseTest.extend<MyFixtures>({
  ecLoginPage: async ({ page, context }, use) => {
    await use(new ECLoginPage(page, context));
  },

  ecUATPage: async ({ page, context }, use) => {
    await use(new ECUATPage(page, context));
  },
});

// Auto-navigate to dashboard before each test
test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/home`, { waitUntil: 'load', timeout: 60000 });
  // Wait for app-level ready signal: sidebar nav must be visible before any test action
  await page.locator("//div[@class='col']//div[normalize-space()='Executive Dashboard']")
    .waitFor({ state: 'visible', timeout: 30000 });
});

export { test as default };
export { expect } from '@playwright/test';
