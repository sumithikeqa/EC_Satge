import {
  Page,
  BrowserContext
} from '@playwright/test';

import { ECPreConditionPage }
from '@pages/PreconditionPage';

import { ECUATPage }
from '@pages/UAT_TestCases_Page';

export async function roleSetup(
  page: Page,
  context: BrowserContext
) {

  const ecPreconditionPage =
    new ECPreConditionPage(page, context);

  const ecUATPage =
    new ECUATPage(page, context);
  //await ecUATPage.clickOnMenubarExpand(); // Click on menu bar expand to ensure all menu items are visible
  //await ecPreconditionPage.clickOnUserAndDept();
  await ecPreconditionPage.clickOnRoles();
  await ecPreconditionPage.searchSystemAdminRole();
  await ecPreconditionPage.clickOnSearchIcon();
  await ecPreconditionPage.validateSearchedRole();
  // await ecPreconditionPage.clickOnUserAndDept(); // Click again to reset the view before creating new role
  await ecPreconditionPage.clickOnRoles();
  await ecPreconditionPage.validateTableVisible();
  await ecPreconditionPage.createRoleIfNotExists('Automation_Role');
  await ecPreconditionPage.createRoleIfNotExists('Automation_Role_Contributor');
  console.log(
    'Role setup completed successfully'
  );
}