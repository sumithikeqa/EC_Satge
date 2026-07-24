import test from '@base/lib/BaseTest';
import { testConfig } from '@base/testConfig';

// Playwright handles page cleanup automatically — manual page.close() here
// prevents screenshot/video capture on failure, so it has been removed.

// test.beforeEach(async ({ ecUATPage }) => {
//   await ecUATPage.waitForHomePageLoad();
//   await ecUATPage.clickOnMenubarExpand();
// });


test(`TC - 100 - verify that after unselecting the checkbox permission from a role that permission is working for the user who has assigned ecUATPage role or not @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnRoles();
  await ecUATPage.clickOnUserHamburger();
  await ecUATPage.clickOnUserEdit();
  await ecUATPage.uncheckPermisionCheckBox();
  await ecUATPage.clickOnUserSave();
  await ecUATPage.clickOnUserIcon();
  await ecUATPage.clickOnLogOut();
  await ecUATPage.performlogin();
  await ecUATPage.clickOnAuditManegement();
  await ecUATPage.clickOnAudits();
  await ecUATPage.clickOnIssueHamburger();
  await ecUATPage.validateOptionNotVisible();
});

test(`TC - 101 - verify that after selecting the checkbox permission from a role that permission is working for the user who has assigned ecUATPage role or not @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnRoles();
  await ecUATPage.clickOnUserHamburger();
  await ecUATPage.clickOnUserEdit();
  await ecUATPage.checkPermisionCheckBox();
  await ecUATPage.clickOnUserSave();
  await ecUATPage.clickOnUserIcon();
  await ecUATPage.clickOnLogOut();
  await ecUATPage.performlogin();
  await ecUATPage.clickOnAuditManegement();
  await ecUATPage.clickOnAudits();
  await ecUATPage.clickOnIssueHamburger();
  await ecUATPage.validateOptionVisible();
});

test(`TC - 102 - verify that search functionality working at Risk register filter or not @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.enterValueInSearchField();
  await ecUATPage.clickOnSearchIcon();
});

test(`TC - 103 - View user is able to cancel Task @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnTasks();
  await ecUATPage.clickOnAllTaskTab()
  await ecUATPage.clickOnTaskCheckbox();
  await ecUATPage.clickOnTasKFilter();
  await ecUATPage.cancelTaskIfEnabled();
});

test(`TC - 105 - View user is able to Re assign the Task @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnTasks();
  await ecUATPage.clickOnAllTaskTab()
  await ecUATPage.clickOnTaskCheckbox();
  await ecUATPage.clickOnTasKFilter();
  await ecUATPage.performReAssignIfEnabled();
});

test(`TC - 104 - View user is able to Delete the Task @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnTasks();
  await ecUATPage.clickOnAllTaskTab()
  await ecUATPage.clickOnTaskCheckbox();
  await ecUATPage.clickOnTasKFilter();
  await ecUATPage.clickOnTaskDelete();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test(`TC - 106 - Verify tabs for "Assigned to Me' and 'Assigned to my Department' are present on Workspace @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnWorksapace();
  await ecUATPage.validateWorkspacePage();
});

test(`TC - 109 - verify that user is able to fetch complete status task or not @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnTasks();
  await ecUATPage.clickOnAllTaskTab();
  await ecUATPage.clickOnCompeletedToggle();
  await ecUATPage.validateCompletedStatus();
});

test(`TC - 40 - Add risk through creating a new risk @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnVendorManagement();
  await ecUATPage.clickOnVendorTab();
  await ecUATPage.validateVendorPage();
  await ecUATPage.clickOnAddVendor();
  await ecUATPage.enterVendorName('Automation_Vendor');
  await ecUATPage.enterAddress('Automation_Address09');
  await ecUATPage.clickAndSelectVendorType();
  await ecUATPage.clickAndSelectVendorDepartment();
  await ecUATPage.enterPhoneNumber();
  await ecUATPage.clickAndSelectVendorManager();
  await ecUATPage.clickAndSelectVendorRisk();
  await ecUATPage.enterProductName('Automation_Product');
  await ecUATPage.enterWebsite('AutomationWeb');
  await ecUATPage.enterDomain('Automation_Domain');
  await ecUATPage.enterVendorDesc('Automation_Desc');
  await ecUATPage.clickOnAddContact();
  await ecUATPage.enterConatactName('Automation_Testing_Contact');
  await ecUATPage.enterPosition('Automation_Position');
  await ecUATPage.enterContactPhoneNumber();
  await ecUATPage.enterEmail();
  await ecUATPage.clickOnAddButton();
  await ecUATPage.clickOnCreatevendor();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnRiskSettings();
  await ecUATPage.clickOnAssesmentCritaria();
  await ecUATPage.clickOnMethelogyTab();
  await ecUATPage.selectMethelogyCheckbox();
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickOnNewRiskDropdown();
  await ecUATPage.clickOnCreateRisk();
  await ecUATPage.clickOnRiskRadioButton();
  await ecUATPage.enterRiskTitle('Automation_Risk_Create');
  await ecUATPage.enterRiskStatementC();
  await ecUATPage.clickSelectRiskCategory();
  await ecUATPage.clickSelectRiskSource();
  await ecUATPage.clickSelectRiskSourceCategory();
  await ecUATPage.clickAndSelectIdentifierDate();
  await ecUATPage.clickOnSummaryRadio();
  await ecUATPage.enterAssesmentScope();
  await ecUATPage.clickAndSelectDepartment('Automation Created Department');
  await ecUATPage.SelectVendorUser();
  await ecUATPage.enterCustomerParameter();
  await ecUATPage.clickONNext();
  await ecUATPage.confidentialySlider();
  await ecUATPage.intigritySliderAssert();
  await ecUATPage.availabilitySlider();
  await ecUATPage.clickConfidenciallySlider();
  await ecUATPage.clickOnNextButton();
  await ecUATPage.clickIfSliderVisible();
  await ecUATPage.clickOnFinish();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 45 - Add a new assessment to a risk @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickAndSelectRisk();
  await ecUATPage.clickOnNewAssesment();
  await ecUATPage.clickOnSlider();
  await ecUATPage.clickONNext();
  await ecUATPage.clickOnCreateAssesment();
  await ecUATPage.validateAssismentAdded();
});

test('TC - 46 - Review the risk assessment log history @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickAndSelectRisk();
  await ecUATPage.clickOnAssesmentHistioryButton();
  await ecUATPage.validateAssesmentHistoryPopUp();
});

test(`TC - 43 - Request treatment plan to a risk @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickAndSelectRisk();
  await ecUATPage.clickOnNewTreatement();
  await ecUATPage.clickOnTreatmentRequestPlan();
  await ecUATPage.clickAndSelectDueDate();
  await ecUATPage.clickAndSelectTaskOwner();
  await ecUATPage.clickOnAddApproverBUtton();
  await ecUATPage.clickAndSelectApprovar();
  await ecUATPage.clickOnSendButton();
  await ecUATPage.validateSuccessMsg();

});

test('TC - 62 - Add risk from an initiative @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnRiskSettings();
  await ecUATPage.clickOnAssesmentCritaria();
  await ecUATPage.clickOnMethelogyTab();
  await ecUATPage.selectMethelogyCheckbox();
  await ecUATPage.clickOnInitiativeManagement();
  await ecUATPage.clickOnInitiative();
  await ecUATPage.clickAndSelectInitiative();
  await ecUATPage.clickOnRisks();
  await ecUATPage.clickOnNewRiskButton();
  await ecUATPage.clickOnRiskRadioButton();
  await ecUATPage.enterRiskTitle('intivate');
  await ecUATPage.enterRiskStatementC();
  await ecUATPage.enterCustomerParameter();
  await ecUATPage.clickSelectRiskCategory();
  await ecUATPage.clickAndSelectIdentifierDate();
  await ecUATPage.clickOnSummaryRadio();
  await ecUATPage.enterAssesmentScope();
  await ecUATPage.clickAndSelectDepartment('Automation Created Department');
  await ecUATPage.SelectVendorUser();
  await ecUATPage.clickONNext();
  await ecUATPage.clickConfidenciallySlider();
  await ecUATPage.intigritySliderAssert();
  await ecUATPage.confidentialySlider();
  await ecUATPage.availabilitySlider();
  await ecUATPage.clickOnNextbutton();
  await ecUATPage.clickIfSliderVisibleItivate();
  await ecUATPage.clickOnFinish();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 42 - Add treatment plan to a risk @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickAndSelectRisk();
  await ecUATPage.clickOnNewTreatement();
  await ecUATPage.clickOnAddTreatmentPlan();
  await ecUATPage.enterTreatmentName();
  await ecUATPage.enterTreatmentDesc();
  await ecUATPage.enterTreatmentCost();
  await ecUATPage.clickAndSelectTreatmentOwner();
  await ecUATPage.clickOnTreatmentSave();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 60 - Link Risk Treatment to initiative @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnInitiativeManagement();
  await ecUATPage.clickOnInitiative();
  await ecUATPage.clickAndSelectInitiative();
  await ecUATPage.clickOnLinkRisktreatment();
  await ecUATPage.selectMapControlCheckbox();
  await ecUATPage.clickOnMapControlButton();
});

test('TC - 44 - View treatment history of a risk @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickAndSelectRisk();
  await ecUATPage.clickOnTreatmentHistioryButton();
  await ecUATPage.validateTreatmentHistoryPopUp();
});

test('TC - 41 - Add risk through assigning new risk to a user @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickOnNewRiskDropdown();
  await ecUATPage.clickOnRiskAssign();
  await ecUATPage.clickOnRiskRadioButton();
  await ecUATPage.enterRiskTitle('assign');
  await ecUATPage.enterRiskStatementC();
  await ecUATPage.clickSelectRiskCategory();
  //New changes
  await ecUATPage.clickSelectRiskSource();
  await ecUATPage.clickSelectRiskSourceCategory();
  //
  await ecUATPage.clickAndSelectIdentifierDate();
  await ecUATPage.clickOnSummaryRadio();
  await ecUATPage.enterAssesmentScope();
  await ecUATPage.clickAndSelectDepartment('Automation Created Department');
  await ecUATPage.SelectVendorUser();
  await ecUATPage.enterCustomerParameter();
  await ecUATPage.clickAndSelectDueDate();
  await ecUATPage.clickOnAddApproverBUtton();
  await ecUATPage.clickAndSelectTaskOwner();
  await ecUATPage.clickAndSelectApprovar();
  await ecUATPage.clickOnAdd();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 71 - Add a new document through "Choose from a template @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickOnNewDoc();
  await ecUATPage.clickOnPicktemplate();
  await ecUATPage.createTemplateIfNotExists();
  await ecUATPage.clickOnUseTemplate();
  await ecUATPage.enterTittle('Automaton Template Doc');
  await ecUATPage.enterDescriptionGov('Description for template document');
  await ecUATPage.clickAndSelectType();
  await ecUATPage.clickAndSelectdistribution();
  await ecUATPage.clickAndSelectFromDate();
  await ecUATPage.clickAndSelectToDate();
  await ecUATPage.clickONOwnerShhipButton();
  await ecUATPage.SelectDepartment();
  await ecUATPage.clickAndSelectOwner('Automation_QA_User');
  await ecUATPage.enterVersion('5');
  await ecUATPage.clickONNext();
  await ecUATPage.clickONNext();
  await ecUATPage.clickOnFinish();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 73 - Verifying Activating the document @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickOnNewDoc();
  await ecUATPage.clickOnCreateDoc();
  await ecUATPage.enterTittle('Document Created by automation');
  await ecUATPage.enterDescriptionGov('Description for template document');
  await ecUATPage.clickAndSelectType();
  await ecUATPage.clickAndSelectdistribution();
  await ecUATPage.clickAndSelectFromDate();
  await ecUATPage.clickAndSelectToDate();
  await ecUATPage.clickONOwnerShhipButton();
  await ecUATPage.SelectDepartment();
  await ecUATPage.selectIssueOwnerGov();
  await ecUATPage.enterVersion('5');
  await ecUATPage.clickONNext();
  await ecUATPage.enterDocText('Automation_Text');
  await ecUATPage.clickONNext();
  await ecUATPage.clickOnFinish();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickActivateIfAvailable();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 74 - Publish a document to the employee portal @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickPublishIfAvailable();
  await ecUATPage.validateSuccessMsg();
});

test(`TC - 72 - Add a new document through "Upload a document @Uat @Sanity @Regression`, async ({ ecUATPage, page }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickOnNewDoc();
  await ecUATPage.clickOnUploadfromDevice();
  await ecUATPage.enterTittle('Upload Document for Automation');
  await ecUATPage.enterDescriptionGov('Description for uploaded document');
  await ecUATPage.clickAndSelectType();
  await ecUATPage.clickAndSelectdistribution();
  await ecUATPage.clickAndSelectFromDate();
  await ecUATPage.clickAndSelectToDate();
  await ecUATPage.clickONOwnerShhipButton();
  await ecUATPage.SelectDepartment();
  await ecUATPage.clickAndSelectOwner('Automation_QA_User');
  await ecUATPage.enterVersion('5');
  await ecUATPage.clickONNext();
  await ecUATPage.uploadDocFile(page);
  await ecUATPage.validateFileUploaded();
  await ecUATPage.clickONNext();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 112 - verify that Documents ,Risks and Evidence add in internal control or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickInternalControlTab();
  await ecUATPage.clickOnInternalControl();
  await ecUATPage.clickAndMapDoc();
  await ecUATPage.validateSuccessMSg();
  await ecUATPage.clickAndMapEvidence();
  await ecUATPage.validateSuccessMSg();
});

test('TC - 113 - verify that user is able to delete document or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickOnHamburgerGov();
  await ecUATPage.clickOnRemarkDelete();
  await ecUATPage.clickOnDelete();
  await ecUATPage.validateDeleteSuccessMsg();
});

test('TC - 114 - verify that user is able to retire the document or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickOnNewDoc();
  await ecUATPage.clickOnCreateDoc();
  await ecUATPage.enterTittle('Document Created by automation');
  await ecUATPage.enterDescriptionGov('Description for template document');
  await ecUATPage.clickAndSelectType();
  await ecUATPage.clickAndSelectdistribution();
  await ecUATPage.clickAndSelectFromDate();
  await ecUATPage.clickAndSelectToDate();
  await ecUATPage.clickONOwnerShhipButton();
  await ecUATPage.SelectDepartment();
  await ecUATPage.selectIssueOwnerGov();
  await ecUATPage.enterVersion('5');
  await ecUATPage.clickONNext();
  await ecUATPage.enterDocText('Automation_Text');
  await ecUATPage.clickONNext();
  await ecUATPage.clickOnFinish();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickActivateIfAvailable();
  await ecUATPage.clickOnHamburgerGov();
  await ecUATPage.clickOnRetire();
  await ecUATPage.clickOnRetireButton();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 115 - verify that user is able to request attestation for the document or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickOnNewDoc();
  await ecUATPage.clickOnCreateDoc();
  await ecUATPage.enterTittle('Document Created by automation');
  await ecUATPage.enterDescriptionGov('Description for template document');
  await ecUATPage.clickAndSelectType();
  await ecUATPage.clickAndSelectdistribution();
  await ecUATPage.clickAndSelectFromDate();
  await ecUATPage.clickAndSelectToDate();
  await ecUATPage.clickONOwnerShhipButton();
  await ecUATPage.SelectDepartment();
  await ecUATPage.selectIssueOwnerGov();
  await ecUATPage.enterVersion('5');
  await ecUATPage.clickONNext();
  await ecUATPage.enterDocText('Automation_Text');
  await ecUATPage.clickONNext();
  await ecUATPage.clickOnFinish();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickActivateIfAvailable();
  await ecUATPage.clickPublishIfAvailable();
  await ecUATPage.clickOnHamburgerGov();
  await ecUATPage.clickOnReqAttestation();
  await ecUATPage.clickOnSendAttestation();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 116 - verify that user is able to add new version for the document or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.ensureActiveDocumentPresent();
  await ecUATPage.clickOnDocNameVersion1();
  await ecUATPage.clickOnVersionHistoryTab();
  await ecUATPage.clickNewVersionButton();
  await ecUATPage.enterNewVersion();
  await ecUATPage.clickONNext2Times();
  await ecUATPage.clickOnFinish();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.deleteCreatedDocument();
});

test('TC - 117 - verify that user is able to extend validity for the document or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickOnHamburgerGov();
  await ecUATPage.clickOnExtendValidity();
  await ecUATPage.clickAndSelectValidityDate();
  await ecUATPage.clickOnExtendValiditySave();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 118 - verify that user is able to edit the Risk or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickHamburgerUntilEditVisible();
  await ecUATPage.clickOnRiskEdit();
  await ecUATPage.enterRiskDescription();
  await ecUATPage.clickOnRiskSave();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 119 - Verify that user is able to delete the Risk or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickOnRiskHamburger();
  await ecUATPage.clickOnDeleteRisk();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});


test('TC - 121 - Verify that user is able to edit initiative or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnInitiativeManagement();
  await ecUATPage.clickOnInitiative();
  await ecUATPage.clickOnInitiativeHamburger();
  await ecUATPage.clickOnIntiativeEdit();
  await ecUATPage.enterInitiativeName();
  await ecUATPage.clickOnSaveEdit();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 120 - Verify that user is able to delete the initiative or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnInitiativeManagement();
  await ecUATPage.clickOnInitiative();
  await ecUATPage.clickOnNewInitiative();
  await ecUATPage.enterInitiativeTittle();
  await ecUATPage.enterInitiativeDesc();
  await ecUATPage.clickOnRadioButton();
  await ecUATPage.clickAndSelectStartDate();
  await ecUATPage.clickAndSelectEndDate();
  await ecUATPage.SelectPurpose();
  await ecUATPage.selectInitiativeDepartment();
  await ecUATPage.SelectInitiativeOwner();
  await ecUATPage.clickOnCreate();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.clickOnInitiativeHamburger();
  await ecUATPage.clickOnInitiativeDelete();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test('TC - 122 - Verify that user is able to edit vendor or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnVendorManagement();
  await ecUATPage.clickOnVendorTab();
  await ecUATPage.clickVendorHamburger();
  await ecUATPage.clickOnVendorEdit();
  await ecUATPage.enterVendorNewName();
  await ecUATPage.clickOnSaveEdit();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 123 - Verify that user is able to delete the vendor or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnVendorManagement();
  await ecUATPage.clickOnVendorTab();
  await ecUATPage.clickVendorHamburger();
  await ecUATPage.clickOnDeleteVendor();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test('TC - 125 - Verify that user is able to edit the Audit or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnAuditManegement();
  await ecUATPage.clickOnAudits();
  await ecUATPage.verifyAuditExistsOrCreateAndEditAudit();
  await ecUATPage.clickOnAuditHamburger();
  await ecUATPage.clickOnAuditEdit();
  await ecUATPage.enterAuditNewName();
  await ecUATPage.clickOnAuditSave();
  await ecUATPage.validateSuccessMsg();
});


test('TC - 124 - Verify that user is able to delete the Audit or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnAuditManegement();
  await ecUATPage.clickOnAudits();
  await ecUATPage.verifyAuditExistsOrCreateAndEdit();
  await ecUATPage.clickOnAuditHamburger();
  await ecUATPage.clickOnDeleteAudit();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test('TC - 126 - Verify that able to add risk through Bulk import or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnRiskSettings();
  await ecUATPage.clickOnAssesmentCritaria();
  await ecUATPage.clickOnMethelogyTab();
  await ecUATPage.selectMethelogyCheckbox();
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickOnNewRiskDropdown();
  await ecUATPage.clickOnBulkImport();
  await ecUATPage.clickAndSelectRiskMethodology();
  await ecUATPage.clickOnContinue();
  await ecUATPage.selectParentCheckbox();
  await ecUATPage.selectFiveCheckbox();
  await ecUATPage.clickOnDeleteRiskButton();
  await ecUATPage.clickOnYesRiskButton();
  await ecUATPage.enterRiskTitleBulk();
  await ecUATPage.selectRiskCategoryBulk();
  await ecUATPage.selectRiskOwnersBulk();
  await ecUATPage.clickAndSelectIdentifierDateBulk();
  await ecUATPage.selectRiskAssesmentRadioBulk();
  await ecUATPage.enterRiskAssesmentScopeBulk();
  await ecUATPage.selectRiskProbilityAndImpactBulk();
  await ecUATPage.clickOnFinalizeImport();
  await ecUATPage.validateImportStartedMsgVisible();
});

test('TC - 127 - Verify that able to add Asset through Bulk import or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnCatalog();
  await ecUATPage.clickOnNewAssert();
  await ecUATPage.clickOnBulkImportCatelog();
  await ecUATPage.selectParentCheckbox();
  await ecUATPage.selectFiveCheckbox();
  await ecUATPage.clickOnDeleteRiskButton();
  await ecUATPage.clickOnYesRiskButton();
  await ecUATPage.enterAssertNameBulk();
  await ecUATPage.selectAssertDeptAndOwnerBulk();
  await ecUATPage.selectOptionFromDropdownBulk();
  await ecUATPage.clickOnFinalizeImport();
});

test('TC - 128 - Verify that able to add Process through Bulk import or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnCatalog();
  await ecUATPage.clickOnProcess();
  await ecUATPage.clickOnNewProcess();
  await ecUATPage.clickOnBulkImportCatelog();
  await ecUATPage.selectParentCheckbox();
  await ecUATPage.selectFiveCheckbox();
  await ecUATPage.clickOnDeleteRiskButton();
  await ecUATPage.clickOnYesRiskButton();
  await ecUATPage.enterProcessNameBulk();
  await ecUATPage.selectOptionFromDropdownBulk();
  await ecUATPage.clickOnFinalizeImport();
  await ecUATPage.validateAssertBulkMsg();
});

test('TC - 129 - Verify that able to add Threat through Bulk import or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnCatalog();
  await ecUATPage.clickOnThreats();
  await ecUATPage.clickOnNewThreat();
  await ecUATPage.clickOnBulkImportCatelog();
  await ecUATPage.selectParentCheckbox();
  await ecUATPage.selectFiveCheckbox();
  await ecUATPage.clickOnDeleteRiskButton();
  await ecUATPage.clickOnYesRiskButton();
  await ecUATPage.enterThreatNameBulk();
  await ecUATPage.selectOptionFromDropdownBulk();
  await ecUATPage.clickOnFinalizeImport();
  await ecUATPage.validateAssertBulkMsg();
});

test('TC - 130 - Verify that able to add Vulnerability through Bulk import or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnCatalog();
  await ecUATPage.clickOnVulability();
  await ecUATPage.clickOnNewVulability();
  await ecUATPage.clickOnBulkImportCatelog();
  await ecUATPage.selectParentCheckbox();
  await ecUATPage.selectFiveCheckbox();
  await ecUATPage.clickOnDeleteRiskButton();
  await ecUATPage.clickOnYesRiskButton();
  await ecUATPage.enterVulabilityNameBulk();
  await ecUATPage.selectOptionFromDropdownBulk();
  await ecUATPage.clickOnFinalizeImport();
  await ecUATPage.validateAssertBulkMsg();
});

test('TC - 131 - Verify that user is able to Add Risk controls or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskControl();
  await ecUATPage.clickOnAddControl();
  await ecUATPage.enterRiskControlEngName();
  await ecUATPage.enterRiskControlArbName();
  await ecUATPage.clickOnAddButton();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 132 - Verify that user is able to edit Risk controls or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskControl();
  await ecUATPage.clickOnHamburger();
  await ecUATPage.clickOnEditButton();
  await ecUATPage.enterRiskControlNewEngName();
  await ecUATPage.clickOnUpdate();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 134 - Verify that user is able to fetch Details of Risk controls or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskControl();
  await ecUATPage.clickOnHamburger();
  await ecUATPage.clickOnControlDetails();
  await ecUATPage.validateRiskDetailsPage();
});

test('TC - 133 - Verify that user is able to Delete Risk controls or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskControl();
  await ecUATPage.clickOnHamburger();
  await ecUATPage.clickOnDeleteRiskControl();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test('TC - 136 -Verify that user is able to Deactivate the open and closed status risk or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickOnHamburgersTillDeactivateIsVisible();
  await ecUATPage.clickOnRiskDeactivate();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateRiskDeactivateSuccessMsg();
});

test('TC - 135 -Verify that user is able to Activate the ‘Inactive’ status risk or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickOnHamburgersTillActivateIsVisible();
  await ecUATPage.clickOnRiskActivate();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateRiskActivateSuccessMsg();
});

test('TC - 137 -Verify that user is able to Deactivate Active asset or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnCatalog();
  await ecUATPage.clickOnHamburgersTillDeactivateIsVisible();
  await ecUATPage.clickOnDeactivateAssert();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateInactiveStatusVisible()
});

test('TC - 138 -Verify that user is able to Activate the Inactive asset or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnCatalog();
  await ecUATPage.clickOnHamburgersTillActivateIsVisible();
  await ecUATPage.clickOnActivateButton();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateActiveStatusVisible();
});

test(`TC - 139 - Verify that the user is able to add custom framework`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnAddFrameworkButton();
  await ecUATPage.clickOnCustomFrameworkButton();
  await ecUATPage.clickAndSelectDomain();
  await ecUATPage.enterFrameworkName();
  await ecUATPage.enterFrameworkVersion('2');
  await ecUATPage.clickOnNext();
  await ecUATPage.clickOnAddNewControl();
  await ecUATPage.enterRefrenceNameEng();
  await ecUATPage.enterRefrenceNameArabic();
  await ecUATPage.enterText1()
  await ecUATPage.enterText2()
  await ecUATPage.clickOnAddToList();
  await ecUATPage.clickOnNextbutton();
  await ecUATPage.clickOnFinishButton();
  await ecUATPage.validateSuccessMsg();
});

test(`TC - 145 - Verify that the user is able to fetch details for the general framework @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.cilckOnFrameworkHamburger();
  await ecUATPage.clickOnDetailsFramework();
  await ecUATPage.validateFrameworkDetailPage();
});

test(`TC - 140 - Verify that the user is able to edit the general framework @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.cilckOnFrameworkHamburger();
  await ecUATPage.clickOnEditFramework();
  await ecUATPage.editEnterFrameworkNewName();
  await ecUATPage.clickOnSaveFramework();
  await ecUATPage.validateEditedFramework();
});

test(`TC - 144 - Verify that the user is able to fetch details for the custom framework @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnCustomFrameworkTab();
  await ecUATPage.cilckOnFrameworkHamburger();
  await ecUATPage.clickOnDetailsFramework();
  await ecUATPage.validateFrameworkDetailPage();
});

test(`TC - 141 - Verify that the user is able to edit the custom framework @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnCustomFrameworkTab();
  await ecUATPage.cilckOnFrameworkHamburger();
  await ecUATPage.clickOnEditFramework();
  await ecUATPage.editEnterCustonFrameworkNewName();
  await ecUATPage.enterFrameworkVersion('8');
  await ecUATPage.clickOnNext();
  await ecUATPage.clickOnNextbutton();
  await ecUATPage.clickOnFinishButton();
  await ecUATPage.clickOnCustomFrameworkTab();
  await ecUATPage.validateEditedFramework();
});

test(`TC - 143 - Verify that the user is able to delete the custom framework @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnCustomFrameworkTab();
  await ecUATPage.cilckOnFrameworkHamburger();
  await ecUATPage.clickOnDeleteFramework();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test('TC - 146 - Verify that user is able to delete internal control or not @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickInternalControlTab();
  await ecUATPage.validateInternalIntControlPage();
  await ecUATPage.createInternalControlIfHamburgerNotVisible();
  await ecUATPage.clickOnHamburgerGov();
  await ecUATPage.clickOnDeleteAudit();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test(`TC - 147 - verify that user is able to edit the evidence @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnEvidenceSetting();
  await ecUATPage.clickAndUncheckCheckbox();
  await ecUATPage.clickOnUpdate();
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnEvidence();
  await ecUATPage.updateEvidenceSettingsIfDataNotExists();
  await ecUATPage.clickonfilterIcon();
  await ecUATPage.clickonFilterByReadiness();
  await ecUATPage.clickonFilterButton();
  await ecUATPage.editEvidenceIfDataExists();
  await ecUATPage.clickOnEvidenceSetting();
  await ecUATPage.clickAndCheckCheckbox();
  await ecUATPage.clickOnUpdate();
});

test(`TC - 148 - verify that user is able to delete the evidence @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnEvidence();
  await ecUATPage.clickonfilterIcon();
  await ecUATPage.clickonFilterByReadiness();
  await ecUATPage.clickonFilterButton();
  await ecUATPage.deleteEvidenceIfDataExists();
});

test(`TC - 142 - Verify that the user is able to delete the general framework @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.cilckOnFrameworkHamburger();
  await ecUATPage.clickOnDeleteFramework();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test(`TC - 149 - Verify that user is able to download Template or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnTemplates();
  await ecUATPage.clickOnTemplateDownloadIcon();
  await ecUATPage.clickTemplatePdfFormatDownload();
  await ecUATPage.clickOnTemplateDownloadIcon();
  await ecUATPage.clickTemplateWordFormatDownload();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickOnTemplateHamburger();
  await ecUATPage.clickTemplatePdfDownload();
  await ecUATPage.clickOnTemplateHamburger();
  await ecUATPage.clickTemplateWordDownload();
});

test(`TC - 150 - Verify that user is able to add New request type or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnServiceReqSettings();
  await ecUATPage.clickOnNewReqTypeButton();
  await ecUATPage.clickAndSelectReqType();
  await ecUATPage.enterCustomReqTypeName();
  await ecUATPage.selectIssueDepartment();
  await ecUATPage.selectReqTypeOwnerOwner();
  await ecUATPage.enterMaxDaysToComplete();
  await ecUATPage.clickOnAdd();
  await ecUATPage.validateCreatedSuccessMsg();
});

//TC-168 Added here 

test(`TC - 168 - Verify that user is able to add new service request from employee portal or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnServiceReqSettings();
  await ecUATPage.clickOnNewReqTypeButton();
  await ecUATPage.clickAndSelectReqType();
  await ecUATPage.enterCustomReqTypeName();
  await ecUATPage.selectIssueDepartment();
  await ecUATPage.selectNewReqTypeOwner();
  await ecUATPage.enterMaxDaysToComplete();
  await ecUATPage.clickOnAdd();
  await ecUATPage.validateCreatedSuccessMsg();
  // New Employee add
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.verifyEmployeeExistsOrCreate();
  //Login to Emp Portal
  await ecUATPage.loginToEmployeePortal();
  await ecUATPage.clickOnEmpPortalMenubarExpand();
  //Issue service request
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnNewRequestButton();
  await ecUATPage.clickAndSelectReqTypeFilter();
  await ecUATPage.clickAndSelectReqPriorityLevel();
  await ecUATPage.enterRequestTitle();
  await ecUATPage.clickOnSubmitRequestButton();
  await ecUATPage.validateSubmittededSuccessMsg();
  await ecUATPage.loginToApplication();
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.verifyRequestTitleInMyRequests();
});

test(`TC - 151 - Verify that user is able to edit request type or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnServiceReqSettings();
  await ecUATPage.clickOnServiceReqTypeHamburger();
  await ecUATPage.clickOnEdit();
  await ecUATPage.enterServiceReqTypeName();
  await ecUATPage.clickOnSave();
  await ecUATPage.validateUpdateSuccessMsg()
});

test(`TC - 152 - Verify that user is able to Delete request type or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnServiceReqSettings();
  await ecUATPage.clickOnServiceReqTypeHamburger();
  await ecUATPage.clickDeleteDelegation();
  await ecUATPage.clickOnConfirmationDelete();
});

test(`TC - 155 - Verify that user is able to edit service request status setting or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnServiceReqSettings();
  await ecUATPage.clickOnServiceReqStatusHamburger();
  await ecUATPage.clickOnEdit();
  await ecUATPage.enterServiceStatusEngName();
  await ecUATPage.clickOnSave();
  await ecUATPage.validateUpdateSuccessMsg()
});

test(`TC - 156 - Verify that user is able to fetch details of service request status setting or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnServiceReqSettings();
  await ecUATPage.clickOnServiceReqStatusHamburger();
  await ecUATPage.clickOnAuditDetails();
  await ecUATPage.validateServiceReqStatusDetailsPopUp();
});

test(`TC - 157 - Verify that user is able to fetch ‘My request’, ‘My Department request’ and ‘All request’ or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.valiadateReqDataAvailableOrNot();
  await ecUATPage.clickOnMyDeptRequestTab();
  await ecUATPage.valiadateReqDataAvailableOrNot();
  await ecUATPage.clickOnAllRequestTab();
  await ecUATPage.valiadateReqDataAvailableOrNot();
});

test(`TC - 153 - Verify that user is able to filter ‘My request’ and ‘My department’ service request with ‘Request type’, ‘Status’, ‘Priority’, ‘Submitted By’, ‘Dues Date from’ and ‘Due Date To’ or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.clickonfilterIcon();
  await ecUATPage.clickAndSelectReqTypeFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectReqStatusFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectReqPriorityFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectReqSubmittedByFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectDueDateFrom();
  await ecUATPage.clickAndSelectDueDateTo();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  //Filter My Dept Tab
  await ecUATPage.clickOnMyDeptRequestTab();
  await ecUATPage.clickAndSelectReqTypeFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectReqStatusFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectReqPriorityFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectReqSubmittedByFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectDueDateFrom();
  await ecUATPage.clickAndSelectDueDateTo();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
});

test(`TC - 154 - Verify that user is able to filter ‘All request’ service request with ‘Request type’, ‘Status’, ‘Priority’, ‘Submitted By’, ‘Request owner’, ‘Dues Date from’ and ‘Due Date To’ or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnAllRequestTab();
  await ecUATPage.clickonfilterIcon();
  await ecUATPage.clickAndSelectReqTypeFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectReqStatusFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectReqPriorityFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectReqSubmittedByFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectReqOwnerFilter();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
  await ecUATPage.clickOnClearAllFilter();
  await ecUATPage.clickAndSelectDueDateFrom();
  await ecUATPage.clickAndSelectDueDateTo();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredData();
});

test(`TC - 158 - Verify that user is able to fetch details of service request or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.openDetailsIfHamburgerVisible();
});

test(`TC - 159 - Verify that user is able to Export PDF and Excel report of service request or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.exportServiceReqIfVisible();
});

test(`TC - 160 - Verify that user is able to Reassign service request or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.performServiceReqReAssignIfHamburgerVisible();
});

test(`TC - 161 - Verify that user is able to ‘Mark as complete’ the service request or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.markServiceReqAsCompleteIfAcceptedVisible();
});

test(`TC - 162 - Verify that user is able to add comment and attachment in service request or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.addCommentIfServiceReqVisible();
});

test(`TC - 163 - Verify that user is able to approve the service request or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.approveServiceReqIfUnderReviewVisible();
});

test(`TC - 164 - Verify that user is able to reject the service request or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.rejectServiceReqIfUnderReviewVisible();
});

test(`TC - 165 - Verify that user is able to complete the service request or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.completeServiceReqIfVisible();
});

test(`TC - 166 - Verify that user is able to Reassign the service request from three dots at details page of service request or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnMyRequestTab();
  await ecUATPage.reassignServiceReqIfVisible();
});

// test(`TC - 168 - Verify that user is able to add new service request from employee portal or not @Sanity @Regression`, async ({ ecUATPage }) => {
//   await ecUATPage.loginToEmployeePortal();
//   await ecUATPage.clickOnEmpPortalMenubarExpand();
//   await ecUATPage.clickOnServiceRequest();
//   await ecUATPage.clickOnNewRequestButton();
//   await ecUATPage.clickAndSelectReqTypeFilter();
//   await ecUATPage.clickAndSelectReqPriorityLevel();
//   await ecUATPage.enterRequestTitle();
//   await ecUATPage.clickOnSubmitRequestButton();
//   await ecUATPage.validateSubmittededSuccessMsg();
// });

test(`TC - 169 - Verify that user is able to withdrawn service request from employee portal or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.loginToEmployeePortal();
  await ecUATPage.clickOnEmpPortalMenubarExpand();
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnEmpPortalHamburgerOption();
  await ecUATPage.clickOnEmpPortalCrossIcon();
  await ecUATPage.clickOnYesButton();
});

test(`TC - 170 - Verify that user is able to add comment and attachment in service request from employee portal or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.loginToEmployeePortal();
  await ecUATPage.clickOnEmpPortalMenubarExpand();
  await ecUATPage.clickOnServiceRequest();
  await ecUATPage.clickOnEmployeeID();
  await ecUATPage.clickOnCommentAndCommunicationTab();
  await ecUATPage.enterCommentInCommentAndCommunicationTab();
  await ecUATPage.clickOnAddCommentButtonInCommentAndCommunicationTab();
  await ecUATPage.validateCommentAddedInCommentAndCommunicationTab();
});

test(`TC - 171 - Verify that user is able to add new employee or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.verifyEmployeeTabIfNotThenCreateEmployee();
  await ecUATPage.enterEmpUsername();
  await ecUATPage.enterEmpFullName();
  await ecUATPage.enterEmpEmail2();
  await ecUATPage.enterEmpTitle();
  await ecUATPage.selectDepartmentFromDropdown();
  await ecUATPage.clickOnCreate();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.verifyEmployeeAndClickThreeDots();
  await ecUATPage.clickNotifyButton();
  await ecUATPage.validateNotifySuccessMsg();
});

test(`TC - 172 - Verify that user is able to edit employee or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnEmployeeTab();
  await ecUATPage.createEmployeeIfHamburgerNotVisible();
  await ecUATPage.clickHamburger();
  await ecUATPage.clickOnEdit();
  await ecUATPage.enterEmpFullName();
  await ecUATPage.clickOnSave();
  await ecUATPage.validateSuccessMsg();
});

test(`TC - 173 - Verify that user is able to preview details of employee or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnEmployeeTab();
  await ecUATPage.clickHamburger();
  await ecUATPage.clickOnPreviewButton();
  await ecUATPage.validateEmployeeDetailsPageVisible();
});

test(`TC - 167 - Verify that user is able to download the PDF and Excel report of details of Employees or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnEmployeeTab();
  await ecUATPage.createEmployeeIfHamburgerNotVisible();
  await ecUATPage.exportExcelIcon();
  await ecUATPage.exportEmpPdfIcon();
});

test(`TC - 174 - Verify that user is able to delete the employee or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnEmployeeTab();
  await ecUATPage.clickOnNewEmployeeButton();
  await ecUATPage.enterEmpUsername();
  await ecUATPage.enterEmpFullName();
  await ecUATPage.enterEmpEmail();
  await ecUATPage.enterEmpTitle();
  await ecUATPage.selectDepartmentFromDropdown();
  await ecUATPage.clickOnCreate();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.clickHamburger();
  await ecUATPage.clickDelete();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test(`TC - 175 - Verify that user is able to Notify the employee or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnEmployeeTab();
  await ecUATPage.clickHamburger();
  await ecUATPage.clickOnNotify();
  await ecUATPage.validateNotifySuccessMsg();
});

test(`TC - 176 - Verify that user is able to Deactivate the Active status employee or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnEmployeeTab();
  await ecUATPage.clickOnHamburgersTillDeactivateIsVisible();
  await ecUATPage.clickOnRiskDeactivate();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateEmpDeactivateSuccessMsg();
});

test(`TC - 177 - Verify that user is able to Activate the Inactive status employee or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnEmployeeTab();
  await ecUATPage.clickOnHamburgersTillActivateIsVisible();
  await ecUATPage.clickOnRiskActivate();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateEmpActivateSuccessMsg();
});

test(`TC - 178 - Verify that user is able to filter employee through department or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnEmployeeTab();
  await ecUATPage.clickonfilterIcon();
  await ecUATPage.selectDepartmentFromDropdown();
  await ecUATPage.clickonFilterButton();
  await ecUATPage.validateDepartmentFilterResults();
});

test(`TC - 179 - Verify that user is able to filter employee through multiple department or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnEmployeeTab();
  await ecUATPage.clickonfilterIcon();
  await ecUATPage.selectDepartmentFromDropdown();
  await ecUATPage.selectMultilpleDepartmentsFromDropdown();
  await ecUATPage.clickonFilterButton();
  await ecUATPage.validateDepartmentFilterResults();
});

test(`TC - 180 - Verify that user is able to filter employee through status or not @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnUserAndDepartment();
  await ecUATPage.clickOnEmployeeTab();
  await ecUATPage.clickonfilterIcon();
  await ecUATPage.clickAndSelectEmpStatusFromDropdown();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateDepartmentStatusFilterResults();
});




