import { expect, Locator, Page, BrowserContext } from '@playwright/test';

export class WidgetsPage {
    readonly page: Page;
    readonly context: BrowserContext;


    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }
}