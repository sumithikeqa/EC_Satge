import { Page, BrowserContext, Locator } from '@playwright/test';
import { testConfig } from '../../testConfig';

export class ECLoginPage {
  readonly page: Page;
  readonly context: BrowserContext;

  readonly USERNAME_EDITBOX: Locator;
  readonly PASSWORD_BOX: Locator;
  readonly LOGIN_BUTTON: Locator;
  readonly WORK_EMAIL: Locator;
  readonly SUBMIT_BUTTON: Locator;
  readonly LOGO: Locator;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;

    this.USERNAME_EDITBOX = page.getByLabel('username');
    this.PASSWORD_BOX = page.getByPlaceholder('password');
    this.LOGIN_BUTTON = page.getByRole('button', { name: 'Login' });
    //this.WORK_EMAIL = page.locator("//input[@placeholder = 'Your Work Email']");
    this.WORK_EMAIL = page.locator("//input[@placeholder = 'Your username']");
    this.SUBMIT_BUTTON = page.locator("//input[@type= 'submit']");
    this.LOGO = page.locator("//div[text()=' Executive Dashboard ']");
    this.LOG = page.locator("//div[text()=' Executive Dashboard ']");
  }

//   async navigateToURL(): Promise<void> {
//     await this.page.goto(`${testConfig.baseURL}/Login`);
//   }

  // async login(): Promise<void> {
  //   await this.USERNAME_EDITBOX.fill(testConfig.validUserName);
  //   await this.PASSWORD_BOX.fill(testConfig.validPassword);
  //   await this.LOGIN_BUTTON.click();
  // }
}
