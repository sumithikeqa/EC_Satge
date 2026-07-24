import {
  Page,
  BrowserContext
} from '@playwright/test';

import { ECPreConditionPage }
  from '@pages/PreconditionPage';

import { ECUATPage }
  from '@pages/UAT_TestCases_Page';

export async function frameworkSetup(
  page: Page,
  context: BrowserContext
) {

  const ecPreconditionPage =
    new ECPreConditionPage(page, context);

  const ecUATPage =
    new ECUATPage(page, context);

  // =========================
  // MENU EXPAND
  // =========================

  // await ecUATPage.clickOnMenubarExpand();

  // =========================
  // FRAMEWORK SETUP
  // =========================

  await ecPreconditionPage.clickOnFrameworkSettings();
  await ecPreconditionPage.clickOnFrameWorkCheckbox();
  await ecPreconditionPage.clickOnSaveButton();
  await ecPreconditionPage.validateSuccessMsg();

  // =========================
  // FRAMEWORK CLONE
  // =========================

  await ecPreconditionPage.clickOnComplaince();
  await ecPreconditionPage.clickOnFarmeworkAndValidateThePage();
  await ecPreconditionPage.createFrameworkIfMissing();

  console.log(
    'Framework setup completed successfully'
  );

  await ecPreconditionPage.clickOnRiskManagement();
  await ecPreconditionPage.clickOnRiskTemplate();
  await ecPreconditionPage.clickOnLibraryTab();
  await ecPreconditionPage.copyTemplateIfExists();
}