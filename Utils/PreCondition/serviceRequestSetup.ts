
// Commeted due to the issue in employee creation, need to fix that first and then uncomment this code BUG- 2555


// import {
//     Page,
//     BrowserContext
// } from '@playwright/test';

// import { ECUATPage }
//     from '@pages/UAT_TestCases_Page';

// export async function serviceRequestSetup(
//     page: Page,
//     context: BrowserContext
// ) {

//     const ecUATPage =
//         new ECUATPage(page, context);

//     // =========================
//     // EMPLOYEE CREATION
//     // =========================

//     await ecUATPage.clickOnUserAndDepartment();
//     await ecUATPage.verifyEmployeeTabIfNotThenCreateEmployee();
//     await ecUATPage.enterEmpUsername();
//     await ecUATPage.enterEmpFullName();
//     await ecUATPage.enterEmpEmail2();
//     await ecUATPage.enterEmpTitle();
//     await ecUATPage.selectDepartmentFromDropdown();
//     await ecUATPage.clickOnCreate();
//     await ecUATPage.validateSuccessMsg();
//     await ecUATPage.verifyEmployeeAndClickThreeDots();
//     await ecUATPage.clickNotifyButton();
//     await ecUATPage.validateNotifySuccessMsg();

//     // =========================
//     // SERVICE REQUEST TYPE SETUP
//     // =========================

//     await ecUATPage.clickOnSettings();
//     await ecUATPage.clickOnServiceReqSettings();
//     await ecUATPage.clickOnNewReqTypeButton();
//     await ecUATPage.clickAndSelectReqType();
//     await ecUATPage.enterCustomReqTypeName();
//     await ecUATPage.selectIssueDepartment();
//     await ecUATPage.selectReqTypeOwnerOwner();
//     await ecUATPage.enterMaxDaysToComplete();
//     await ecUATPage.clickOnAdd();
//     await ecUATPage.validateCreatedSuccessMsg();

//     // =========================
//     // EMPLOYEE ACTIVATION
//     // =========================

//     await ecUATPage.openResetPasswordLinkFromYopmail(
//         ecUATPage.employeeUserEmail
//     );

//     await ecUATPage.enterPasswordAndConfirm();
//     await ecUATPage.clickChangeButton();

//     // =========================
//     // EMPLOYEE PORTAL LOGIN
//     // =========================

//     await ecUATPage.loginToEmployeePortal();
//     await ecUATPage.clickOnEmpPortalMenubarExpand();

//     // =========================
//     // SERVICE REQUEST CREATION
//     // =========================

//     await ecUATPage.clickOnServiceRequest();
//     await ecUATPage.clickOnNewRequestButton();
//     await ecUATPage.clickAndSelectReqTypeFilter();
//     await ecUATPage.clickAndSelectReqPriorityLevel();
//     await ecUATPage.enterRequestTitle();
//     await ecUATPage.clickOnSubmitRequestButton();
//     await ecUATPage.validateSubmittededSuccessMsg();

//     console.log('Service Request setup completed successfully');
// }