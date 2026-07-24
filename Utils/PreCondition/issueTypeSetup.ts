import {
  Page,
  BrowserContext} from '@playwright/test';

import { ECPreConditionPage }
  from '@pages/PreconditionPage';

import { ECUATPage }
  from '@pages/UAT_TestCases_Page';

export async function issueTypeSetup(
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
  // await ecPreconditionPage.clickOnSetttings();
  await ecPreconditionPage.clickOnIssueSetting();
  await ecPreconditionPage.validateIssueTypeTableVisible();
  await ecPreconditionPage.createIssueTypeIfNotExists('Automation_Issue_Type');
  await ecPreconditionPage.clickOnPolicyAndDOcSettings();
  await ecPreconditionPage.validateDocTypeTableVisible();
  await ecPreconditionPage.createDocumentTypeIfNotExists('Automation_Document_Type');

}
