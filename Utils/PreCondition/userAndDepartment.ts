import {
  Page,
  BrowserContext
} from '@playwright/test';

import { ECPreConditionPage }
  from '@pages/PreconditionPage';

import { ECUATPage }
  from '@pages/UAT_TestCases_Page';

export async function userAndDepartmentSetup(
  page: Page,
  context: BrowserContext
) {

  const ecPreconditionPage =
    new ECPreConditionPage(page, context);

  const ecUATPage =
    new ECUATPage(page, context);

  await ecUATPage.clickOnMenubarExpand();
  await ecPreconditionPage.clickOnUserAndDept();
 // First Careate the Department then create External User and then create Internal User and assign the created department to both users. This is because department is a mandatory field while creating user and we need to assign the same department to both users to avoid creating multiple departments in case of multiple test runs.
  await ecPreconditionPage.clickOnDepartments();
  await ecPreconditionPage.validateTableVisible();
  await ecPreconditionPage.createDepartmentIfNotExists('Automation Created Department');
  await ecPreconditionPage.clickOnExternalUsers();
  await ecPreconditionPage.validateTableVisible();
  await ecPreconditionPage.createExternalUserIfNotExists('Automation External User','automation1@solidrange.com');
  await ecPreconditionPage.clickOnUsers();
  await ecPreconditionPage.validateTableVisible();
  await ecPreconditionPage.createUserIfNotExists('Automation Internal User')
  await ecPreconditionPage.createUserIfNotExists('Automation_QA_User')
  //await ecPreconditionPage.createUserIfNotExists('Automation_SRC Updated')
}
