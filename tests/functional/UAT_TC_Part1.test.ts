import test from '@base/lib/BaseTest';

// Playwright handles page cleanup automatically — manual page.close() here
// prevents screenshot/video capture on failure, so it has been removed.

// test.beforeEach(async ({ ecUATPage }) => {
//   await ecUATPage.waitForHomePageLoad();
//   await ecUATPage.clickOnMenubarExpand()  
// });

test(`TC -02 - The user with the required permission should be able to view (Executive, Risks, Compliance and Governance) dashboards @Smoke @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.validateExecutiveDashboard();
  await ecUATPage.clickOnRiskDashbordTab();
  await ecUATPage.valdateRiskDashboardTab();
  await ecUATPage.clickOnComplianceDashbordTab();
  await ecUATPage.valdateComplianceDashboardTab();
  await ecUATPage.clickOnGovernanceDashboardTab();
  await ecUATPage.valdateGovernanceDashboardTab();
});

test(`TC -03 - View the tasks assigned to the user @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnTasks();
  await ecUATPage.validateTasksPage();
});

test(`TC -04 - View Overdue Tasks, Tasks due today, Task due ecUATPage week, Tasks due ecUATPage month @Smoke @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnTasks();
  await ecUATPage.clickOnOverDueTasks();
  await ecUATPage.validateOverDueTasksStatus();
  await ecUATPage.clickOnTasksDueToday();
  await ecUATPage.validateTasksDueTodayStatus();
  await ecUATPage.clickOnTasksDueWeek();
  await ecUATPage.validateTasksDueWeekStatus();
  await ecUATPage.clickOnTaskDueThisMonth();
  await ecUATPage.validateTasksDueMonthStatus();
});

test(`TC - 05 - View tasks by Module, Type, Status, Start date and End date with Filter @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnTasks();
  await ecUATPage.clickonfilterIcon();
  await ecUATPage.selectModulefromDropdown();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilterdModule();
  await ecUATPage.clickOnRemoveAllFilters();
  await ecUATPage.clickAndSelectTypeFromDropdown();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredType();
  await ecUATPage.clickOnRemoveAllFilters();
  await ecUATPage.clickAndSelectStatusFromDropdown();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredStatus();
  await ecUATPage.clickOnRemoveAllFilters();
  await ecUATPage.clickAndSelectStartDate();
  await ecUATPage.clickAndSelectEndDate();
  await ecUATPage.clickOnFiterButton();
  await ecUATPage.validateFilteredStartAndEndDate();
});

test(`TC - 06 - View tasks in table view and Monthly calendar view @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnTasks();
  await ecUATPage.clickOnCalenderIcon();
  await ecUATPage.validateCalenderView();
  await ecUATPage.clickOnTableIcon();
  await ecUATPage.validateTableView();
});

test(`TC - 07 - Approve/reject task `, async ({ ecUATPage }) => {
  await ecUATPage.page.waitForLoadState('networkidle');
  await ecUATPage.clickOnInitiativeManagement();
  await ecUATPage.clickOnInitiative();
  await ecUATPage.ensureInitiativeExists();
  await ecUATPage.clickAndSelectInitiative();
  await ecUATPage.clickOnExeptionTab();
  await ecUATPage.clickOnAddExeptionButton();
  await ecUATPage.enterExeptionDesc();
  await ecUATPage.selectExeptionStartDate();
  await ecUATPage.selectExeptionEndDate();
  await ecUATPage.clickAndSelectDueDate();
  await ecUATPage.clickAndSelectApprovarTask();
  await ecUATPage.clickOnSendButton();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.clickOnTasks();
  await ecUATPage.clickOnTaskName();
  await ecUATPage.clickOnApproveButton();
  await ecUATPage.validateSuccessMSg();
});

test(`TC - 08 - View My Tasks, Delegated task, My Department tasks and All tasks @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnTasks();
  await ecUATPage.validateTasksPage();
  await ecUATPage.clickOnDelegatedTask();
  await ecUATPage.validateDelegatedTask();
  await ecUATPage.clickOnMyDepartmentTab();
  await ecUATPage.validateDepartmentPage();
  await ecUATPage.clickOnAllTaskTab();
  await ecUATPage.validateAllTaskPage();
});

test(`TC - 09 - Add event @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnCalender();
  await ecUATPage.validateCalenderPage();
  const createdTitle = await ecUATPage.addEvent(`Automation_Event`);
  await ecUATPage.validateAddedEvent(createdTitle);
});

test(`TC - 10 - View calendar in quarterly/monthly/yearly view @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.page.waitForLoadState('networkidle');
  await ecUATPage.clickOnCalender();
  await ecUATPage.validateCalenderPage();
  await ecUATPage.selectView('Yearly');
  await ecUATPage.validateYearlyView();
  await ecUATPage.selectView('Monthly');
  await ecUATPage.validateMonthlyView();
  await ecUATPage.selectView('Quarterly View');
  await ecUATPage.validateQuaterlyView();
});

test(`TC - 11 - Verify user is able to edit and delete the added event @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnCalender();
  await ecUATPage.validateCalenderPage();
  const createdTitle = await ecUATPage.addEvent(`Automation_Event`);
  await ecUATPage.clickThreeDotsForEvent(createdTitle);
  await ecUATPage.clickOnEventEdit();
  await ecUATPage.enterEventName('Automation_Event');
  await ecUATPage.clickOnUpdateEvent();
  await ecUATPage.validateAddedEvent(`Automation_Event`);
  await ecUATPage.clickOnEventThreeDot();
  await ecUATPage.clickOnEventDelete();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test(`TC - 12 - Verify user is able to activate frameworks @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnFrameworkSettings();
  await ecUATPage.validateFrameWorkPage();
  await ecUATPage.clickOnFrameWorkCheckbox();
  await ecUATPage.clickOnSaveButton();
  await ecUATPage.validateSuccessMsg();
});

test(`TC - 13 - Add a framework by cloning from library @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnAddFrameworkButton();
  await ecUATPage.clickOnCloneFromLibrary();
  await ecUATPage.validateFrameworkPopUp();
  await ecUATPage.clickAndSelectAvalableFramework();
  await ecUATPage.clickAndSelectSubFramework();
  await ecUATPage.enterClonedFrameworkName();
  await ecUATPage.enterClonedFrameworkShortName();
  await ecUATPage.clickOnCloneButton();
  await ecUATPage.validateClonedFramework();
});

test(`TC - 14 - Add a required evidence (RFI) to a control from “Evidences” @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnEvidenceTab();
  await ecUATPage.clickAndvalidateRequiredEvidenceTab();
  await ecUATPage.clickOnAddEvidence();
  await ecUATPage.enterEvidenceName(`Automation_Evidence`);
  await ecUATPage.enterEvidenceNameArabic("Automation_Evidence");
  await ecUATPage.clickOnMapVendor();
  await ecUATPage.selectFrameworkRFI();
  await ecUATPage.clickOnMap();
  await ecUATPage.clickEvidenceSaveButton();
  await ecUATPage.validateSuccessMsg();
});

test(`TC - 15 - Add evidence to a control @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnAddEvidece();
  await ecUATPage.enterName(`Automation_Evidence`);
  await ecUATPage.enterDescription(`Description`);
  await ecUATPage.addControl();
  await ecUATPage.performEvidenceAdditionFlow();
});

test('TC - 16 - Map evidence (that was previously added) to a control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnMapEvidence();
  await ecUATPage.clickOnMapEviCheckboxIfVisible();
});

test(`TC - 17 - Map a Document a control @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnMapDocButton();
  await ecUATPage.mapDocIfCheckboxVisible();
});

test(`TC - 18 - Request information @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnTasksTab();
  await ecUATPage.clickOnRequestInformation();
  await ecUATPage.enterReqEvidenceDesc();
  await ecUATPage.clickAndSelectDueDate();
  await ecUATPage.clickAndSelectTaskOwner();
  await ecUATPage.clickOnAddApproverBUtton();
  await ecUATPage.clickAndSelectApprovar();
  await ecUATPage.clickOnSendButton();
  await ecUATPage.validateSuccessMsg();
});

test(`TC - 19 - Request evidence @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnTasksTab();
  await ecUATPage.clickOnRequestEvidenceButton();
  // await ecUATPage.validateRequestEvidencePopUp();
  // await ecUATPage.enterReqEvidenceName();
  await ecUATPage.enterReqEvidenceDesc();
  await ecUATPage.clickAndSelectDueDate();
  await ecUATPage.clickAndSelectTaskOwner();
  await ecUATPage.clickOnAddApproverBUtton();
  await ecUATPage.clickAndSelectApprovar();
  await ecUATPage.clickOnSendButton();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 20 - Assign control owner (user and department) @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnDetailsTab();
  await ecUATPage.clickOnEdit();
  await ecUATPage.clickAndSelectDepartment(' Automation Created Department');
  await ecUATPage.clickAndSelectOwner('Automation_QA_User');
  await ecUATPage.clickOnSaveButtonControl();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 21 - Assign control stakeholders (user and department) @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnDetailsTab();
  await ecUATPage.clickOnEdit();
  await ecUATPage.clickAndSelectStakeholderDepartment();
  await ecUATPage.clickAndSelectStakeholderUser();
  await ecUATPage.clickOnSaveButtonControl();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 26 - Edit departmental compliance information of a control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnDeptCompliance();
  await ecUATPage.clickOnHamburger();
  await ecUATPage.clickOnEditButton();
  await ecUATPage.clickAndSelectExpectedDate();
  await ecUATPage.clickOnSaveButtonControl();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 22 - Set an expected compliance date to a control  @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnDetailsTab();
  await ecUATPage.clickOnEdit();
  await ecUATPage.clickAndSelectExpectedDate();
  await ecUATPage.clickOnSaveButtonControl();
  await ecUATPage.validateSuccessMsg();
});


test('TC - 23 - Review the Department and owner details of the Control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnDeptCompliance();
  await ecUATPage.validateDeptComplianceTable();
});

test('TC - 25 - Request compliance level for a control in the form of a task @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnDeptCompliance();
  await ecUATPage.clickOnHamburger();
  await ecUATPage.clickOnReqComplianceLevel();
  await ecUATPage.clickAndSelectDueDate();
  await ecUATPage.clickOnSaveButtonControl();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 24 - Request an expected compliance date for a control in the form of a task @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnDeptCompliance();
  await ecUATPage.clickOnHamburger();
  await ecUATPage.clickOnReqComplianceDate();
  await ecUATPage.clickAndSelectDueDate();
  await ecUATPage.clickOnSaveButtonControl();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 39 - Activate risk methodology @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnRiskSettings();
  await ecUATPage.clickOnAssesmentCritaria();
  await ecUATPage.clickOnMethelogyTab();
  await ecUATPage.selectMethelogyCheckbox();
});

test('TC - 27 - Add risk from a control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  // await ecUATPage.clickOnThreeDotRisk();
  await ecUATPage.clickOnRisks();
  await ecUATPage.clickOnAddriskButton();
  await ecUATPage.clickOnRiskRadioButton();
  await ecUATPage.enterRiskTitle('control');
  await ecUATPage.enterRiskStatementC();
  await ecUATPage.enterCustomerParameter();
  await ecUATPage.clickSelectRiskCategory();
  await ecUATPage.clickAndSelectIdentifierDate();
  await ecUATPage.clickOnSummaryRadio();
  await ecUATPage.enterAssesmentScope();
  await ecUATPage.clickAndSelectDepartment('Automation Created Department');
  await ecUATPage.SelectVendorUser();
  // await ecUATPage.clickOnMapVendor();
  // await ecUATPage.selectFrameworkCheckbox();
  // await ecUATPage.clickOnMapAssertButton();
  await ecUATPage.clickONNext();
  await ecUATPage.clickConfidenciallySlider();
  await ecUATPage.intigritySliderAssert();
  await ecUATPage.confidentialySlider();
  await ecUATPage.availabilitySlider();
  await ecUATPage.clickOnNextButton();
  await ecUATPage.clickIfSliderVisibleItivate();
  await ecUATPage.clickFinish();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 28 - Add a remark to a control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnRemarks();
  await ecUATPage.clickOnAddRemarkButton();
  await ecUATPage.enterRemarkTittle('Automation_Remark');
  await ecUATPage.enterRemark('Automation_Remark_Desc');
  await ecUATPage.clickOnAddReamrk();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 29 - View, Edit and Delete a Remark that is previously added to a control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnRemarks();
  await ecUATPage.clickOnRemarkHamburger();
  await ecUATPage.clickOnEdit();
  await ecUATPage.enterRemarkTittle('Automation_Remark_Edit');
  await ecUATPage.clickOnSaveRemark();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.clickOnRemarkHamburger();
  await ecUATPage.clickOnRemarkDetails();
  await ecUATPage.validateRemarkdetailsPopUp();
  await ecUATPage.clickOnRemarkHamburger();
  await ecUATPage.clickOnRemarkDelete();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test('TC - 30 - Add an initiative to a control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnIntiavite();
  await ecUATPage.clickOnNewIntiavateButton();
  await ecUATPage.enterIntivateTittle("Testing01");
  await ecUATPage.enterIntivateDesc('Automation09jii');
  await ecUATPage.clickOnRadioButton();
  await ecUATPage.clickAndSelectStartDate();
  await ecUATPage.clickAndSelectEndDate();
  await ecUATPage.SelectPurpose();
  await ecUATPage.SelectDepartment();
  await ecUATPage.SelectInitiativeOwner();
  await ecUATPage.clickOnCreate();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 31 - Edit and View details of an initiative added to a control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnIntiavite();
  await ecUATPage.clickOnInitiativeHamburger();
  await ecUATPage.clickOnEdit();
  await ecUATPage.editInitivateName();
  await ecUATPage.clickOnSave();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.clickOnIntiavite();
  await ecUATPage.clickOnInitiativeHamburger();
  await ecUATPage.clickOnInitivateDetails();
  await ecUATPage.validateInitivateDetailsPage();
});

test('TC - 34 - Add a note to self to a control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnNoteToSelfIcon();
  await ecUATPage.enterNote();
  await ecUATPage.clickOnAdd();
  await ecUATPage.validateNoteAdded();
});

test('TC - 35 - Add an issue to a control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnIssue();
  await ecUATPage.clickOnAddIssueButton();
  await ecUATPage.enterIssueName();
  await ecUATPage.enterIssueDesc();
  await ecUATPage.enterIssueRemidiation();
  await ecUATPage.selectIssueType();
  await ecUATPage.selectIssuePriority();
  await ecUATPage.selectIssueOwner();
  await ecUATPage.selectIssueDepartment();
  await ecUATPage.clickOnTargetDateCalender();
  await ecUATPage.clickOnSaveIssue();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 36 - Create an issue remediation task that requires approval from the employee (user) @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnIssue();
  await ecUATPage.clickOnHamburger();
  await ecUATPage.clickOnRemediation();
  await ecUATPage.enterIssueDesc();
  await ecUATPage.enterRemediation('automation test');
  await ecUATPage.scroll();
  await ecUATPage.clickAndSelectDueDate();
  // await ecUATPage.clickAndSelectTaskOwner()
  await ecUATPage.clickAndSelectApprovar();
  await ecUATPage.clickOnAddRemediation();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 37 - View details of an issue that is added to a control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWork();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControl();
  await ecUATPage.clickOnIssue();
  await ecUATPage.clickOnHamburger();
  await ecUATPage.clickOnIssueDetails();
  await ecUATPage.validateIssueDetailsPopUp();
});

test('TC - 38 - Add a common control through Manage Cross-mapping @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnCommonControlTab();
  await ecUATPage.clickOnManageCrossMaping();
  await ecUATPage.clickOnCommonControl();
  await ecUATPage.enterControlName(1);
  await ecUATPage.enterControlDesc(0);
  await ecUATPage.clickOnAdd();
  await ecUATPage.clickOnCrossControlButton();
  await ecUATPage.clickAndSelectFrameworkUntilTwoEnabled();
  await ecUATPage.selectTwoEnabledCheckboxes();
  await ecUATPage.clickOnCrossMapAdd();
  await ecUATPage.clickOnCrossMapSave();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 111 - Verify that user is able to edit common control or not @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnCommonControlTab();
  await ecUATPage.clickHamburger();
  await ecUATPage.clickOnEditCommonControl();
  await ecUATPage.enterControlName(1);
  await ecUATPage.clickOnSaveButton();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 110 - Verify that the user is able to delete the common Control after clicking on the delete button from hamburger @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnCommonControlTab();
  await ecUATPage.clickHamburger();
  await ecUATPage.clickDelete();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg()
});

test('TC - 47 - Export risk register as PDF @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickOnExportPdfIconValidatePreview();
});

test('TC - 48 - Add an issue to a risk @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickAndSelectDraftRisk1();
  // await ecUATPage.clickAndSelectRisk();
  await ecUATPage.clickOnIssue();
  await ecUATPage.clickOnAddIssueButton();
  await ecUATPage.enterIssueName();
  await ecUATPage.enterIssueDesc();
  await ecUATPage.enterIssueRemidiation();
  await ecUATPage.selectIssueType();
  await ecUATPage.selectIssuePriority();
  await ecUATPage.selectIssueOwner();
  await ecUATPage.selectIssueDepartment();
  await ecUATPage.clickOnTargetDateCalender();
  await ecUATPage.clickOnSaveIssue();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 49 - Add an exception to a risk @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickAndSelectRisk();
  await ecUATPage.clickOnExeptionTab();
  await ecUATPage.clickOnAddExeptionButton();
  await ecUATPage.enterExeptionDesc();
  await ecUATPage.selectExeptionStartDate();
  await ecUATPage.selectExeptionEndDate();
  await ecUATPage.clickAndSelectDueDate();
  await ecUATPage.clickOnAddApproverBUtton();
  await ecUATPage.clickAndSelectApprovarTask();
  await ecUATPage.clickOnSendButton();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 50 - Add notes to self to a risk @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickAndSelectRisk();
  await ecUATPage.clickOnRiskNote();
  await ecUATPage.enterNote();
  await ecUATPage.clickOnAdd();
  await ecUATPage.validateNoteAdded();
});

test('TC - 84 - Create new audit @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnAuditManegement();
  await ecUATPage.clickOnAudits();
  await ecUATPage.clickOnNewAudit();
  await ecUATPage.enterAuditName();
  await ecUATPage.enterAuditDesc();
  await ecUATPage.clickAndSelectAuditorType();
  await ecUATPage.clickAndSelectFramework();
  await ecUATPage.SelectDepartment();
  await ecUATPage.clickAndSelectAuditOwner();
  await ecUATPage.clickAndSelectAuditor();
  await ecUATPage.clickOnCreateAudit();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 85 - Re-evaluate controls of a framework that is under audit @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnAuditManegement();
  await ecUATPage.clickOnAudits();
  await ecUATPage.clickOnAuditName();
  await ecUATPage.clickOnAuditControl();
  await ecUATPage.clickControlExpand();
  await ecUATPage.selectAuditControl();
  await ecUATPage.clickOnAuditreview();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 86 - Add audit notes to an audit @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnAuditManegement();
  await ecUATPage.clickOnAudits();
  await ecUATPage.clickOnAuditName();
  await ecUATPage.clickOnAuditControl();
  await ecUATPage.clickControlExpand();
  await ecUATPage.selectAuditControl();
  await ecUATPage.clickOnNoteTab();
  await ecUATPage.clickOnNewNote();
  await ecUATPage.enterNoteTittle();
  await ecUATPage.enterNoteRemark();
  await ecUATPage.enterNoteProcedure();
  await ecUATPage.clickOnNoteAdd();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 32 - View the compliance level set and comments added by the auditor to a control @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWorkUnderAudit();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControlForAudit();
  await ecUATPage.clickOnAudit();
  await ecUATPage.validateAuditPage();
});

test('TC - 33 - View audit details that have been added to a control by the auditor @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnComplaince();
  await ecUATPage.clickOnFarmeworkAndValidateThePage();
  await ecUATPage.clickOnFrameWorkUnderAudit();
  await ecUATPage.clickOnControls();
  await ecUATPage.selectControlForAudit();
  await ecUATPage.clickOnAudit();
  await ecUATPage.clickOnInitiativeHamburger();
  await ecUATPage.clickOnAuditDetails();
  await ecUATPage.validateAuditDetailPopUp();
});

test('TC - 87 - Change audit status @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnAuditManegement();
  await ecUATPage.clickOnAudits();
  await ecUATPage.clickOnAuditName();
  await ecUATPage.clickOnAuditThreeDot();
  await ecUATPage.clickOnChangeStatus();
  await ecUATPage.clickStatusRadio();
  await ecUATPage.clickOnConfirmationCheckbox();
  await ecUATPage.clickonStatusSaveButton();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 51 - Clone a risk template from Library @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clcikOnRiskTemplate();
  await ecUATPage.clickOnLibraryTab();
  await ecUATPage.copyTemplateIfExists();
});

test('TC - 52 - Add key indicators to a risk @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnRiskRegister();
  await ecUATPage.clickAndSelectRisk();
  await ecUATPage.clickOnKeyIndicatorTab();
  await ecUATPage.clickOnNewIndicatorButton();
  await ecUATPage.enterIndicatorTittle();
  await ecUATPage.enterDataSource();
  await ecUATPage.enterMinTolrence();
  await ecUATPage.enterMaxTolrence();
  await ecUATPage.selectIndicatorFrequency();
  await ecUATPage.selectIndicatorMeserment();
  await ecUATPage.clickOnTypeRadio();
  await ecUATPage.clickOnAddIndicator();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 53 - Add a new risk template @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clcikOnRiskTemplate();
  await ecUATPage.clickNewRiskTemplateButton();
  await ecUATPage.enterRiskTittle();
  await ecUATPage.enterRiskStatement();
  await ecUATPage.clickAndSelectCategory();
  await ecUATPage.clickAddRiskTemplate();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 54 - Add assets to the Risk Catalog @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnCatalog();
  await ecUATPage.clickOnNewAssert();
  await ecUATPage.clickOnNewAssetButton()
  await ecUATPage.enterAssetEngName();
  await ecUATPage.enterAssetArbName();
  await ecUATPage.clickAndSelectAssertDept();
  await ecUATPage.clickAndSelectAssesrtOwner();
  await ecUATPage.clickOnAssertSliders();
  await ecUATPage.clickOnAddAssert();
  await ecUATPage.validateAddedAssert();
});

test('TC - 55 - Add threats to the Risk Catalog @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnCatalog();
  await ecUATPage.clickOnThreats();
  await ecUATPage.clickOnNewThreat();
  await ecUATPage.clickOnNewThreatButton();
  await ecUATPage.enterThreatEngName();
  await ecUATPage.enterThreatArbName();
  await ecUATPage.clickAndSelectThreatType();
  await ecUATPage.clickOnThredSlider();
  await ecUATPage.clickOnThreatAdd();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 56 - Add vulnerabilities to the Risk Catalog @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnCatalog();
  await ecUATPage.clickOnVulability();
  await ecUATPage.clickOnNewVulability();
  await ecUATPage.clickOnNewVulabilityButton();
  await ecUATPage.enterVulabilityEngName();
  await ecUATPage.enterVulabilityArbName();
  await ecUATPage.clickAndSelectVulabilitySource();
  await ecUATPage.clickOnMappedVulnerabilitySlider();
  await ecUATPage.clickOnVulabilityAdd();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 57 - Add process to the Risk Catalog @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnCatalog();
  await ecUATPage.clickOnProcess();
  await ecUATPage.clickOnNewProcess();
  await ecUATPage.clickOnNewProcessButton();
  await ecUATPage.enterProcessEngName();
  await ecUATPage.enterProcessArbName();
  await ecUATPage.clickAndSelectProcessCategory();
  await ecUATPage.clickAndSelectProcessOwner();
  await ecUATPage.clickOnProcessSlider();
  await ecUATPage.clickOnProcessAdd();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 58 - Add a new initiative @Uat @Sanity @Regression', async ({ ecUATPage }) => {
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
});

test('TC - 59 - Link a control to an initiative @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnInitiativeManagement();
  await ecUATPage.clickOnInitiative();
  await ecUATPage.clickAndSelectInitiative();
  await ecUATPage.clickOnLinkControl();
  await ecUATPage.selectFrameworkCheckboxNew();
  await ecUATPage.clickOnMapControlButton();
});

test('TC - 61 - Add a new Milestone to an initiative @Uat @Sanity @Regression', async ({ ecUATPage, page }) => {
  await ecUATPage.clickOnInitiativeManagement();
  await ecUATPage.clickOnInitiative();
  await ecUATPage.clickAndSelectInitiative();
  await ecUATPage.clickOnMileStoneTab();
  await ecUATPage.clickOnNewMilestoneButton();
  await ecUATPage.enterMilestoneTittle();
  await ecUATPage.enterMilestoneDesc();
  await ecUATPage.clickAndSelectMilestoneStartDate();
  await ecUATPage.scrollUpToDescription(page)
  await ecUATPage.clickAndSelectMileStoneDueDate();
  await ecUATPage.clickOnCreateMilestone();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 63 - Add key indicators to an initiative @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnInitiativeManagement();
  await ecUATPage.clickOnInitiative();
  await ecUATPage.clickAndSelectInitiative();
  await ecUATPage.clickOnKeyIndicatorTab();
  await ecUATPage.clickOnNewIndicatorButton();
  await ecUATPage.enterIndicatorTittle();
  await ecUATPage.enterDataSource();
  await ecUATPage.enterMinTolrence();
  await ecUATPage.enterMaxTolrence();
  await ecUATPage.selectIndicatorFrequency();
  await ecUATPage.selectIndicatorMeserment();
  await ecUATPage.clickOnTypeRadio();
  await ecUATPage.clickOnAddIndicator();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 64 - Add an issue to an initiative @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnInitiativeManagement();
  await ecUATPage.clickOnInitiative();
  await ecUATPage.clickAndSelectInitiative();
  await ecUATPage.clickOnIssue();
  await ecUATPage.clickOnAddIssueButton();
  await ecUATPage.enterIssueName();
  await ecUATPage.enterIssueDesc();
  await ecUATPage.enterIssueRemidiation();
  await ecUATPage.selectIssueType();
  await ecUATPage.selectIssuePriority();
  await ecUATPage.selectIssueOwner();
  await ecUATPage.selectIssueDepartment();
  await ecUATPage.clickOnTargetDateCalender();
  await ecUATPage.clickOnSaveIssue();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 65 - Add an exception to an initiative @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnInitiativeManagement();
  await ecUATPage.clickOnInitiative();
  await ecUATPage.clickAndSelectInitiative();
  await ecUATPage.clickOnExeptionTab();
  await ecUATPage.clickOnAddExeptionButton();
  await ecUATPage.enterExeptionDesc();
  await ecUATPage.selectExeptionStartDate();
  await ecUATPage.selectExeptionEndDate();
  await ecUATPage.clickAndSelectDueDate();
  await ecUATPage.clickOnAddApproverBUtton();
  await ecUATPage.clickAndSelectApprovarTask();
  await ecUATPage.clickOnSendButton();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 66 - Add a new governance template @Uat @Sanity @Regression', async ({ ecUATPage, page }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnTemplates();
  await ecUATPage.validateTemplatePage();
  await ecUATPage.clickOnCreateTemplate();
  await ecUATPage.enterArabicName('Automation_Template');
  await ecUATPage.enterEnglishName('Automation_Template');
  await ecUATPage.enterDocumentText('Automation_Template_Desc');
  await ecUATPage.clickOnCreateButtonGov();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 67 - View template content @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnTemplates();
  await ecUATPage.validateTemplatePage();
  await ecUATPage.clickOnTemplate();
  await ecUATPage.validateTemplateDetailsPopUp();
});

test('TC - 68 - Modification to a governance template @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnTemplates();
  await ecUATPage.validateTemplatePage();
  await ecUATPage.clickOnGovEdit();
  await ecUATPage.validateEditPage();
  await ecUATPage.clearEnlishName();
  await ecUATPage.enterEnglishName('Automation_Template')
  await ecUATPage.clickOnGovSave();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 69 - Delete a template from governance @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnTemplates();
  await ecUATPage.validateTemplatePage();
  await ecUATPage.clickOnTemplateDeleteIcon();
  await ecUATPage.clickOnYesDeleteButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test('TC - 70 - Add a new document through "Create a document @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnNewDoc();
  await ecUATPage.clickOnCreateDoc();
  await ecUATPage.enterTittle('trsnds');
  await ecUATPage.enterDescriptionGov('Automation_Document');
  await ecUATPage.clickAndSelectType();
  // await ecUATPage.clickAndSelectClarification();
  // await ecUATPage.clickAndSelectShareing()
  await ecUATPage.clickAndSelectdistribution();
  await ecUATPage.clickAndSelectFromDate();
  await ecUATPage.clickAndSelectToDate();
  await ecUATPage.clickONOwnerShhipButton();
  await ecUATPage.SelectDepartment();
  await ecUATPage.selectIssueOwnerGov();
  await ecUATPage.enterVersion('5');
  await ecUATPage.clickONNext();
  await ecUATPage.enterDocText('Automation_Desc');
  await ecUATPage.clickONNext();
  await ecUATPage.clickOnFinish();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickActivateIfAvailable();
});

test('TC - 75 - Add an Internal Control to a document @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickOnDocument();
  await ecUATPage.clickOnControlsGov();
  await ecUATPage.clickOnAddInternalControl();
  await ecUATPage.enterNameToArabicControlfield('Automation_Control');
  await ecUATPage.enterNameToEngControlfield('Automation_Control');
  await ecUATPage.clickOnGovControlSave();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 76 - Map an internal control to a document @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnGovernance();
  await ecUATPage.clickOnPolicyAndDoc();
  await ecUATPage.clickOnTableViewIfNotVisible();
  await ecUATPage.clickOnDocument();
  await ecUATPage.clickOnControlsGov();
  await ecUATPage.clickOnMapInternalControl();
  await ecUATPage.clickMapCheckbox();
  await ecUATPage.clickOnMapButton();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 77 - Add internal controls @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickInternalControlTab();
  await ecUATPage.validateInternalIntControlPage();
  await ecUATPage.clickOnAddControl();
  await ecUATPage.enterNameToArabicControlfield('Automation_Control');
  await ecUATPage.enterNameToEngControlfield('Automation_Control');
  await ecUATPage.clickOnAddButton();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 78 - Modify an Internal controls @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickInternalControlTab();
  await ecUATPage.validateInternalIntControlPage();
  await ecUATPage.clickOnHamburgerGov();
  await ecUATPage.clickOnEditControl();
  await ecUATPage.enterNameToArabicControlfield('Automation_Control');
  await ecUATPage.enterNameToEngControlfield('Automation_Control');
  await ecUATPage.clickOnUpdate();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 79 - Add new vendor @Uat @Sanity @Regression', async ({ ecUATPage }) => {
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
});

test('TC - 81 - Add document to a vendor @Uat @Sanity @Regression', async ({ ecUATPage, page }) => {
  await ecUATPage.clickOnVendorManagement();
  await ecUATPage.clickOnVendorTab();
  await ecUATPage.validateVendorPage();
  await ecUATPage.clickOnVindorName();
  await ecUATPage.clickOnDocumentsTab();
  await ecUATPage.clickOnNewDocButton();
  await ecUATPage.clickSelectStatus();
  await ecUATPage.selectEffectivenessDate();
  await ecUATPage.uploadDocFile(page);
  await ecUATPage.validateFileUploaded();
  await ecUATPage.clickOnCreateDocVendor();
  await ecUATPage.validateDocAddedVendor();
});

test('TC - 82 - Add new contact to a vendor @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnVendorManagement();
  await ecUATPage.clickOnVendorTab();
  await ecUATPage.validateVendorPage();
  await ecUATPage.createVendorIfNoDataVisible();
  await ecUATPage.clickOnVindorName();
  await ecUATPage.clickOnContactTab();
  await ecUATPage.clickOnAddContactButton();
  await ecUATPage.enterConatactName('Automation_Contact');
  await ecUATPage.enterPosition('Automation_Position');
  await ecUATPage.enterPhoneNumber();
  await ecUATPage.enterEmail();
  await ecUATPage.clickOnCreate();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 80 - Add risk from a vendor @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnVendorManagement();
  await ecUATPage.clickOnVendorTab();
  await ecUATPage.validateVendorPage();
  await ecUATPage.createVendorIfNoDataVisible();
  await ecUATPage.clickOnVindorName();
  await ecUATPage.clickOnRisks();
  await ecUATPage.clickOnNewRisk();
  await ecUATPage.clickOnRiskRadioButton();
  await ecUATPage.enterRiskTitle('Vendor');
  await ecUATPage.enterRiskStatementVendor();
  await ecUATPage.clickSelectRiskCategory();
  await ecUATPage.clickAndSelectIdentifierDate();
  await ecUATPage.clickOnSummaryRadio();
  await ecUATPage.enterAssesmentScope();
  await ecUATPage.clickAndSelectDepartment('Automation Created Department');
  await ecUATPage.SelectVendorUser();
  await ecUATPage.enterCustomerParameter();
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

test('TC - 83 - Edit vendor’s risk rating @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnVendorManagement();
  await ecUATPage.clickOnVendorTab();
  await ecUATPage.validateVendorPage();
  await ecUATPage.createVendorIfNoDataVisible();
  await ecUATPage.clickOnVindorName();
  await ecUATPage.clickOnVendorhreeDot();
  await ecUATPage.clickOnVendorEdit();
  await ecUATPage.clickVendoRadioButton();
  await ecUATPage.clickVendorSave();
  await ecUATPage.validateRiskRatingVisible();
});

test('TC - 88 - View and delete issues  @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnIssueExeption();
  await ecUATPage.clickOnIssues();
  await ecUATPage.validateIssuePage();
  await ecUATPage.clickOnIssueHamburger();
  await ecUATPage.clickOnIssueDelete();
  await ecUATPage.clickOnYesDeleteButton();
});

test('TC - 89 - View and delete exceptions @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnIssueExeption();
  await ecUATPage.clickOnExeptions();
  await ecUATPage.validateExeptionPage();
  await ecUATPage.clickOnExeptionHamburger();
  await ecUATPage.clickOnExeptionDelete();
  await ecUATPage.clickOnYesDeleteButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test('TC - 90 - Review all existing reports in the platform @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnReports();
  await ecUATPage.validateReportPage();
});

test('TC - 91 - Export reports as PDF (download) @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnReports();
  await ecUATPage.validateReportPage();
  await ecUATPage.clickOnReportType();
  await ecUATPage.clickSelectReport();
  await ecUATPage.clickOnExportReportPdfIcon();
});

test('TC - 92 - Create new delegation @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickDelegationTab();
  await ecUATPage.clickOnDelegation();
  await ecUATPage.deleteDelegationIfVisible();
  await ecUATPage.clickOnNewDelegation();
  await ecUATPage.clickAndSelectDelegatioFrom();
  await ecUATPage.clickAndSelectDelegationTo();
  await ecUATPage.clickAndSelectDelegationStartDate();
  await ecUATPage.clickAndSelectDelegationEndDate();
  await ecUATPage.clickOnCreateDelegation();
  await ecUATPage.clickOnProceed();
  await ecUATPage.validateSuccessMsg();
});

test(`TC - 98 - verify that user is able to export PDF and Excel report of delegation @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickDelegationTab();
  await ecUATPage.clickOnDelegation();
  await ecUATPage.exportExcelIcon();
  await ecUATPage.clickOnExportPdfIcon();
});

test('TC - 93 - Modify/edit delegation date and notes @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickDelegationTab();
  await ecUATPage.clickOnDelegation();
  await ecUATPage.clickOnDelegationHamburger();
  await ecUATPage.clickOnDelegationEdit();
  await ecUATPage.enterDelegationNote();
  await ecUATPage.clickOnUpdateDelegation();
  await ecUATPage.validateSuccessMsg();
});

test('TC - 94 - Cancel delegation @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickDelegationTab();
  await ecUATPage.clickOnDelegation();
  await ecUATPage.clickOnDelegationHamburger();
  await ecUATPage.clickOnCancelDelegation();
  await ecUATPage.clickOnYesButton();
});

test('TC - 95 - Delete delegation @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickDelegationTab();
  await ecUATPage.clickOnDelegation();
  await ecUATPage.clickOnDelegationHamburger();
  await ecUATPage.clickDeleteDelegation();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test('TC - 96 - Create a new escalation from the settings page @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnSettings();
  await ecUATPage.clickOnEscalationSetting();
  await ecUATPage.clickOnNewEscalation();
  await ecUATPage.clickAndSelectTaskAssignTo();
  await ecUATPage.clickAndSelectTaskType();
  await ecUATPage.clickOnAddEscalation();
  await ecUATPage.clickAndSelectEscalation();
  await ecUATPage.clickOnEscalationSave();
  await ecUATPage.validateSuccessMsg();
  await ecUATPage.clickHamburger();
  await ecUATPage.clickDeleteEscalation();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test('TC - 97 - Create a new escalation @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.clickOnEscalations();
  await ecUATPage.clickOnEscalationButton();
  await ecUATPage.enterEscalationTittle();
  await ecUATPage.clickAndSelectTriggerEvent();
  await ecUATPage.clickAndSelectUsers();
  await ecUATPage.clickOnEscalationCreate();
  await ecUATPage.validateSuccessMsg();
});

test(`TC - 108 - Verify that the Status of escalation is Resolved after clicking on Mark as Resolved button @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnEscalations();
  await ecUATPage.clickOnHamburgerAndMarkAsResolved();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateSuccessMsg();
});

test(`TC - 107 - Verify that the Escalation is deleted after clicking on Delete button @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnEscalations();
  await ecUATPage.clickOnHamburger();
  await ecUATPage.clickDeleteEscalation();
  await ecUATPage.clickOnYesButton();
  await ecUATPage.validateDeleteSuccessMsg();
});

test(`TC - 99 - Verify that by default Owner and creator permission (Departments) added in asset when we created the asset or not @Uat @Sanity @Regression`, async ({ ecUATPage }) => {
  await ecUATPage.clickOnRiskManagement();
  await ecUATPage.clickOnCatalog();
  await ecUATPage.clickOnAssetName();
  await ecUATPage.clickOnCatalogThreeDot();
  await ecUATPage.clickOnPermisions();
  await ecUATPage.validatePermisionPopUp();
});

test('TC - 01 - Verify user logout @Uat @Sanity @Regression', async ({ ecUATPage }) => {
  await ecUATPage.validateExecutiveDashboard();
  await ecUATPage.clickOnUserIcon();
  await ecUATPage.clickOnLogOut();
  await ecUATPage.validateLoginPage();
});
