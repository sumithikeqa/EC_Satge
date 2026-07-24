import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { table } from "node:console";

export class ECPreConditionPage {
    readonly page: Page
    readonly context: BrowserContext
    readonly USER_AND_DEPARTMENT: Locator
    readonly ROLES: Locator
    readonly SEARCH_FIELD: Locator
    readonly SEARCH_ICON: Locator
    readonly SEARCHED_ROLE: Locator
    readonly ADD_ROLE_BUTTON: Locator
    readonly ROLE_NAME_FIELD: Locator
    readonly ROLES_CHECKBOX: Locator
    readonly ROLE_CREATE_BUTTON: Locator
    readonly SUCCESS_MSG: Locator
    readonly CONTRIBUTOR_RADIO: Locator
    readonly SETTINGS: Locator
    readonly RISK_SETTTINGS: Locator
    readonly GENREL_RISK_SETTING_UPDATE: Locator
    readonly NEW_RISK_CATEGORY_BUTTON: Locator
    readonly RISK_CATEGORY_ENG_NAME: Locator
    readonly RISK_CATEGORY_ARB_NAME: Locator
    readonly RISK_ADD_BUTTON: Locator
    readonly NEW_ASSERT_CATEGORY_BUTTON: Locator
    readonly NEW_PROCESS_CATEGORY_BUTTON: Locator
    readonly NEW_THREAT_TYPE_BUTTON: Locator
    readonly NEW_VULNERABILITY_SOURCE_BUTTON: Locator
    readonly DEPARTMENT: Locator
    readonly NEW_DEPARTMENT: Locator
    readonly DEPT_NAME_ENG_FIELD: Locator
    readonly DEPT_NAME_ARB_FIELD: Locator
    readonly EXTERNAL_USER: Locator
    readonly ADD_USERS: Locator
    readonly USER_FULL_NAME_FIELD: Locator
    readonly USER_EMAIL_FIELD: Locator
    readonly USER_TITLE_FIELD: Locator
    readonly POLICY_AND_DOC_SETTING: Locator
    readonly DOC_NEW_TYPE_BUTTON: Locator
    readonly TYPE_ENG_NAME: Locator
    readonly TYPE_ARB_NAME: Locator
    readonly ADD_BUTTON: Locator
    readonly ISSUE_SETTING: Locator
    readonly NEW_ISSUE_TYPE: Locator
    readonly ISSUE_TYPE_ENG_NAME: Locator
    readonly ISSUE_TYPE_ARB_NAME: Locator
    readonly FRAMEWORK_SETTINGS: Locator
    readonly FRAMEWORK_PAGE: Locator
    readonly FRAMEWORK_CHECKBOX: Locator
    readonly SAVE_BUTTON: Locator
    readonly COMPLAINCE: Locator
    readonly FRAMEWORKS: Locator
    readonly FRAMEWORKS_PAGE: Locator
    readonly ADD_FRAMEWORK_BUTTON: Locator
    readonly CLONE_FROM_LIBRARY: Locator
    readonly IMPORT_FRAMEWORK_POP_UP: Locator
    readonly AVAILABLE_FRAMEWORK_DROPDOWN: Locator
    readonly SELECT_FRAMEWORK: Locator
    readonly AVAILABLE_SUB_FRAMEWORK_DEPDOWN: Locator
    readonly SELECT_SUB_FRAMEWORK: Locator
    readonly CLONED_FRAMEWORK_NAME_FIELD: Locator
    readonly CLONED_FRAMEWORK_SHORT_NAME: Locator
    readonly CLONE_BUTTON: Locator
    readonly RISK_TEMPLATE: Locator
    readonly LIBRARY_TAB: Locator
    readonly TEMPLATE_CHECKBOX: Locator
    readonly CLONE_TEMPLATE_BUTTON: Locator
    readonly RISK_MANAGEMENT_BUTTON: Locator
    //readonly RISK_TEM_HAMBURGER: Locator
    readonly DELETE: Locator
    readonly YES_BUTTON: Locator
    readonly DELETE_SUCCESS_MSG: Locator
    readonly LIBRARY_COUNT: Locator
    readonly RISK_TEM_TAB: Locator
    LIBRARY_TEM: String | undefined
    readonly ASSESMENT_CRITERIA_UPDATE: Locator
    readonly DELETE_PARAMETER_BUTTON: Locator
    readonly COMPOUND_RADIO: Locator
    readonly PARAMETER_NAME_ENG: Locator
    readonly PARAMETER_NAME_ARB: Locator
    readonly SET_UP_BUTTON: Locator
    readonly ADD_PARAMETER_ICON: Locator
    readonly CREATE_PARAMETER: Locator
    readonly SUB_PARAMETER_ARB_NAME: Locator;
    readonly NEXT_BUTTON: Locator
    readonly INTIGRITY: Locator
    readonly AVAIBILITY: Locator
    readonly CONFIDENTIALY: Locator
    readonly SUB_PARAMETER_ICON: Locator
    readonly SUB_PARAMETER_ENG_LABEL: Locator
    readonly SUB_PARAMETER_ARB_LABEL: Locator
    readonly VALUE_FIELD: Locator
    readonly SUB_PARAMETER_SAVE: Locator
    readonly CROSS_ICON: Locator
    readonly FORMULA_FIELD: Locator
    readonly APPLY_BUTTON: Locator
    readonly CREATE_BUTTON: Locator
    readonly USERS: Locator
    readonly NEW_USER_BUTTON: Locator
    readonly USENAME_FIELD: Locator
    readonly FULL_NAME_FIELD: Locator
    readonly EMAIL_FIELD: Locator
    readonly ROLE_1: Locator
    readonly ROLE_2: Locator
    readonly ADD_ROLES_BUTTON: Locator
    readonly DEPARTMENT_DROPDOWN_DEPT: Locator;
    readonly SELECT_DEPARTMENT: Locator;
    readonly ADD_ASSERT_CLARIFICATION_ICON: Locator
    readonly MAX_VALUE_FIELD: Locator
    readonly FINISH_BUTTON: Locator
    readonly VULNERABILITY_TAB: Locator
    readonly ADD_VULNERABILITY_ICON: Locator
    readonly THREAT_TAB: Locator
    readonly ADD_THREAT_CLARIFICATION_ICON: Locator
    readonly COLOR_FIELD: Locator
    readonly CUSTOM_PARAMETER_TAB: Locator
    readonly CUSTOM_PARAMETER_ADD: Locator
    readonly PROBABILITY: Locator
    readonly SUB_PARAMETER_BUILD: Locator
    readonly SUB_PARAMETER_TENGENT: Locator
    readonly CUSTON_SUB_PARAMETER_ADD: Locator
    readonly CANCEL_BUTTON: Locator
    readonly IMPACT: Locator
    readonly SUB_PARAMETER_WIZARD: Locator
    readonly SUB_PARAMETER_QUAZ: Locator
    readonly METHODOLOGY_TAB: Locator
    readonly NEW_METHODOLODY: Locator
    readonly IMPACT_CHECKBOX: Locator
    readonly PROBABILITY_CHECKBOX: Locator
    readonly ADD_CLARIFICATION_BUTTON: Locator
    readonly MIN_RISK_SCORE: Locator
    readonly MAX_RISK_SCORE: Locator
    readonly TREATMENT_DUE_DAYS: Locator
    readonly REVIEW_DAYS: Locator
    readonly METHODOLOGY_FORMULA_FIELD: Locator
    readonly SLIDER: Locator
    readonly CUSTOM_FORMULA_DROPDOWN: Locator
    readonly OPTION: Locator
    readonly CUSTOM_FORMULA_FIELD: Locator
    readonly METHODOLOGY_CHECKBOX: Locator
    readonly ASSET_CLASIFICATION_TAB: Locator
    readonly PARAMETER_TYPE_TEXT: Locator
    readonly DELETE_ICON: Locator
    readonly THREE_DOT: Locator;
    readonly ACTIVATE_BUTTON_ASSERT: Locator;
    readonly CUSTOM_OPTION: Locator;
    
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.USER_AND_DEPARTMENT = page.locator(`//span[contains(text(),'Users / Departments')]`);
        this.ROLES = page.locator(`//span[contains(text(),'Roles')]`).first();
        this.SEARCH_FIELD = page.getByPlaceholder('Search by name')
        this.SEARCH_ICON = page.locator(`//span[@class="s-search"]`);
        this.SEARCHED_ROLE = page.locator(`(//div[@class="cell-content ng-star-inserted"]/a)[1]`);
        this.ADD_ROLE_BUTTON = page.getByText('Add Role')
        this.ROLE_NAME_FIELD = page.locator(`//input[@name="role.Name"]`);
        this.ROLES_CHECKBOX = page.locator(`//h5[contains(text(),'')]/../..//input[@type="checkbox"]`);
        this.ROLE_CREATE_BUTTON = page.locator(`//span[text()='Create']`);
        this.CREATE_BUTTON = page.locator(`//button//span[text()='Create']`);
        this.SUCCESS_MSG = page.locator(`(//*[contains(normalize-space(),'Saved Successfully')])[1]`);
        this.CONTRIBUTOR_RADIO = page.locator(`//label[text()='Contributor']/ancestor::div/input[@type="radio"]`);
        this.SETTINGS = page.locator(`//span[contains(text(),'Settings')]`);
        this.RISK_SETTTINGS = page.locator(`//span[contains(text(),'Risk Settings')]`);
        this.GENREL_RISK_SETTING_UPDATE = page.locator(`//div[contains(text(),'General Risk Settings')]//span[@class="s-arrow-up-right"]`);
        this.NEW_RISK_CATEGORY_BUTTON = page.locator(`//span[contains(text(),'New Risk Category')]`);
        this.RISK_CATEGORY_ENG_NAME = page.locator(`//input[@name="RiskCategoryName"]`);
        this.RISK_CATEGORY_ARB_NAME = page.locator(`//input[@name="RiskCategoryNameAr"]`);
        this.RISK_ADD_BUTTON = page.locator(`//div[@class="view-actions"]//span[text()='Add']`);
        this.NEW_ASSERT_CATEGORY_BUTTON = page.locator(`//span[contains(text(),'New Asset Category')]`);
        this.NEW_PROCESS_CATEGORY_BUTTON = page.locator(`//span[contains(text(),'New Process Category')]`);
        this.NEW_THREAT_TYPE_BUTTON = page.locator(`//span[contains(text(),'New Threat Type')]`);
        this.NEW_VULNERABILITY_SOURCE_BUTTON = page.locator(`//span[contains(text(),'New Vulnerability Source')]`);
        this.DEPARTMENT = page.locator(`//span[normalize-space()='Departments']`);
        this.NEW_DEPARTMENT = page.locator(`//span[text()='New Department']`);
        this.DEPT_NAME_ENG_FIELD = page.locator(`//input[@name="deptName"]`);
        this.DEPT_NAME_ARB_FIELD = page.locator(`//input[@name="nameAr"]`);
        this.EXTERNAL_USER = page.locator(`//span[contains(text(),'External Users')]`);
        this.ADD_USERS = page.locator(`(//span[normalize-space()='New User'])[1]`);
        this.USER_FULL_NAME_FIELD = page.locator(`//input[@name="fullName"]`);
        this.USER_EMAIL_FIELD = page.locator(`//input[@name="email"]`);
        this.USER_TITLE_FIELD = page.locator(`//input[@name="title"]`);
        this.POLICY_AND_DOC_SETTING = page.locator(`//span[contains(text(),'Policy and Documents Settings')]`);
        this.DOC_NEW_TYPE_BUTTON = page.locator(`//span[text()='New Type']`);
        this.TYPE_ENG_NAME = page.locator(`//input[@placeholder="Title in English"]`);
        this.TYPE_ARB_NAME = page.locator(`//input[@placeholder="Title in Arabic"]`);
        this.ADD_BUTTON = page.locator(`//span[(text()='Add')]`);
        this.ISSUE_SETTING = page.locator(`//span[contains(text(),'Issues Settings')]`);
        this.NEW_ISSUE_TYPE = page.locator(`//span[text()='New Issue Type']`);
        this.ISSUE_TYPE_ENG_NAME = page.locator(`//mat-label[text()='Issue type name']`);
        this.ISSUE_TYPE_ARB_NAME = page.locator(`//mat-label[text()='Issue type name in Arabic']`);
        this.FRAMEWORK_SETTINGS = page.locator(`//span[normalize-space()='Framework Settings']`);
        this.FRAMEWORK_CHECKBOX = page.locator(`(//input[@type="checkbox"])[1]`);
        this.FRAMEWORK_PAGE = page.locator(`//span[normalize-space()='Available Frameworks']`);
        this.SAVE_BUTTON = page.locator(`//span[normalize-space()="Save"]`);
        this.COMPLAINCE = page.locator(`//span[normalize-space()='Compliance']`);
        this.FRAMEWORKS = page.locator(`//a[normalize-space()='Frameworks']`);
        this.FRAMEWORKS_PAGE = page.locator(`//h3/span[text()='Frameworks']`)
        this.ADD_FRAMEWORK_BUTTON = page.locator(`//button[normalize-space()='Add Framework']`);
        this.CLONE_FROM_LIBRARY = page.locator(`//button[normalize-space()='Clone From Library']`);
        this.IMPORT_FRAMEWORK_POP_UP = page.locator(`//h3/span[normalize-space()='Import Framework']`);
        this.AVAILABLE_FRAMEWORK_DROPDOWN = page.locator(`//mat-label[normalize-space()='Available Framework Standards']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_FRAMEWORK = page.locator(`(//*[@role="option"])[1]`);
        this.AVAILABLE_SUB_FRAMEWORK_DEPDOWN = page.locator(`//mat-label[normalize-space()='Available Sub Framework']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_SUB_FRAMEWORK = page.locator(`(//*[@role="option"])[1]`);
        this.CLONED_FRAMEWORK_NAME_FIELD = page.locator(`//mat-label[normalize-space()='Cloned Framework Name']/following::input[1]`);
        this.CLONED_FRAMEWORK_SHORT_NAME = page.locator(`//mat-label[normalize-space()='Cloned Framework Short Name']/following::input[1]`);
        this.CLONE_BUTTON = page.locator(`//span[normalize-space()='Clone']`);
        this.RISK_TEMPLATE = page.locator(`//span[normalize-space()='Risk Templates']`);
        this.LIBRARY_TAB = page.locator(`//span[text()='Library']`);
        this.TEMPLATE_CHECKBOX = page.getByRole('checkbox').nth(1);
        this.CLONE_TEMPLATE_BUTTON = page.locator(`//span[normalize-space()='Copy To Templates']`);
        this.RISK_MANAGEMENT_BUTTON = page.locator(`//span[normalize-space()='Risk Management']`);
        this.DELETE = page.locator('.dropdown-menu').getByText('Delete');
        this.YES_BUTTON = page.locator(`//span[normalize-space()='Yes']`);
        this.DELETE_SUCCESS_MSG = page.getByText('Deleted Successfully');
        this.LIBRARY_COUNT = page.locator(`//*[contains(text(),'Library')]/span`);
        this.RISK_TEM_TAB = page.locator(`//span/span[(text()='Risk Templates')]`);
        this.ASSESMENT_CRITERIA_UPDATE = page.locator(`//div[contains(text(),'Assessment Criteria')]//span[@class="s-arrow-up-right"]`);
        this.DELETE_PARAMETER_BUTTON = page.locator(`//span[text()='Delete Parameter']`);
        this.COMPOUND_RADIO = page.locator(`//label[contains(text(),'Compound')]/..//input`);
        this.PARAMETER_NAME_ENG = page.locator(`(//*[contains(text(),'Name in English')])`);
        this.PARAMETER_NAME_ARB = page.locator(`(//*[contains(text(),'Name in Arabic')])`);
        this.SET_UP_BUTTON = page.locator(`//span[contains(text(),'Set Up')]`);
        this.ADD_PARAMETER_ICON = page.locator(`//h5[text()='Sub Parameters']/following::ui-icon//*[@class="s-plus"]`);
        this.CREATE_PARAMETER = page.locator(`//span[(text()='Create')]`);
        this.SUB_PARAMETER_ARB_NAME = page.locator(`(//*[contains(text(),'Name in Arabic')]/following::input[@name="parameterNameAr"])[1]`);
        this.NEXT_BUTTON = page.locator(`//span[text()='Next']`);
        this.INTIGRITY = page.locator(`//span[contains(text(),'Integrity')]`);
        this.AVAIBILITY = page.locator(`//span[contains(text(),'Availability')]`);
        this.CONFIDENTIALY = page.locator(`//span[contains(text(),'Confidentiality')]`);
        this.SUB_PARAMETER_ICON = page.locator(`//*[@role="dialog"]//*[@class="s-plus"]`);
        this.SUB_PARAMETER_ENG_LABEL = page.locator(`//mat-label[normalize-space()='Label in English']`);
        this.SUB_PARAMETER_ARB_LABEL = page.locator(`//mat-label[normalize-space()='Label in Arabic']`);
        this.VALUE_FIELD = page.locator(`//mat-label[text()='Value']`);
        this.SUB_PARAMETER_SAVE = page.locator(`//span[normalize-space()='Save']`);
        this.CROSS_ICON = page.locator(`//span[normalize-space()='Close']`);
        this.FORMULA_FIELD = page.locator(`//input[@name="name"]`);
        this.THREE_DOT = page.locator(`(//span[@class="s-dots-vertical"])[1]`);
        this.APPLY_BUTTON = page.locator(`//span[normalize-space()='Apply']`);
        this.USERS = page.locator(`//span[text()='Users']`);
        this.NEW_USER_BUTTON = page.locator(`//span[text()='New User']`);
        this.USENAME_FIELD = page.locator(`//mat-label[text()='Username']`);
        this.FULL_NAME_FIELD = page.locator(`//mat-label[text()='Full Name']`);
        this.EMAIL_FIELD = page.locator(`//mat-label[text()='Email']`);
        this.ROLE_1 = page.locator(`//label[text()='AutomationRole']`);
        this.ROLE_2 = page.locator(`//label[text()='SystemAdmin']`);
        this.ADD_ROLES_BUTTON = page.locator(`//button[text()='Add Role(s)']`);
        this.DEPARTMENT_DROPDOWN_DEPT = page.locator(`//mat-label[normalize-space()='Department']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.SELECT_DEPARTMENT = page.locator(`//div[@role="listbox"]`).getByText('Automation Created Department');
        this.ADD_ASSERT_CLARIFICATION_ICON = page.locator(`//h5[normalize-space()='Asset classification']/following::ui-icon//*[@class="s-plus"]`);
        this.MAX_VALUE_FIELD = page.locator(`//mat-label[normalize-space()='Range (Maximum Value)']`);
        this.FINISH_BUTTON = page.locator(`//span[text()='Finish']`);
        this.VULNERABILITY_TAB = page.locator(`//span[text()='Vulnerability Classifications']`);
        this.ADD_VULNERABILITY_ICON = page.locator(`(//ui-icon//*[@class="s-plus"])[1]`);
        this.COLOR_FIELD = page.locator(`//mat-label[text()='Color']`);
        this.THREAT_TAB = page.locator(`//span[text()='Threat Classification']`)
        this.ADD_THREAT_CLARIFICATION_ICON = page.locator(`//ui-icon//*[@class="s-plus"]`);
        this.CUSTOM_PARAMETER_TAB = page.locator(`//span[text()='Custom Parameters']`);
        this.CUSTOM_PARAMETER_ADD = page.locator(`//h5[normalize-space()='Custom Parameters']/following::ui-icon//*[@class="s-plus"]`);
        this.PROBABILITY = page.locator(`//span[text()='probability']`);
        this.SUB_PARAMETER_BUILD = page.locator(`//span[normalize-space()='AutomationBuild']`);
        this.SUB_PARAMETER_TENGENT = page.locator(`//span[normalize-space()='AutomationTengent']`);
        this.CUSTON_SUB_PARAMETER_ADD = page.locator(`(//*[@role="dialog"]//*[@class="s-plus"])[2]`);
        this.CANCEL_BUTTON = page.locator(`//span[text()='Cancel']`)
        this.IMPACT = page.locator(`//span[text()='impact']`);
        this.SUB_PARAMETER_WIZARD = page.locator(`//span[normalize-space()='AutomationWizard']`);
        this.SUB_PARAMETER_QUAZ = page.locator(`//span[normalize-space()='AutomationQuaz']`);
        this.METHODOLOGY_TAB = page.locator(`//span[text()='Methodology']`);
        this.NEW_METHODOLODY = page.locator(`//span[text()='Add Methodology']`);
        this.ACTIVATE_BUTTON_ASSERT = page.locator(`//span[text()='Activate']`);
        this.IMPACT_CHECKBOX = page.locator(`(//div[normalize-space()='impact']/following::input[@type="checkbox"])[1]`);
        this.PROBABILITY_CHECKBOX = page.locator(`(//div[normalize-space()='probability']/following::input[@type="checkbox"])[1]`);
        this.ADD_CLARIFICATION_BUTTON = page.locator(`//span[text()='Add Classification']`);
        this.MIN_RISK_SCORE = page.locator(`//mat-label[normalize-space()='Minimum Risk Score']`);
        this.MAX_RISK_SCORE = page.locator(`//mat-label[normalize-space()='Maximum Risk Score']`);
        this.TREATMENT_DUE_DAYS = page.locator(`//mat-label[normalize-space()='Treatment Due (In Days)']`);
        this.REVIEW_DAYS = page.locator(`//mat-label[normalize-space()='Review (In Days)']`);
        this.METHODOLOGY_FORMULA_FIELD = page.locator(`//mat-label[normalize-space()='Risk Scoring Formula']`);
        this.SLIDER = page.locator(`//span[@role="slider"]`);
        this.CUSTOM_FORMULA_DROPDOWN = page.locator(`//mat-label[normalize-space()='Control Strength Formula']/ancestor::div[contains(@class,"mat-mdc-form-field-flex")]//button`);
        this.OPTION = page.locator(`(//*[@role="option"])[1]`);
        this.CUSTOM_FORMULA_FIELD = page.locator(`//mat-label[normalize-space()='Custom Formula']`);
        this.METHODOLOGY_CHECKBOX = page.locator(`//label[normalize-space()='Automation_Methodology_QA']/preceding::input[@type='checkbox'][1]`);
        this.ASSET_CLASIFICATION_TAB = page.locator(`(//span[normalize-space()='Asset Classifications'])[1]`)
        this.PARAMETER_TYPE_TEXT = page.locator(`//h5[contains(text(),'Parameter Type')]`);
        this.DELETE_ICON = page.locator(`//span[@class="s-trash"]`);
        this.CUSTOM_OPTION = page.locator(`//span[normalize-space()='Custom']`);
    }


    async clickOnUserAndDept() {
        console.log("Waiting for User and Department tab");
        await this.USER_AND_DEPARTMENT.waitFor({ state: 'visible' });

        console.log("Clicking on User and Department tab");
        await this.USER_AND_DEPARTMENT.click();

        console.log("Clicked on User and Department tab");
    }

    async clickOnRoles() {
        console.log("Waiting for Roles tab");
        await this.ROLES.waitFor({ state: 'visible' });

        console.log("Clicking on Roles tab");
        await this.ROLES.click();

        console.log("Clicked on Roles tab");
    }

   async validateTableVisible() {
    await this.page.waitForTimeout(2000);

    const table = this.page.locator('//table').nth(0);

    if (!(await table.isVisible())) {
        console.log('Table is not visible, clicking Create New Issue');

        await this.clickOnNewIssueType();

        await this.page.waitForTimeout(2000);
    }

    await expect(table).toBeVisible();
}

    async createRoleIfNotExists(roleName: string) {
        // Validate table visibility
        await this.page.waitForTimeout(2000);
        await this.validateTableVisible();

        // Role locator inside table
        const role = this.page.locator(`//table//a[normalize-space()="${roleName}"]`);

        // Optional wait for table data loading
        await this.page.waitForTimeout(2000);

        // Check role exists or not
        if (await role.count() > 0) {
            console.log(`${roleName} already exists → skipping Add Role button click`);
        } else {
            console.log(`${roleName} not found → clicking Add Role button`);

            await this.clickOnAddRole();
            await this.enterRoleName(roleName);
            await this.checkRoleCheckbox();
            await this.clickOnCreate();
            await this.validateSuccessMsg();
        }
    }

    async searchSystemAdminRole() {
        console.log("Waiting for search field");
        await this.page.waitForTimeout(2000);
        await this.SEARCH_FIELD.waitFor({ state: 'visible' });
        console.log("Searching role: SystemAdmin");
        await this.SEARCH_FIELD.fill('SystemAdmin');

        console.log("Search input filled");
    }

    async clickOnSearchIcon() {
        console.log("Clicking on search icon");
        await this.SEARCH_ICON.click();
        await this.page.waitForTimeout(1500);
        console.log("Search icon clicked");
    }

    async validateSearchedRole() {
        console.log("Validating searched role text");
        await this.page.waitForTimeout(2000);
        await expect(this.SEARCHED_ROLE).toContainText('SystemAdmin');

        await this.SEARCH_FIELD.clear();

        console.log("Searched role validated successfully");
    }

    async clickOnAddRole() {
        console.log("Waiting for Add Role button");
        await this.ADD_ROLE_BUTTON.waitFor({ state: 'visible' });

        console.log("Clicking Add Role button");
        await this.ADD_ROLE_BUTTON.click();

        console.log("Add Role button clicked");
    }

    async enterRoleName(name: string) {
        console.log(`Waiting for Role Name field`);;

        await this.ROLE_NAME_FIELD.waitFor({ state: "visible" });

        console.log(`Entering role name: ${name}`);;
        await this.ROLE_NAME_FIELD.fill(name);

        console.log("Role name entered");
    }

    async checkRoleCheckbox() {
        const modules = [
            "Audit Management",
            "Calendar",
            "Catalog",
            "Common Controls",
            "Compliance",
            "Compliance Management",
            "Controls",
            "Dashboard",
            "Delegation",
            "Document Management",
            "Escalation",
            "Evidence",
            "Initiative Management",
            "Internal Controls",
            "Issues & Exceptions",
            "Permissions",
            "Reports",
            "Risk Controls",
            "Risk Management",
            "Settings",
            "Vendor Management",
            "Vendor Risks",
            "ServiceRequests",
            "ServiceRequestSettings"
        ];
        await this.page.waitForTimeout(2000);

        for (const module of modules) {
            const checkbox = this.page.locator(`//h5[normalize-space()="${module}"]/../..//input[@type="checkbox"]`).first();

            if (await checkbox.count() > 0) {
                await checkbox.check();
                await expect(checkbox).toBeChecked();
            } else {
                console.log(`Skipping: ${module} checkbox not found`);;
            }
        }
    }

    async clickOnCreate() {
        console.log("Waiting for Create button to be visible");
        await this.ROLE_CREATE_BUTTON.waitFor({ state: 'visible' });

        console.log("Clicking on Create button");
        await this.ROLE_CREATE_BUTTON.click();

        console.log("Clicked on Create button");
    }
    async clickOnCreateButton() {
        console.log("Waiting for Create button to be visible");
        await this.CREATE_BUTTON.waitFor({ state: 'visible' });

        console.log("Clicking on Create button");
        await this.CREATE_BUTTON.click();

        console.log("Clicked on Create button");
    }
    async validateSuccessMsg() {
        console.log("Waiting for success message to be visible");

        await this.SUCCESS_MSG.waitFor({ state: 'visible' });

        await expect(this.SUCCESS_MSG).toBeVisible();

        console.log("Success message validated");
    }

    async clickOnContributorRadio() {
        console.log("Waiting for Contributor radio button to be visible");
        await this.CONTRIBUTOR_RADIO.waitFor({ state: 'visible' });

        console.log("Clicking on Contributor radio button");
        await this.CONTRIBUTOR_RADIO.click();

        console.log("Contributor radio button clicked");
    }

    async clickOnSetttings() {
        console.log("Clicking on Settings");
        await this.SETTINGS.waitFor({ state: 'visible' });
        await this.SETTINGS.click();
    }

    async clickOnRiskSettings() {
        console.log("Clicking on Risk Settings");
        await this.RISK_SETTTINGS.waitFor({ state: 'visible' });
        await this.RISK_SETTTINGS.click();
    }

    async clickOnGenrelRiskCategoryUpdate() {
        console.log("Clicking on General Risk Category Update");
        await this.GENREL_RISK_SETTING_UPDATE.waitFor({ state: 'visible' });
        await this.GENREL_RISK_SETTING_UPDATE.click();
    }

    async validateRiskCategoryTableVisible() {
        await expect(this.page.locator(`//div[contains(text(),'Risk Categories')]/ancestor::ui-card//table`)).toBeVisible();
    }

    async validateAssetCategoryTableVisible() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(1500);
        await this.NEW_ASSERT_CATEGORY_BUTTON.scrollIntoViewIfNeeded();
        const assetCategoryTable = this.page.locator(`//div[contains(text(),'Asset Categories')]/ancestor::ui-card//table`)
        const noCategoryMsg = this.page.locator(`//div[contains(text(),'Asset Categories')]/ancestor::ui-card//div[contains(text(),'No Data Available')]`)
        await expect(assetCategoryTable.isVisible() || noCategoryMsg.isVisible()).toBeTruthy();
    }

    async validateProcessCategoryTableVisible() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(1500);
        await this.NEW_PROCESS_CATEGORY_BUTTON.scrollIntoViewIfNeeded();
        const assetCategoryTable = this.page.locator(`//div[contains(text(),'Process Categories')]/ancestor::ui-card//table`)
        const noCategoryMsg = this.page.locator(`//div[contains(text(),'Process Categories')]/ancestor::ui-card//div[contains(text(),'No Data Available')]`)
        await expect(assetCategoryTable.isVisible() || noCategoryMsg.isVisible()).toBeTruthy();
    }

    async validateThreatTypeTableVisible() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(1000);
        await this.NEW_THREAT_TYPE_BUTTON.scrollIntoViewIfNeeded();
        const assetCategoryTable = this.page.locator(`//div[contains(text(),'Threat Types')]/ancestor::ui-card//table`)
        const noCategoryMsg = this.page.locator(`//div[contains(text(),'Threat Types')]/ancestor::ui-card//div[contains(text(),'No Data Available')]`)
        await expect(assetCategoryTable.isVisible() || noCategoryMsg.isVisible()).toBeTruthy();
    }

    async validateVulnerabilitySourcesTableVisible() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(1000);
        await this.NEW_VULNERABILITY_SOURCE_BUTTON.scrollIntoViewIfNeeded();
        const assetCategoryTable = this.page.locator(`//div[contains(text(),'Vulnerability Sources')]/ancestor::ui-card//table`)
        const noCategoryMsg = this.page.locator(`//div[contains(text(),'Vulnerability Sources')]/ancestor::ui-card//div[contains(text(),'No Data Available')]`)
        await expect(assetCategoryTable.isVisible() || noCategoryMsg.isVisible()).toBeTruthy();
    }

    async validateDocTypeTableVisible() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(3000);
        const assetCategoryTable = this.page.locator(`//div[contains(text(),'Document Type')]/ancestor::ui-card//table`)
        const noCategoryMsg = this.page.locator(`//div[contains(text(),'Document Type')]/ancestor::ui-card//div[contains(text(),'No Data Available')]`)
        await expect(assetCategoryTable.isVisible() || noCategoryMsg.isVisible()).toBeTruthy();
    }

    async validateIssueTypeTableVisible() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(2000);
        const issueType = this.page.locator(`//div[contains(text(),'Issue settings')]/ancestor::ui-card//table`)
        await expect(issueType.isVisible() || issueType.isHidden()).toBeTruthy();
    }

    async createDocumentTypeIfNotExists(

        docTypeName: string
    ): Promise<void> {
        const docTypeLocator = this.page.locator(
            `//div[contains(text(),'Document Types')]/..//table//td[normalize-space()="${docTypeName}"]`
        );

        // wait for table/data to load

        await this.page.waitForTimeout(2000);

        const isDocTypePresent = (await docTypeLocator.count()) > 0;

        if (isDocTypePresent) {
            console.log(`${docTypeName} already exists → skipping creation`);
            return;
        }

        console.log(`${docTypeName} not found → creating`);

        // create new document type
        await this.clickOnNewDocType();
        await this.enterDocTypeEngName(docTypeName);
        await this.enterDocTypeArbName(docTypeName);
        await this.clickOnAddButton();

        // validate success message
        await this.validateSuccessMsg();

        // verify document type is created
        await expect(docTypeLocator).toBeVisible();

        console.log(`${docTypeName} created successfully`);
    }

    async createRiskCategoryIfNotExists(
        categoryName: string
    ): Promise<void> {

        const categoryLocator = this.page.locator(
            `//div[contains(text(),'Risk Categories')]/..//table//td[normalize-space()="${categoryName}"]`
        );

        // wait for table/data to load

        await this.page.waitForTimeout(2000);

        const isCategoryPresent = (await categoryLocator.count()) > 0;

        if (isCategoryPresent) {
            console.log(`${categoryName} already exists → skipping creation`);
            return;
        }

        console.log(`${categoryName} not found → creating`);

        // create new risk category
        await this.clickOnNewRiskCategory();
        await this.enterRiskCategoryEngName(categoryName);
        await this.enterRiskCategoryArbName(categoryName);
        await this.clickOnRiskCategoryAdd();

        // validate success message
        await this.validateSuccessMsg();

        // verify category is created
        await expect(categoryLocator).toBeVisible();

        console.log(`${categoryName} created successfully`);
    }

    async createAssetCategoryIfNotExists(
        categoryName: string
    ): Promise<void> {

        const categoryLocator = this.page.locator(
            `//div[contains(text(),'Asset Categories')]/..//table//td/div[normalize-space()="${categoryName}"]`
        );

        // wait for table/data to load

        await this.page.waitForTimeout(2000);

        const isCategoryPresent = (await categoryLocator.count()) > 0;

        if (isCategoryPresent) {
            console.log(`${categoryName} already exists → skipping creation`);
            return;
        }

        console.log(`${categoryName} not found → creating`);

        // create new asset category
        await this.clickOnNewAssertCategoryButton();
        await this.enterRiskCategoryEngName(categoryName);
        await this.enterRiskCategoryArbName(categoryName);
        await this.clickOnRiskCategoryAdd();

        // validate success message
        await this.validateSuccessMsg();

        // verify category is created
        await expect(categoryLocator).toBeVisible();

        console.log(`${categoryName} created successfully`);
    }

    async createProcessCategoryIfNotExists(
        categoryName: string
    ): Promise<void> {

        const categoryLocator = this.page.locator(
            `//div[contains(text(),'Process Categories')]/..//table//td/div[normalize-space()="${categoryName}"]`
        );

        // wait for table/data to load

        await this.page.waitForTimeout(2000);

        const isCategoryPresent = (await categoryLocator.count()) > 0;

        if (isCategoryPresent) {
            console.log(`${categoryName} already exists → skipping creation`);
            return;
        }

        console.log(`${categoryName} not found → creating`);

        // create new process category
        await this.clickOnNewProcessCategoryButton();
        await this.enterRiskCategoryEngName(categoryName);
        await this.enterRiskCategoryArbName(categoryName);
        await this.clickOnRiskCategoryAdd();

        // validate success message
        await this.validateSuccessMsg();

        // verify category is created
        await expect(categoryLocator).toBeVisible();

        console.log(`${categoryName} created successfully`);
    }

    async createThreatTypeIfNotExists(
        threatTypeName: string
    ): Promise<void> {

        const threatTypeLocator = this.page.locator(
            `//div[contains(text(),'Threat Types')]/..//table//td/div[normalize-space()="${threatTypeName}"]`
        );

        // wait for table/data to load

        await this.page.waitForTimeout(2000);

        const isThreatTypePresent = (await threatTypeLocator.count()) > 0;

        if (isThreatTypePresent) {
            console.log(`${threatTypeName} already exists → skipping creation`);
            return;
        }

        console.log(`${threatTypeName} not found → creating`);

        // create new threat type
        await this.clickOnNewThreatTypeButton();
        await this.enterRiskCategoryEngName(threatTypeName);
        await this.enterRiskCategoryArbName(threatTypeName);
        await this.clickOnRiskCategoryAdd();

        // validate success message
        await this.validateSuccessMsg();

        // verify threat type is created
        await expect(threatTypeLocator).toBeVisible();

        console.log(`${threatTypeName} created successfully`);
    }

    async clickOnNewRiskCategory() {
        console.log("Clicking on New Risk Category");
        await this.NEW_RISK_CATEGORY_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_RISK_CATEGORY_BUTTON.click();
    }

    async enterRiskCategoryEngName(name: string) {
        const value = `${name}`;
        console.log("Entering English Risk Category Name:", value);
        await this.RISK_CATEGORY_ENG_NAME.fill(value);
    }

    async enterRiskCategoryArbName(name: string) {
        const value = `${name}`;
        console.log("Entering Arabic Risk Category Name:", value);
        await this.RISK_CATEGORY_ARB_NAME.fill(value);
    }

    async clickOnRiskCategoryAdd() {
        console.log("Clicking on Add Risk Category");
        await this.RISK_ADD_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_ADD_BUTTON.click();
    }

    async clickOnNewAssertCategoryButton() {
        console.log("Clicking on New Asset Category");
        await this.NEW_ASSERT_CATEGORY_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_ASSERT_CATEGORY_BUTTON.click();
    }

    async clickOnNewProcessCategoryButton() {
        console.log("Clicking on New Process Category");
        await this.NEW_PROCESS_CATEGORY_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_PROCESS_CATEGORY_BUTTON.click();
    }

    async clickOnNewThreatTypeButton() {
        console.log("Clicking on New Threat Type");
        await this.NEW_THREAT_TYPE_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_THREAT_TYPE_BUTTON.click();
    }

    async createVulnerabilitySourceIfNotExists(
        sourceName: string
    ): Promise<void> {

        const sourceLocator = this.page.locator(
            `//div[contains(text(),'Vulnerability Sources')]/..//table//td[normalize-space()="${sourceName}"]`
        );

        // wait for table/data to load

        await this.page.waitForTimeout(2000);

        const isSourcePresent = (await sourceLocator.count()) > 0;

        if (isSourcePresent) {
            console.log(`${sourceName} already exists → skipping creation`);
            return;
        }

        console.log(`${sourceName} not found → creating`);

        // create new vulnerability source
        await this.clickOnNewVulnerabilitySourceButton();
        await this.enterRiskCategoryEngName(sourceName);
        await this.enterRiskCategoryArbName(sourceName);
        await this.clickOnRiskCategoryAdd();

        // validate success message
        await this.validateSuccessMsg();

        // verify source is created
        await expect(sourceLocator).toBeVisible();

        console.log(`${sourceName} created successfully`);
    }

    async clickOnNewVulnerabilitySourceButton() {
        console.log("Clicking on New Vulnerability Source");
        await this.NEW_VULNERABILITY_SOURCE_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_VULNERABILITY_SOURCE_BUTTON.click();
    }

    async clickOnDepartments() {
        console.log('Clicking on Departments...');
        await this.DEPARTMENT.waitFor({ state: 'visible' });
        await this.DEPARTMENT.click();
    }

    async clickOnNewDepartmentButton() {
        console.log('Clicking on New Department button...');
        await this.NEW_DEPARTMENT.waitFor({ state: 'visible' });
        await this.NEW_DEPARTMENT.click();
    }

    async enterDeptEngName(dept: string) {
        console.log('Entering Department English Name...');
        await this.DEPT_NAME_ENG_FIELD.fill(dept)
    }

    async enterDeptArbName(dept: string) {
        console.log('Entering Department Arabic Name...');
        await this.DEPT_NAME_ARB_FIELD.fill(dept)
    }

    async clickOnAdd() {
        console.log('Clicking on Add button...');
        await this.RISK_ADD_BUTTON.click();
    }

    async clickOnExternalUsers() {
        console.log('Navigating to External Users...');
        await this.EXTERNAL_USER.waitFor({ state: 'visible' });
        await this.EXTERNAL_USER.click();
    }

    async clickOnAddUsers() {
        console.log('Clicking on Add Users...');
        await this.ADD_USERS.click();
    }

    async enterUserFullName(name: string) {
        console.log('Entering User Full Name...');

        await this.USER_FULL_NAME_FIELD.fill(name);
    }

    async enterUserEmail(email: string) {
        console.log('Entering User Email...');
        await this.USER_EMAIL_FIELD.fill(email);
    }

    async enterUserTitle(title: string) {
        console.log('Entering User Title...');
        await this.USER_TITLE_FIELD.fill(title);
    }

    async clickOnCreateUser() {
        console.log('Creating User...');
        await this.CREATE_BUTTON.click();
    }

    async clickOnPolicyAndDOcSettings() {
        console.log('Opening Policy and Document Settings...');
        await this.POLICY_AND_DOC_SETTING.waitFor({ state: 'visible' });
        await this.POLICY_AND_DOC_SETTING.click();
    }

    async clickOnNewDocType() {
        console.log('Clicking on New Document Type...');
        await this.DOC_NEW_TYPE_BUTTON.waitFor({ state: 'visible' });
        await this.DOC_NEW_TYPE_BUTTON.scrollIntoViewIfNeeded();
        await this.DOC_NEW_TYPE_BUTTON.click();
    }

    async enterDocTypeEngName(name: string) {
        console.log('Entering Document Type English Name...');
        await this.TYPE_ENG_NAME.fill(name)
    }

    async enterDocTypeArbName(name: string) {
        console.log('Entering Document Type Arabic Name...');
        await this.TYPE_ARB_NAME.fill(name)
    }

    async clickOnAddButton() {
        console.log('Clicking Add button...');
        await this.page.waitForTimeout(1500)
        await this.ADD_BUTTON.click();
    }

    async clickOnIssueSetting() {
        console.log('Opening Issue Settings...');
        await this.ISSUE_SETTING.waitFor({ state: 'visible' });
        await this.ISSUE_SETTING.click();
    }

    async clickOnNewIssueType() {
        console.log('Clicking on New Issue Type...');
        await this.NEW_ISSUE_TYPE.waitFor({ state: 'visible' });
        await this.NEW_ISSUE_TYPE.click();
    }

    async enterIssueEngName(name: string) {
        console.log('Entering Issue Type English Name...');
        await this.ISSUE_TYPE_ENG_NAME.waitFor({ state: 'visible' });
        await this.ISSUE_TYPE_ENG_NAME.fill(name);
    }

    async enterIssueArbName(name: string) {
        console.log('Entering Issue Type Arabic Name...');
        await this.ISSUE_TYPE_ARB_NAME.waitFor({ state: 'visible' });
        await this.ISSUE_TYPE_ARB_NAME.fill(name);
    }

    async clickOnFrameworkSettings() {
        await this.FRAMEWORK_SETTINGS.waitFor({ state: 'visible' });
        await this.FRAMEWORK_SETTINGS.click();
        console.log("Framework Settings clicked");
    }

    async validateFrameWorkPage() {
        await this.FRAMEWORK_PAGE.waitFor({ state: 'visible' });
        await expect(this.FRAMEWORK_PAGE).toBeVisible();
        console.log("Validated the Framework Page");
    }

    async clickOnFrameWorkCheckbox() {
        await this.FRAMEWORK_CHECKBOX.waitFor({ state: 'visible' });
        const isChecked = await this.FRAMEWORK_CHECKBOX.isChecked();
        if (isChecked) {
            await this.FRAMEWORK_CHECKBOX.uncheck();
        }
        await this.FRAMEWORK_CHECKBOX.check();
        console.log("Framework Checkbox clicked and checked");
    }

    async clickOnSaveButton() {
        await this.SAVE_BUTTON.scrollIntoViewIfNeeded();
        await this.SAVE_BUTTON.waitFor({ state: 'visible' });
        await this.SAVE_BUTTON.click();
        console.log("Save button clicked");
    }

    async clickOnComplaince() {
        await this.COMPLAINCE.waitFor({ state: 'visible' });
        await this.COMPLAINCE.click();
        console.log("Compliance tab clicked");
    }

    async clickOnFarmeworkAndValidateThePage() {
        await this.FRAMEWORKS.waitFor({ state: 'visible' });
        await this.FRAMEWORKS.click();
        await this.FRAMEWORKS_PAGE.waitFor({ state: 'visible' });
        await expect(this.FRAMEWORKS_PAGE).toBeVisible();
        console.log("Framework tab clicked and page validated");
    }

    async createFrameworkIfMissing() {
        await this.page.waitForTimeout(2000)
        const frameworkLocator = this.page.locator(
            "//tbody[1]//a[contains(normalize-space(), 'Test')]"
        );

        if (await frameworkLocator.count() > 0) {
            console.log("Framework already exists — skipping framework creation");
            return;
        } else {

            await this.clickOnAddFrameworkButton();
            await this.clickOnCloneFromLibrary();
            await this.validateFrameworkPopUp();
            await this.clickAndSelectAvalableFramework();
            await this.clickAndSelectSubFramework();
            await this.enterClonedFrameworkName();
            await this.enterClonedFrameworkShortName();
            await this.clickOnCloneButton();
            await this.validateClonedFramework();

            console.log("Framework cloned successfully and validated");
        }
    }

    async clickOnAddFrameworkButton() {
        await this.ADD_FRAMEWORK_BUTTON.click();
        console.log("Add Framework button clicked");
    }

    async clickOnCloneFromLibrary() {
        await this.CLONE_FROM_LIBRARY.waitFor({ state: 'visible' });
        await this.CLONE_FROM_LIBRARY.click();
        console.log("Clone From Library clicked");
    }

    async validateFrameworkPopUp() {
        await this.IMPORT_FRAMEWORK_POP_UP.waitFor({ state: 'visible' });
        await expect(this.IMPORT_FRAMEWORK_POP_UP).toBeVisible();
        console.log("Framework popup validated");
    }

    async clickAndSelectAvalableFramework() {
        await this.page.waitForTimeout(1500)
        await this.AVAILABLE_FRAMEWORK_DROPDOWN.waitFor({ state: 'visible' });
        await this.AVAILABLE_FRAMEWORK_DROPDOWN.click();
        await this.SELECT_FRAMEWORK.waitFor({ state: 'visible' });
        await this.SELECT_FRAMEWORK.click();
        console.log("Available framework selected");
    }

    async clickAndSelectSubFramework() {
        await this.page.waitForTimeout(1500)
        await this.AVAILABLE_SUB_FRAMEWORK_DEPDOWN.waitFor({ state: 'visible' });
        await this.AVAILABLE_SUB_FRAMEWORK_DEPDOWN.click();
        await this.SELECT_SUB_FRAMEWORK.waitFor({ state: 'visible' });
        await this.SELECT_SUB_FRAMEWORK.click();
        console.log("Sub-framework selected");
    }

    async enterClonedFrameworkName() {
        const uniqueName = `Test_${Math.floor(Math.random() * 10000)}`;
        await this.CLONED_FRAMEWORK_NAME_FIELD.fill(uniqueName);
        console.log(`Entered unique cloned framework name: ${uniqueName}`);
    }

    async enterClonedFrameworkShortName() {
        const uniqueShortName = `Test_${Math.floor(Math.random() * 10000)}`;
        await this.CLONED_FRAMEWORK_SHORT_NAME.fill(uniqueShortName);
        console.log(`Entered unique cloned framework short name: ${uniqueShortName}`);
    }

    async clickOnCloneButton() {
        await this.CLONE_BUTTON.click();
        console.log("Clone button clicked");
    }

    async validateClonedFramework() {
        console.log("Validating Clone Framework...");

        await this.page.reload();
        await this.page.locator(`//table`).waitFor({ state: 'visible' })
        await this.page.locator(`//div[@class="loader-container loader-visible"]`).waitFor({ state: 'hidden' });
        const frameworkLocator = this.page.locator("//tbody[1]//a[contains(normalize-space(), 'Test')]");
        await frameworkLocator.first().waitFor({ state: 'visible' });
        const frameworkText = await frameworkLocator.first().textContent();
        console.log('Framework Text Found:', frameworkText);
        expect(frameworkText?.includes('Test')).toBeTruthy();
        console.log("Clone Framework validation performed");
        await this.page.locator(`//div[@class="loader-container loader-visible"]`).first().waitFor({ state: 'hidden' });
    }

    async clickOnRiskManagement() {
        console.log("Clicking on the Risk Management button");
        await this.page.locator(`//div[@class="loader-container loader-visible"]`).waitFor({ state: 'hidden' });
        await this.RISK_MANAGEMENT_BUTTON.waitFor({ state: 'visible' });
        await this.RISK_MANAGEMENT_BUTTON.click();
        console.log("Risk Management button clicked successfully");
    }

    async clickOnRiskTemplate() {
        console.log("Clicking on Risk Template");
        await this.RISK_TEMPLATE.waitFor({ state: 'visible' });
        await this.RISK_TEMPLATE.click();
        console.log("Risk Template clicked successfully");
    }

    async clickOnLibraryTab() {
        console.log("Clicking on Library Tab");
        await this.LIBRARY_TAB.waitFor({ state: 'visible' });
        await this.LIBRARY_TAB.click();
        console.log("Library Tab clicked successfully");
    }

    async selectTemplateCheckbox() {
        console.log("Selecting Template checkbox");
        await this.TEMPLATE_CHECKBOX.waitFor({ state: 'visible' });
        await this.TEMPLATE_CHECKBOX.check();
        console.log("Template checkbox selected");
    }

    async clickOnCopyToTemplateButton() {
        console.log("Clicking on Copy to Template button");
        await this.CLONE_TEMPLATE_BUTTON.waitFor({ state: 'visible' });
        await this.CLONE_TEMPLATE_BUTTON.scrollIntoViewIfNeeded();
        await this.CLONE_TEMPLATE_BUTTON.click();
        console.log("Copy to Template button clicked");
    }



    async copyTemplateIfExists() {
        await this.page.waitForTimeout(2000);
        const hamburger = this.page.locator(
            "(//td//span[@class='s-dots-vertical'])[1]"
        );

        const isVisible = await hamburger.isVisible().catch(() => false);

        if (!isVisible) {
            console.log("Hamburger not visible → skipping delete flow")
            return;
        } else {
            await this.getLibraryTemplate();
            await this.selectTemplateCheckbox();
            await this.clickOnCopyToTemplateButton();
            await this.clickOnRiskTemplateTab();
            await this.clickOnRiskTemHamburger();
            await this.clickOnDeleteTemplate();
            await this.clickOnYesButton();
            await this.validateDeleteSuccessMsg();
        }
    }


    async clickOnRiskTemHamburger() {
        console.log("Clicking Hamburger Menu for:", this.LIBRARY_TEM);

        const locator = this.page.locator(
            `(//td//span[@class="s-dots-vertical"])[1]`
        );

        await locator.click();
    }

    async clickOnDeleteTemplate() {
        await this.DELETE.waitFor({ state: 'visible' });
        await this.DELETE.click();
    }

    async clickOnYesButton() {
        console.log('Clicking on YES_BUTTON...');
        await this.YES_BUTTON.scrollIntoViewIfNeeded();
        await this.YES_BUTTON.click();
        console.log('YES_BUTTON clicked successfully');
    }

    async validateDeleteSuccessMsg() {
        console.log("Validating Delete Success message");
        await this.DELETE_SUCCESS_MSG.waitFor({ state: 'visible' });
        await expect(this.DELETE_SUCCESS_MSG).toBeVisible();
        console.log("Delete success message validated");
    }

    async getLibraryTemCount() {
        console.log((await this.LIBRARY_COUNT.textContent())?.trim());
    }

    async clickOnRiskTemplateTab() {
        await this.RISK_TEM_TAB.click();
    }

    async getLibraryTemplate() {
        const tempName = (await this.page.locator(`(//div[@class="cell-content ng-star-inserted"]/span)[1]`).textContent())?.trim() || '';

        const match = tempName.match(/\(([^)]+)\)/);
        this.LIBRARY_TEM = match ? match[1] : tempName; // fallback if no ()

        console.log("Stored template:", this.LIBRARY_TEM);
        return this.LIBRARY_TEM;
    }

    async validateTemplateVisible() {
        const locator = this.page.locator(`//div[@class="cell-content ng-star-inserted"]/span[normalize-space()='${this.LIBRARY_TEM}']`);
        await expect(locator).toBeVisible();
    }

    async clickOnAssesmentCriteriaUpdate() {
        await this.ASSESMENT_CRITERIA_UPDATE.waitFor({ state: 'visible' });
        await this.ASSESMENT_CRITERIA_UPDATE.click();
    }

    async clickOnDeleteParameter() {
        if (await this.DELETE_PARAMETER_BUTTON.isVisible()) {
            await this.DELETE_PARAMETER_BUTTON.click();
            await this.page.waitForTimeout(2000);
            console.log("Delete button clicked");
        } else {
            console.log("Delete button not visible, skipping");
        }
    }

    async clickOnCompoundRadio() {
        await this.COMPOUND_RADIO.click();
    }

    async enterParameterEngName(name: string) {
        await this.PARAMETER_NAME_ENG.waitFor({ state: 'visible' });
        await this.PARAMETER_NAME_ENG.fill(name);
    }

    // async enterParameterAbrName(name: string) {
    //     await this.PARAMETER_NAME_ARB.waitFor({ state: 'visible' });
    //     await this.PARAMETER_NAME_ARB.fill(name);
    // }

    async clickOnAddParameterIcon1() {
        const overlay = this.page.locator('.cdk-overlay-backdrop');
        // Handle overlay if present
        if (await overlay.count() > 0) {
            await overlay.last().waitFor({ state: 'hidden' });
        }

        await this.ADD_PARAMETER_ICON.first().waitFor({
            state: 'visible'
        });

        await this.ADD_PARAMETER_ICON.first().click();
    }

    async enterParameterAbrName(name: string) {
        await this.PARAMETER_NAME_ARB.first().waitFor({ state: 'visible' });
        await this.PARAMETER_NAME_ARB.first().fill(name);
    }

    async clickOnSetUpButton() {
        await this.SET_UP_BUTTON.click();
    }

    async clickOnConfirmButton() {
        await this.page.waitForTimeout(1500);
        await this.page.getByText('Confirm').click();
    }

    async clickOnAddParameterIcon() {
        await this.ADD_PARAMETER_ICON.first().click();
    }

    async clickOnCreateParameter() {
        await this.CREATE_PARAMETER.click();
    }

    async enterSubParameterAbrName(name: string) {
        await this.SUB_PARAMETER_ARB_NAME.waitFor({ state: 'visible' });
        await this.SUB_PARAMETER_ARB_NAME.fill(name);
    }
    async clickOnNextButton() {
        await this.NEXT_BUTTON.click();
    }
    async clickOnSubParameterInigrity() {
        await this.INTIGRITY.click();
    }
    async clickOnNext() {
        await this.NEXT_BUTTON.nth(1).click();
    }
    async clickOnSubParameterAvailability() {
        await this.AVAIBILITY.click();
    }

    async clickOnSubParameterConfidentialy() {
        await this.CONFIDENTIALY.click();
    }

    async clickAndFillSubParameterFields() {
        const engName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const arbName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const value = ['1', '2', '3', '4', '5'];
        const colors = ["#242222ff", "#5113aeff", "#e5248b", "#20d54d", "#e32b16"];

        for (let i = 0; i < engName.length; i++) {
            await this.SUB_PARAMETER_ICON.click();
            await this.SUB_PARAMETER_ENG_LABEL.fill(engName[i]);
            await this.SUB_PARAMETER_ARB_LABEL.fill(arbName[i]);
            await this.VALUE_FIELD.fill(value[i]);
            await this.COLOR_FIELD.fill(colors[i]);
            await this.SUB_PARAMETER_SAVE.click();
        }
    }

    async clickOnCrossIcon() {
        await this.CROSS_ICON.click();
    }

    async enterFormula() {
        await this.FORMULA_FIELD.fill('#Max(@Integrity@Availability@Confidentiality)');
    }
    async clickOnApplyButton() {
        await this.APPLY_BUTTON.click();
    }

    async clickOnApply() {
        await this.APPLY_BUTTON.nth(1).click();
    }

    async clickOnUsers() {
        await this.USERS.waitFor({ state: 'visible' });
        await this.USERS.click();
    }

    async clickOnNewUserButton() {
        await this.NEW_USER_BUTTON.waitFor({ state: 'visible' });
        await this.NEW_USER_BUTTON.click();
    }

    async enterUserName(name: string) {
        await this.USENAME_FIELD.waitFor({ state: 'visible' });
        const uniqueName = `Automation_${Math.floor(Math.random() * 10000)}`;
        await this.USENAME_FIELD.fill(uniqueName)
    }

    async enterFullName(name: string) {

        await this.FULL_NAME_FIELD.fill(name);
    }

    async enterEmail() {
        await this.page.waitForTimeout(1000);
        const uniqueName = Math.floor(Math.random() * 1000);
        await this.EMAIL_FIELD.fill(`Automation.userEmail${uniqueName}@solidrange.com`);
    }
    async selectDepartmentFromDropdown() {
        console.log("Selecting a department from dropdown");
        await this.DEPARTMENT_DROPDOWN_DEPT.waitFor({ state: 'visible' });
        await this.DEPARTMENT_DROPDOWN_DEPT.click();
        await this.SELECT_DEPARTMENT.waitFor({ state: 'visible' });
        await this.SELECT_DEPARTMENT.click();
        console.log("Department selected successfully");
    }

    async clickAndSelectRoles() {
        await this.page.waitForTimeout(2500);
        await this.ROLE_1.waitFor({ state: 'visible' });
        await this.ROLE_1.click();
        await this.ROLE_2.click();
    }

    async clickOnAddRoles() {
        await this.page.waitForTimeout(2000);
        await this.ADD_ROLES_BUTTON.click();
    }

    async clickOnFinish() {
        await this.page.waitForTimeout(2000);
        await this.FINISH_BUTTON.click();
    }

    async clickAndFillAssertClarificationFields() {
        const engName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const arbName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const value = ['1', '2', '3', '4', '5'];
        const maxValue = ['112', '114', '116', '118', '555']

        for (let i = 0; i < engName.length; i++) {
            await this.ADD_ASSERT_CLARIFICATION_ICON.click();
            await this.SUB_PARAMETER_ENG_LABEL.fill(engName[i]);
            await this.SUB_PARAMETER_ARB_LABEL.fill(arbName[i]);
            await this.VALUE_FIELD.fill(value[i]);
            await this.MAX_VALUE_FIELD.fill(maxValue[i]);
            await this.SUB_PARAMETER_SAVE.click();
        }
    }

    async clickOnVulnerabilityTab() {
        await this.page.waitForTimeout(2000)
        await this.VULNERABILITY_TAB.waitFor({ state: 'visible' });
        await this.VULNERABILITY_TAB.click();
    }

    async clickOnDeleteIfVulnerabilityParameterTextNotVisible() {
        await this.page.waitForTimeout(2000);
        const isHidden = await this.PARAMETER_TYPE_TEXT.isHidden();

        if (isHidden) {
            await this.DELETE_ICON.click();
            await this.clickOnYesButton();
        }
        await this.enterParameterEngName('Vulnerability classification');
        await this.enterParameterAbrName('Vulnerability classification');
        await this.clickOnSetUpButton();
        await this.page.waitForTimeout(1500);
        await this.page.getByText('Confirm').click();
    }

    async clickAndFillVulnerabilitySubParameterFields() {
        await this.page.waitForTimeout(2000);
        const engName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const arbName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const value = ['1', '2', '3', '4', '5'];
        const colors = ["#242222ff", "#5113aeff", "#e5248b", "#20d54d", "#e32b16"];

        for (let i = 0; i < engName.length; i++) {
            await this.ADD_VULNERABILITY_ICON.click();
            await this.SUB_PARAMETER_ENG_LABEL.fill(engName[i]);
            await this.SUB_PARAMETER_ARB_LABEL.fill(arbName[i]);
            await this.VALUE_FIELD.fill(value[i]);
            await this.COLOR_FIELD.fill(colors[i]);
            await this.SUB_PARAMETER_SAVE.click();
        }
    }

    async clickOnThreatTab() {
        await this.SUCCESS_MSG.waitFor({ state: 'hidden' })
        await this.THREAT_TAB.waitFor({ state: 'visible' });
        await this.THREAT_TAB.click();
    }

    async clickOnDeleteIfParameterTextNotVisible() {
        await this.page.waitForTimeout(2000);
        const isHidden = await this.PARAMETER_TYPE_TEXT.isHidden();

        if (isHidden) {
            await this.DELETE_ICON.click();
            await this.clickOnYesButton();
        }
    }

    async clickAndFillThreatSubParameterFields() {
        const engName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const arbName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const value = ['1', '2', '3', '4', '5'];
        const colors = ["#242222ff", "#5113aeff", "#e5248b", "#20d54d", "#e32b16"];

        for (let i = 0; i < engName.length; i++) {
            await this.ADD_THREAT_CLARIFICATION_ICON.click();
            await this.SUB_PARAMETER_ENG_LABEL.fill(engName[i]);
            await this.SUB_PARAMETER_ARB_LABEL.fill(arbName[i]);
            await this.VALUE_FIELD.fill(value[i]);
            await this.COLOR_FIELD.fill(colors[i]);
            await this.SUB_PARAMETER_SAVE.click();
        }
    }

    async clickOnCustomParameterTab() {
        await this.CUSTOM_PARAMETER_TAB.waitFor({ state: 'visible' });
        await this.CUSTOM_PARAMETER_TAB.click();
    }

    async deleteCustonParameterIfExist() {
        const parameters = ['impact', 'probability'];
        await this.page.waitForTimeout(1500)
        for (const parameter of parameters) {
            const parameterLocator = this.page.locator(
                `//span[contains(text(),'${parameter}')]`
            );

            if (await parameterLocator.isVisible()) {
                await this.page
                    .locator(
                        `//span[contains(text(),'${parameter}')]/ancestor::tr//span[@class='s-dots-vertical']`
                    )
                    .click();
                await this.clickOnDeleteTemplate();
                await this.clickOnYesButton();
            }
        }
    }

    async createCustomParametersIfNotExist() {

    const impactLocator = this.page.locator("//span[contains(text(),'impact')]");
    const probabilityLocator = this.page.locator("//span[contains(text(),'probability')]");

    // Skip creation if both parameters already exist
    if (
        (await impactLocator.count()) > 0 &&
        (await probabilityLocator.count()) > 0
    ) {
        console.log('Impact and Probability already exist. Skipping creation.');
        return;
    }

    // =========================
    // CREATE IMPACT
    // =========================

            await this.clickOnCustomParameterAdd();
            console.log('Clicked on Custom Parameter Add');

            await this.clickOnCompoundRadio();
            console.log('Clicked on Compound Radio');

            await this.enterParameterEngName('impact');
            console.log('Entered Impact English Name');

            await this.enterParameterAbrName('impact');
            console.log('Entered Impact Abbreviation Name');

            await this.clickOnSaveButton();
            console.log('Clicked on Save Button');

            // PROBABILITY

            await this.clickOnCustomParameterAdd();
            console.log('Clicked on Custom Parameter Add');

            await this.clickOnCompoundRadio();
            console.log('Clicked on Compound Radio');

            await this.enterParameterEngName('probability');
            console.log('Entered Probability English Name');

            await this.enterParameterAbrName('probability');
            console.log('Entered Probability Abbreviation Name');

            await this.clickOnSaveButton();
            console.log('Clicked on Save Button');

            // =========================
            // PROBABILITY SUB PARAMETERS
            // =========================

            await this.clickOnProbability();
            console.log('Clicked on Probability');

            await this.clickOnSubparatmeterAdd();
            console.log('Clicked on Sub Parameter Add');

            await this.enterParameterEngName('AutomationTengent');
            console.log('Entered Tengent English Name');

            await this.enterParameterAbrName('AutomationTengent');
            console.log('Entered Tengent Abbreviation Name');

            await this.clickOnCreate();
            console.log('Clicked on Create');

            await this.clickOnSubparatmeterAdd();
            console.log('Clicked on Sub Parameter Add');

            await this.enterParameterEngName('AutomationBuild');
            console.log('Entered Build English Name');

            await this.enterParameterAbrName('AutomationBuild');
            console.log('Entered Build Abbreviation Name');

            await this.clickOnCreate();
            console.log('Clicked on Create');

            await this.clickOnSubParameterBuild();
            console.log('Clicked on Sub Parameter Build');

            await this.clickAndFillCustomSubParameterFields();
            console.log('Filled Custom Sub Parameter Fields');

            await this.clickOnCrossIcon();
            console.log('Clicked on Cross Icon');

            await this.clickOnSubParameterTengent();
            console.log('Clicked on Sub Parameter Tengent');

            await this.clickAndFillCustomSubParameterFields();
            console.log('Filled Custom Sub Parameter Fields');

            await this.clickOnCrossIcon();
            console.log('Clicked on Cross Icon');

            await this.clickOnNextButton();
            console.log('Clicked on Next Button');

            await this.enterProbabilityFormula();
            console.log('Entered Probability Formula');

            await this.clickOnApplyButton();
            console.log('Clicked on Apply Button');

            await this.clickOnNext();
            console.log('Clicked on Next');

            await this.clickAndFillProbabilityFields();
            console.log('Filled Probability Fields');

            await this.clickOnFinish();
            console.log('Clicked on Finish');

            await this.clickOnSaveButton();
            console.log('Clicked on Save Button');

            await this.clickOnCancelButton();
            console.log('Clicked on Cancel Button');

            // =========================
            // IMPACT SUB PARAMETERS
            // =========================

            await this.clickOnImpact();
            console.log('Clicked on Impact');

            await this.clickOnSubparatmeterAdd();
            console.log('Clicked on Sub Parameter Add');

            await this.enterParameterEngName('AutomationWizard');
            console.log('Entered Wizard English Name');

            await this.enterParameterAbrName('AutomationWizard');
            console.log('Entered Wizard Abbreviation Name');

            await this.clickOnCreate();
            console.log('Clicked on Create');

            await this.clickOnSubparatmeterAdd();
            console.log('Clicked on Sub Parameter Add');

            await this.enterParameterEngName('AutomationQuaz');
            console.log('Entered Quaz English Name');

            await this.enterParameterAbrName('AutomationQuaz');
            console.log('Entered Quaz Abbreviation Name');

            await this.clickOnCreate();
            console.log('Clicked on Create');

            await this.clickOnSubParameterWizard();
            console.log('Clicked on Sub Parameter Wizard');

            await this.clickAndFillCustomSubParameterFields();
            console.log('Filled Custom Sub Parameter Fields');

            await this.clickOnCrossIcon();
            console.log('Clicked on Cross Icon');

            await this.clickOnSubParameterQuaz();
            console.log('Clicked on Sub Parameter Quaz');

            await this.clickAndFillCustomSubParameterFields();
            console.log('Filled Custom Sub Parameter Fields');

            await this.clickOnCrossIcon();
            console.log('Clicked on Cross Icon');

            await this.clickOnNextButton();
            console.log('Clicked on Next Button');

            await this.enterImpactFormula();
            console.log('Entered Impact Formula');

            await this.clickOnApplyButton();
            console.log('Clicked on Apply Button');

            await this.clickOnNext();
            console.log('Clicked on Next');

            await this.clickAndFillImpactFields();
            console.log('Filled Impact Fields');

            await this.clickOnFinish();
            console.log('Clicked on Finish');

            await this.clickOnSaveButton();
            console.log('Clicked on Save Button');

            await this.clickOnCancelButton();
            console.log('Clicked on Cancel Button');
}

    async clickOnCustomParameterAdd() {
        await this.CUSTOM_PARAMETER_ADD.waitFor({ state: 'visible' });
        await this.CUSTOM_PARAMETER_ADD.click();
    }

    async clickOnProbability() {
        await this.PROBABILITY.waitFor({ state: 'visible' });
        await this.PROBABILITY.click();
    }
    async clickOnSubparatmeterAdd() {
        await this.SUB_PARAMETER_ICON.waitFor({ state: 'visible' });
        await this.SUB_PARAMETER_ICON.click();
    }

    async clickOnSubParameterBuild() {
        await this.SUB_PARAMETER_BUILD.waitFor({ state: 'visible' });
        await this.SUB_PARAMETER_BUILD.click();
    }

    async clickOnSubParameterTengent() {
        await this.SUB_PARAMETER_TENGENT.waitFor({ state: 'visible' });
        await this.SUB_PARAMETER_TENGENT.click();
    }

    async clickAndFillCustomSubParameterFields() {
        const engName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const arbName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const value = ['1', '2', '3', '4', '5'];
        const colors = ["#242222ff", "#5113aeff", "#e5248b", "#20d54d", "#e32b16"];

        for (let i = 0; i < engName.length; i++) {
            await this.CUSTON_SUB_PARAMETER_ADD.click();
            await this.SUB_PARAMETER_ENG_LABEL.fill(engName[i]);
            await this.SUB_PARAMETER_ARB_LABEL.fill(arbName[i]);
            await this.VALUE_FIELD.fill(value[i]);
            await this.COLOR_FIELD.fill(colors[i]);
            await this.SUB_PARAMETER_SAVE.click();
        }
    }

    async enterProbabilityFormula() {
        await this.FORMULA_FIELD.fill('#Max(@AutomationTengent@AutomationBuild)');
    }

    async clickAndFillProbabilityFields() {
        const engName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const arbName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const value = ['1', '2', '3', '4', '5'];
        const colors = ["#242222ff", "#5113aeff", "#e5248b", "#20d54d", "#e32b16"];
        const maxValue = ['11', '12', '13', '14', '55']

        for (let i = 0; i < engName.length; i++) {
            await this.CUSTON_SUB_PARAMETER_ADD.click();
            await this.SUB_PARAMETER_ENG_LABEL.fill(engName[i]);
            await this.SUB_PARAMETER_ARB_LABEL.fill(arbName[i]);
            await this.VALUE_FIELD.fill(value[i]);
            await this.COLOR_FIELD.fill(colors[i]);
            await this.MAX_VALUE_FIELD.fill(maxValue[i]);
            await this.SUB_PARAMETER_SAVE.click();
        }
    }

    async clickOnCancelButton() {
        await this.CANCEL_BUTTON.waitFor({ state: 'visible' });
        await this.CANCEL_BUTTON.click();
    }

    async clickOnImpact() {
        await this.IMPACT.waitFor({ state: 'visible' });
        await this.IMPACT.click();
    }

    async clickOnSubParameterWizard() {
        await this.SUB_PARAMETER_WIZARD.waitFor({ state: 'visible' });
        await this.SUB_PARAMETER_WIZARD.click();
    }

    async clickOnSubParameterQuaz() {
        await this.SUB_PARAMETER_QUAZ.waitFor({ state: 'visible' });
        await this.SUB_PARAMETER_QUAZ.click();
    }

    async enterImpactFormula() {
        await this.FORMULA_FIELD.fill('#Max(@AutomationWizard@AutomationQuaz)');
    }

    async clickAndFillImpactFields() {
        const engName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const arbName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const value = ['1', '2', '3', '4', '5'];
        const colors = ["#242222ff", "#5113aeff", "#e5248b", "#20d54d", "#e32b16"];
        const maxValue = ['11', '12', '13', '14', '55']

        for (let i = 0; i < engName.length; i++) {
            await this.CUSTON_SUB_PARAMETER_ADD.click();
            await this.SUB_PARAMETER_ENG_LABEL.fill(engName[i]);
            await this.SUB_PARAMETER_ARB_LABEL.fill(arbName[i]);
            await this.VALUE_FIELD.fill(value[i]);
            await this.COLOR_FIELD.fill(colors[i]);
            await this.MAX_VALUE_FIELD.fill(maxValue[i]);
            await this.SUB_PARAMETER_SAVE.click();
        }
    }

    async clickOnMethodologyTab() {
        await this.page.waitForTimeout(1500);
        await this.METHODOLOGY_TAB.waitFor({ state: 'visible' });
        await this.METHODOLOGY_TAB.click();
    }

    async createMethodologyIfNotExists(methodologyName: string) {

        // Click on Methodology tab
        await this.clickOnMethodologyTab();

        // Wait for data loading
        await this.page.waitForTimeout(2000);

        // Methodology locator
        const methodology = this.page.locator(
            `//label[normalize-space()='${methodologyName}']`
        );

        // Check methodology exists or not
        if (await methodology.count() > 0) {

            console.log(`${methodologyName} already exists → skipping creation`);
            await this.checkMethodologyCheckbox();
        } else {

            console.log(
                `${methodologyName} not found → creating methodology`
            );

            // Click on Asset Classification tab
            //   =========================
            // ASSET CLASSIFICATION
            //  =========================
            // // Fill Sub Parameters
            await this.clickOnAssetClassificationTab();
            console.log('Clicked on Asset Classification Tab');

            await this.clickOnDeleteIconIfParameterTypeNotVisible();
            console.log('Handled delete icon if parameter type not visible');

            await this.clickOnSubParameterInigrity();
            console.log('Clicked on Sub Parameter Integrity');

            await this.clickAndFillSubParameterFields();
            console.log('Filled Sub Parameter Fields');

            await this.clickOnCrossIcon();
            console.log('Clicked on Cross Icon');

            await this.clickOnSubParameterAvailability();
            console.log('Clicked on Sub Parameter Availability');

            await this.clickAndFillSubParameterFields();
            console.log('Filled Sub Parameter Fields');

            await this.clickOnCrossIcon();
            console.log('Clicked on Cross Icon');

            await this.clickOnSubParameterConfidentialy();
            console.log('Clicked on Sub Parameter Confidentiality');

            await this.clickAndFillSubParameterFields();
            console.log('Filled Sub Parameter Fields');

            await this.clickOnCrossIcon();
            console.log('Clicked on Cross Icon');

            // Formula

            await this.clickOnNextButton();
            console.log('Clicked on Next Button');

            await this.enterFormula();
            console.log('Entered Formula');

            await this.clickOnApplyButton();
            console.log('Clicked on Apply Button');

            await this.clickOnNext();
            console.log('Clicked on Next');

            await this.clickAndFillAssertClarificationFields();
            console.log('Filled Asset Clarification Fields');

            await this.clickOnFinish();
            console.log('Clicked on Finish');

            await this.clickOnSaveButton();
            console.log('Clicked on Save Button');

            // =========================
            // VULNERABILITY
            // =========================

            await this.clickOnVulnerabilityTab();
            console.log('Clicked on Vulnerability Tab');

            await this.clickOnDeleteIfVulnerabilityParameterTextNotVisible();
            console.log('Handled vulnerability parameter delete');

            await this.clickAndFillVulnerabilitySubParameterFields();
            console.log('Filled Vulnerability Sub Parameter Fields');

            // =========================
            // THREAT
            // =========================

            await this.clickOnThreatTab();
            console.log('Clicked on Threat Tab');

            await this.clickOnDeleteIfParameterTextNotVisible();
            console.log('Handled threat parameter delete');

            await this.enterParameterEngName('Threat');
            console.log('Entered Threat English Name');

            await this.enterParameterAbrName('Threat');
            console.log('Entered Threat Abbreviation Name');

            await this.clickOnSetUpButton();
            console.log('Clicked on Setup Button');

            await this.clickOnConfirmButton();
            console.log('Clicked on Confirm Button');

            await this.clickAndFillThreatSubParameterFields();
            console.log('Filled Threat Sub Parameter Fields');

            // =========================
            // CUSTOM PARAMETERS
            // =========================

            await this.clickOnCustomParameterTab();
            console.log('Clicked on Custom Parameter Tab');

            await this.deleteCustonParameterIfExist();
            console.log('Deleted custom parameter if exists');

            // IMPACT

            await this.clickOnCustomParameterAdd();
            console.log('Clicked on Custom Parameter Add');

            await this.clickOnCompoundRadio();
            console.log('Clicked on Compound Radio');

            await this.enterParameterEngName('impact');
            console.log('Entered Impact English Name');

            await this.enterParameterAbrName('impact');
            console.log('Entered Impact Abbreviation Name');

            await this.clickOnSaveButton();
            console.log('Clicked on Save Button');

            // PROBABILITY

            await this.clickOnCustomParameterAdd();
            console.log('Clicked on Custom Parameter Add');

            await this.clickOnCompoundRadio();
            console.log('Clicked on Compound Radio');

            await this.enterParameterEngName('probability');
            console.log('Entered Probability English Name');

            await this.enterParameterAbrName('probability');
            console.log('Entered Probability Abbreviation Name');

            await this.clickOnSaveButton();
            console.log('Clicked on Save Button');

            // =========================
            // PROBABILITY SUB PARAMETERS
            // =========================

            await this.clickOnProbability();
            console.log('Clicked on Probability');

            await this.clickOnSubparatmeterAdd();
            console.log('Clicked on Sub Parameter Add');

            await this.enterParameterEngName('AutomationTengent');
            console.log('Entered Tengent English Name');

            await this.enterParameterAbrName('AutomationTengent');
            console.log('Entered Tengent Abbreviation Name');

            await this.clickOnCreate();
            console.log('Clicked on Create');

            await this.clickOnSubparatmeterAdd();
            console.log('Clicked on Sub Parameter Add');

            await this.enterParameterEngName('AutomationBuild');
            console.log('Entered Automation Build English Name');

            await this.enterParameterAbrName('AutomationBuild');
            console.log('Entered AutomationBuild Abbreviation Name');

            await this.clickOnCreate();
            console.log('Clicked on Create');

            await this.clickOnSubParameterBuild();
            console.log('Clicked on Sub Parameter Build');

            await this.clickAndFillCustomSubParameterFields();
            console.log('Filled Custom Sub Parameter Fields');

            await this.clickOnCrossIcon();
            console.log('Clicked on Cross Icon');

            await this.clickOnSubParameterTengent();
            console.log('Clicked on Sub Parameter Tengent');

            await this.clickAndFillCustomSubParameterFields();
            console.log('Filled Custom Sub Parameter Fields');

            await this.clickOnCrossIcon();
            console.log('Clicked on Cross Icon');

            await this.clickOnNextButton();
            console.log('Clicked on Next Button');

            await this.enterProbabilityFormula();
            console.log('Entered Probability Formula');

            await this.clickOnApplyButton();
            console.log('Clicked on Apply Button');

            await this.clickOnNext();
            console.log('Clicked on Next');

            await this.clickAndFillProbabilityFields();
            console.log('Filled Probability Fields');

            await this.clickOnFinish();
            console.log('Clicked on Finish');

            await this.clickOnSaveButton();
            console.log('Clicked on Save Button');

            await this.clickOnCancelButton();
            console.log('Clicked on Cancel Button');

            // =========================
            // IMPACT SUB PARAMETERS
            // =========================

            await this.clickOnImpact();
            console.log('Clicked on Impact');

            await this.clickOnSubparatmeterAdd();
            console.log('Clicked on Sub Parameter Add');

            await this.enterParameterEngName('AutomationWizard');
            console.log('Entered Wizard English Name');

            await this.enterParameterAbrName('AutomationWizard');
            console.log('Entered Wizard Abbreviation Name');

            await this.clickOnCreate();
            console.log('Clicked on Create');

            await this.clickOnSubparatmeterAdd();
            console.log('Clicked on Sub Parameter Add');

            await this.enterParameterEngName('AutomationQuaz');
            console.log('Entered Quaz English Name');

            await this.enterParameterAbrName('AutomationQuaz');
            console.log('Entered Quaz Abbreviation Name');

            await this.clickOnCreate();
            console.log('Clicked on Create');

            await this.clickOnSubParameterWizard();
            console.log('Clicked on Sub Parameter Wizard');

            await this.clickAndFillCustomSubParameterFields();
            console.log('Filled Custom Sub Parameter Fields');

            await this.clickOnCrossIcon();
            console.log('Clicked on Cross Icon');

            await this.clickOnSubParameterQuaz();
            console.log('Clicked on Sub Parameter Quaz');

            await this.clickAndFillCustomSubParameterFields();
            console.log('Filled Custom Sub Parameter Fields');

            await this.clickOnCrossIcon();
            console.log('Clicked on Cross Icon');

            await this.clickOnNextButton();
            console.log('Clicked on Next Button');

            await this.enterImpactFormula();
            console.log('Entered Impact Formula');

            await this.clickOnApplyButton();
            console.log('Clicked on Apply Button');

            await this.clickOnNext();
            console.log('Clicked on Next');

            await this.clickAndFillImpactFields();
            console.log('Filled Impact Fields');

            await this.clickOnFinish();
            console.log('Clicked on Finish');

            await this.clickOnSaveButton();
            console.log('Clicked on Save Button');

            await this.clickOnCancelButton();
            console.log('Clicked on Cancel Button');

            // =========================
            // CREATE METHODOLOGY
            // =========================

            await this.clickOnMethodologyTab();
            console.log('Clicked on Methodology Tab');

            await this.clickNewMethodology();
            console.log('Clicked on New Methodology');

            await this.enterParameterEngName('Automation_Methodology_QA');
            console.log('Entered Methodology English Name');

            await this.enterParameterAbrName('Automation_Methodology_QA');
            console.log('Entered Methodology Abbreviation Name');

            await this.enterMethodologyFormula();
            console.log('Entered Methodology Formula');

            await this.clickOnApplyButton();
            console.log('Clicked on Apply Button');

            await this.checkImpactCheckbox();
            console.log('Checked Impact Checkbox');

            await this.checkProbabilityCheckbox();
            console.log('Checked Probability Checkbox');

            await this.clickAndFillClarificationFields();
            console.log('Filled Clarification Fields');

            await this.moveSlider();
            console.log('Moved Slider');

            await this.clickOnCustomFormulaDropdown();
            console.log('Clicked on Custom Formula Dropdown');

            await this.enterCustomFormula();
            console.log('Entered Custom Formula');

            await this.clickOnApply();
            console.log('Clicked on Apply');

            await this.clickOnAddButton();
            console.log('Clicked on Add Button');

            await this.validateSuccessMsg();
            console.log('Validated Success Message');

            await this.checkMethodologyCheckbox();
            console.log('Checked Methodology Checkbox');

            await this.validateSuccessMsg();
            console.log(
                'Methodology setup completed successfully'
            );

            // Add your methodology creation steps here
        }
    }

    async clickOnDeleteIconIfParameterTypeNotVisible() {
        await this.page.waitForTimeout(2000);

        const isHidden = await this.PARAMETER_TYPE_TEXT.isHidden();

        if (isHidden) {
            await this.DELETE_ICON.click();
            await this.clickOnYesButton();
        }

        await this.clickOnCompoundRadio();
        await this.enterParameterEngName('Asset classification');
        await this.enterParameterAbrName('Asset classification');
        await this.clickOnSetUpButton();
        await this.clickOnAddParameterIcon();
        await this.enterParameterEngName(
            'Integrity'
        );

        await this.enterSubParameterAbrName(
            'Integrity'
        );

        await this.clickOnCreateParameter();

        // Availability

        await this.clickOnAddParameterIcon();

        await this.enterParameterEngName(
            'Availability'
        );

        await this.enterSubParameterAbrName(
            'Availability'
        );

        await this.clickOnCreateParameter();

        // Confidentiality

        await this.clickOnAddParameterIcon();

        await this.enterParameterEngName(
            'Confidentiality'
        );

        await this.enterSubParameterAbrName(
            'Confidentiality'
        );

        await this.clickOnCreateParameter();

    }
    async clickNewMethodology() {
        await this.NEW_METHODOLODY.click();
    }

    async enterMethodologyFormula() {
        await this.METHODOLOGY_FORMULA_FIELD.fill('#Max(@impact*@probability)');
    }

    async checkImpactCheckbox() {
        await this.IMPACT_CHECKBOX.waitFor({ state: 'visible' });
        await this.IMPACT_CHECKBOX.click();
    }

    async checkProbabilityCheckbox() {
        await this.PROBABILITY_CHECKBOX.waitFor({ state: 'visible' });
        await this.PROBABILITY_CHECKBOX.click();
    }

    async clickAndFillClarificationFields() {
        await this.page.waitForTimeout(1500);
        const engName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const arbName = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];
        const value = ['1', '6', '11', '16', '21'];
        const colors = ["#242222ff", "#5113aeff", "#e5248b", "#20d54d", "#e32b16"];
        const maxValue = ['5', '10', '15', '20', '25']
        const treatmentDaye = ['5', '10', '15', '20', '25']
        const revieweDays = ['5', '10', '15', '20', '25']

        for (let i = 0; i < engName.length; i++) {
            await this.page.waitForTimeout(1500);
            await this.ADD_CLARIFICATION_BUTTON.click();
            await this.SUB_PARAMETER_ENG_LABEL.fill(engName[i]);
            await this.SUB_PARAMETER_ARB_LABEL.fill(arbName[i]);
            await this.page.locator("//mat-label[normalize-space()='Color']").fill(colors[i]);
            await this.MIN_RISK_SCORE.fill(value[i]);
            await this.MAX_RISK_SCORE.fill(maxValue[i]);
            await this.TREATMENT_DUE_DAYS.fill(treatmentDaye[i]);
            await this.REVIEW_DAYS.fill(revieweDays[i]);
            await this.SUB_PARAMETER_SAVE.click();
        }
    }

    async moveSlider(): Promise<void> {
        const slider = this.SLIDER;

        await slider.hover();

        const box = await slider.boundingBox();

        if (!box) {
            throw new Error('Slider not visible');
        }

        // Start position (center of slider handle)
        const startX = box.x + box.width / 2;
        const startY = box.y + box.height / 2;

        // Move distance
        const endX = startX + 550;

        // Drag slider
        await this.page.mouse.move(startX, startY);
        await this.page.mouse.down();

        // Smooth movement
        await this.page.mouse.move(endX, startY, {
            steps: 20,
        });

        await this.page.mouse.up();

        await this.page.waitForTimeout(1500);
    }

    async clickOnCustomFormulaDropdown() {
        await this.page.waitForTimeout(2000);
        await this.CUSTOM_FORMULA_DROPDOWN.waitFor({ state: 'visible' });
        await this.CUSTOM_FORMULA_DROPDOWN.click();
        await this.CUSTOM_OPTION.click();
    }

    async enterCustomFormula() {
        await this.CUSTOM_FORMULA_FIELD.fill('#Max(@impact*@probability)');
    }

    async checkMethodologyCheckbox() {
        console.log("Selecting the Methodology checkbox");
        await this.METHODOLOGY_CHECKBOX.waitFor({ state: 'visible' });
        const isChecked = await this.METHODOLOGY_CHECKBOX.isChecked();

        if (!isChecked) {
            console.log("Methodology checkbox is not checked");
            await this.METHODOLOGY_CHECKBOX.check();
            await expect(this.METHODOLOGY_CHECKBOX).toBeChecked();
            console.log("Checkbox rechecked successfully");
        } else {
            console.log("Methodology checkbox is already checked — skiping now");
        }

    }

    async clickOnAssetClassificationTab() {
        let arrow = this.page.locator(`(//div[@class="mat-mdc-tab-header-pagination-chevron"])[1]`)
        await arrow.click();
        await this.ASSET_CLASIFICATION_TAB.waitFor({ state: 'visible' });
        await this.ASSET_CLASIFICATION_TAB.click();
    }

    async createIssueTypeIfNotExists(issueTypeName: string) {
    await this.page.waitForTimeout(2500);

    const table = this.page.locator('//table').first();

    // If table is not visible, create issue type directly
    if (!(await table.isVisible())) {
        console.log('Issue Type table is not visible → creating issue type');

        await this.clickOnNewIssueType();
        await this.enterIssueEngName(issueTypeName);
        await this.enterIssueArbName(issueTypeName);
        await this.clickOnAddButton();
        await this.validateSuccessMsg();

        console.log(`${issueTypeName} created successfully`);
        return;
    }

    // Table is visible, check if issue type already exists
    const issueType = this.page.locator(
        `//td/span[normalize-space()="${issueTypeName}"]`
    );

    if (await issueType.isVisible()) {
        console.log(`${issueTypeName} already exists → skipping creation`);
    } else {
        console.log(`${issueTypeName} not found → creating`);

        await this.clickOnNewIssueType();

        console.log('Clicked on New Issue Type');

        await this.enterIssueEngName(issueTypeName);

        console.log(`Entered English Name: ${issueTypeName}`);

        await this.enterIssueArbName(issueTypeName);

        console.log(`Entered Abbreviation Name: ${issueTypeName}`);

        await this.clickOnAddButton();

        console.log('Clicked on Add Button');

        await this.validateSuccessMsg();

        console.log('Validated Success Message');

        await expect(issueType).toBeVisible();

        console.log(`${issueTypeName} created successfully`);
    }
}

    async createUserIfNotExists(
        name: string
    ): Promise<void> {

        const userLocator = this.page.locator(
            `//span[normalize-space()="${name}"]`
        );

        // wait for page/data to load

        await this.page.waitForTimeout(2000);

        const isUserPresent = (await userLocator.count()) > 0;

        if (isUserPresent) {
            console.log(`${name} already exists → skipping creation`);
            return;
        }

        console.log(`${name} not found → creating`);

        // create new user
        await this.clickOnNewUserButton();
        await this.enterUserName(name);
        await this.enterFullName(name);
        await this.enterEmail();
        await this.selectDepartmentFromDropdown();
        await this.clickAndSelectRoles();
        await this.clickOnAddRoles();
        await this.clickOnCreate();

        // validate success message
        await this.validateSuccessMsg();

        // verify user is created
        await expect(userLocator).toBeVisible();
        console.log(`${name} created successfully`);
        await userLocator.click();
        await this.clickOnThreeDot();
        await this.clickOnActivateButton();
    }

    async clickOnActivateButton() {
        console.log("Clicking Activate button");
        await this.ACTIVATE_BUTTON_ASSERT.waitFor({ state: 'visible' });
        await this.ACTIVATE_BUTTON_ASSERT.click();
    }


    async clickOnThreeDot() {
        console.log('Clicking on THREE_DOT...');
        await this.page.waitForTimeout(3000);
        await this.THREE_DOT.waitFor({ state: 'visible' });
        await this.THREE_DOT.click();
        console.log('THREE_DOT clicked successfully');
    }
    async createDepartmentIfNotExists(
        deptName: string
    ): Promise<void> {
        await this.page.waitForTimeout(2000);
        const departmentLocator = this.page.locator(
            `//a[normalize-space()="${deptName}"]`
        );

        // wait for page/data to load
        const isDepartmentPresent = (await departmentLocator.count()) > 0;

        if (isDepartmentPresent) {
            console.log(`${deptName} already exists → skipping creation`);
            return;
        }

        console.log(`${deptName} not found → creating`);

        // create new department
        await this.clickOnNewDepartmentButton();
        await this.enterDeptEngName(deptName);
        await this.enterDeptArbName(deptName);
        await this.clickOnCreateButton();

        // validate success message
        await this.validateSuccessMsg();

        // verify department is created
        await expect(departmentLocator).toBeVisible();

        console.log(`${deptName} created successfully`);
    }
    async createExternalUserIfNotExists(
        userName: string,
        userEmail: string,
        userTitle: string = 'Automation User Title'
    ): Promise<void> {

        await this.page.waitForTimeout(2000);
        const userLocator = this.page.locator(
            `//td[normalize-space()="${userEmail}"]`
        );

        // wait for page/data to load


        const isUserPresent = (await userLocator.count()) > 0;

        if (isUserPresent) {
            console.log(`${userEmail} already exists → skipping creation`);
            return;
        }

        console.log(`${userEmail} not found → creating user`);

        // create new user
        await this.clickOnAddUsers();
        await this.enterUserFullName(userName);
        await this.enterUserEmail(userEmail);
        await this.enterUserTitle(userTitle);
        await this.clickOnCreateUser();

        // validate success message
        await this.validateSuccessMsg();

        // verify user is created
        await expect(userLocator).toBeVisible();

        console.log(`${userEmail} created successfully`);
    }    
}