import {
  Page,
  BrowserContext
} from '@playwright/test';

import { ECPreConditionPage }
from '@pages/PreconditionPage';

import { ECUATPage }
from '@pages/UAT_TestCases_Page';

export async function methodologySetup(
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
  // OPEN METHODOLOGY PAGE
  // =========================

  // await ecPreconditionPage.clickOnSetttings();
  await ecPreconditionPage.clickOnRiskSettings();
  await ecPreconditionPage.clickOnAssesmentCriteriaUpdate();
  
  // =========================
  // CHECK EXISTING METHODOLOGY
  // =========================

  await ecPreconditionPage.createMethodologyIfNotExists('Automation_Methodology_QA'); 
  }
