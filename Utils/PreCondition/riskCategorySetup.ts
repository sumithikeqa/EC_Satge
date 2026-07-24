import {
  Page,
  BrowserContext,
  expect
} from '@playwright/test';

import { ECPreConditionPage }
  from '@pages/PreconditionPage';

import { ECUATPage }
  from '@pages/UAT_TestCases_Page';

export async function riskCategorySetup(
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

  await ecPreconditionPage.clickOnSetttings();
  await ecPreconditionPage.clickOnRiskSettings();
  await ecPreconditionPage.clickOnGenrelRiskCategoryUpdate();
  await ecPreconditionPage.validateRiskCategoryTableVisible();
  await ecPreconditionPage.createRiskCategoryIfNotExists('Automation_Vendor')
  await ecPreconditionPage.validateAssetCategoryTableVisible();
  await ecPreconditionPage.createAssetCategoryIfNotExists('Automation_Category_Test')
  await ecPreconditionPage.validateProcessCategoryTableVisible();
  await ecPreconditionPage.createProcessCategoryIfNotExists('Automation_Process_Category')
  await ecPreconditionPage.validateThreatTypeTableVisible();
  await ecPreconditionPage.createThreatTypeIfNotExists('Automation_Threat_Type')
  await ecPreconditionPage.validateVulnerabilitySourcesTableVisible();
  await ecPreconditionPage.createVulnerabilitySourceIfNotExists('Automation_Vulnerability_Source')
}
