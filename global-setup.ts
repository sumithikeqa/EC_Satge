/// <reference types="node" />
import { chromium, FullConfig, BrowserContext } from '@playwright/test';
import { testConfig as customTestConfig } from './testConfig';
import { methodologySetup } from './Utils/PreCondition/methodologySetup';
import { issueTypeSetup } from './Utils/PreCondition/issueTypeSetup';
import { riskCategorySetup } from './Utils/PreCondition/riskCategorySetup';
import { userAndDepartmentSetup } from './Utils/PreCondition/userAndDepartment';
import { roleSetup } from './Utils/PreCondition/roleSetup';

let context: BrowserContext;

async function globalSetup(config: FullConfig) {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('GLOBAL SETUP STARTED');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  const ENV = (process.env.ENV as keyof typeof customTestConfig.envURL) || 'qa';
  const baseURL = customTestConfig.envURL[ENV];
  console.log(`[ENV]  Environment : ${ENV}`);
  console.log(`[ENV]  Base URL    : ${baseURL}`);

  // ─── BROWSER ─────────────────────────────────────────────
  console.log('\n[1/7] Launching Chromium...');
  const browser = await chromium.launch({ headless: true });
  context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();

  // Log every navigation so we can see exactly where the page goes
  page.on('framenavigated', (frame) => {
    if (frame === page.mainFrame()) {
      console.log(`      → navigated to: ${frame.url()}`);
    }
  });

  // ─── NAVIGATE TO LOGIN ───────────────────────────────────
  console.log(`\n[2/7] Navigating to login page...`);
  await page.goto(`${baseURL}/login`, { timeout: 60000, waitUntil: 'domcontentloaded' });
  console.log(`      Current URL: ${page.url()}`);

  // ─── LOGIN FORM ──────────────────────────────────────────
  console.log('\n[3/7] Filling login credentials...');
  await page.waitForSelector('//input[@id="Username"]', { state: 'visible', timeout: 30000 });
  await page.fill('//input[@id="Username"]', customTestConfig.validWorkEmail);
  console.log(`      Username entered: ${customTestConfig.validWorkEmail}`);

  await page.click('//input[@type="submit"]');
  console.log('      Submit clicked — waiting for password field...');

  await page.waitForSelector('//input[@placeholder="Password"]', { state: 'visible', timeout: 30000 });
  await page.fill('//input[@placeholder="Password"]', customTestConfig.validPassword);
  console.log('      Password entered');

  // ─── CLICK LOG IN ────────────────────────────────────────
  console.log('\n[4/7] Clicking Log In button...');
  await page.click("//button[text()='Log in']");
  console.log('      Log In clicked — waiting for OAuth auth-callback...');

  // ─── WAIT FOR AUTH CALLBACK ──────────────────────────────
  // After login, the Identity Server redirects to /auth-callback?code=...
  // Angular processes it, then may show a "Go to Home" popup before redirecting to /home
  try {
    await page.waitForURL(`${baseURL}/auth-callback**`, { timeout: 60000 });
    console.log(`      Auth callback received: ${page.url()}`);
  } catch {
    console.log(`      Auth callback URL not seen — current URL: ${page.url()}`);
    console.log('      (App may have already redirected further)');
  }

  // Wait for Angular to finish processing the callback
  console.log('      Waiting for app to finish processing auth callback...');
  await page.waitForLoadState('load', { timeout: 60000 });
  console.log(`      URL after load: ${page.url()}`);

  // ─── HANDLE "GO TO HOME" POPUP ───────────────────────────
  // The popup takes time to render — give it up to 20s to appear
  console.log('\n[5/7] Checking for "Go to Home" popup...');
  const goToHomeBtn = page.locator("//span[normalize-space()='Go to Home']");
  const popupAppeared = await goToHomeBtn
    .waitFor({ state: 'visible', timeout: 20000 })
    .then(() => true)
    .catch(() => false);

  if (popupAppeared) {
    console.log('      "Go to Home" popup found — clicking it...');
    await goToHomeBtn.first().click();
    console.log('      Clicked. Waiting for /home redirect...');
  } else {
    console.log(`      "Go to Home" popup did NOT appear (timeout 20s)`);
    console.log(`      Current URL: ${page.url()}`);
    console.log('      Proceeding to wait for /home directly...');
  }

  // ─── WAIT FOR HOME PAGE ──────────────────────────────────
  console.log('\n[6/7] Waiting for /home URL...');
  try {
    await page.waitForURL(`${baseURL}/home`, { timeout: 120000 });
    console.log(`      ✅ Home page reached: ${page.url()}`);
  } catch (err) {
    console.log(`      ❌ FAILED to reach /home within 120s`);
    console.log(`      Current URL at timeout: ${page.url()}`);
    console.log(`      Page title: ${await page.title()}`);
    throw err;
  }

  // ─── PRE-CONDITION SETUP ─────────────────────────────────
  console.log('\n[7/7] Running pre-condition setups...');
  console.log('      [7b] User & Department Setup...');
  await userAndDepartmentSetup(page, context);
  console.log('      ✅ User & Department Setup done');
  console.log('      [7a] Role Setup...');
  await roleSetup(page, context);
  console.log('      ✅ Role Setup done');
  console.log('      [7c] Risk Category Setup...');
  await riskCategorySetup(page, context);
  console.log('      ✅ Risk Category Setup done');
  console.log('      [7d] Issue Type Setup...');
  await issueTypeSetup(page, context);
  console.log('      ✅ Issue Type Setup done');
  console.log('      [7e] Methodology Setup...');
  await methodologySetup(page, context);
  console.log('      ✅ Methodology Setup done');
  // console.log('      [7f] Framework Setup...');
  // await frameworkSetup(page, context);
  // console.log('      ✅ Framework Setup done');

  // ─── SAVE AUTH STATE ─────────────────────────────────────
  console.log('\nSaving authentication state to LoginAuthCQ.json...');
  await context.storageState({ path: 'LoginAuthCQ.json' });
  console.log('✅ Auth state saved');

  // ─── CLOSE BROWSER ───────────────────────────────────────
  await page.close();
  await browser.close();

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('GLOBAL SETUP COMPLETED SUCCESSFULLY');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

export default globalSetup;
