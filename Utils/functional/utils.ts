import fs from 'fs';
import path from 'path';
import { Page } from 'playwright';

export class Utils {
    static async generateRandomString(length: number): Promise<string> {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }

    static async isSortedByWay(words: string[], sortWay: "asc" | "desc"): Promise<boolean> {
        for (let i = 0; i < words.length - 1; i++) {
            if (sortWay === "asc" && new Date(parseFloat(words[i].toLowerCase())) > new Date(parseFloat(words[i + 1].toLowerCase()))) {
                return false; // Not ascending
            }
            if (sortWay === "desc" && new Date(parseFloat(words[i].toLowerCase())) < new Date(parseFloat(words[i + 1].toLowerCase()))) {
                return false; // Not descending
            }
        }
        return true; // Sorted according to sortWay
    };

    static async uploadFile(page: Page, selector: string, relativePathFromProjectRoot: string): Promise<void> {
        // Build path WITHOUT any drive letter (relative to project root)
        const filePath = path.join(process.cwd(), relativePathFromProjectRoot);

        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        console.log("Resolved File Path:", filePath);

        let input;

        // Detect if XPath
        if (selector.startsWith('//') || selector.startsWith('(')) {
            input = await page.$(selector);
        } else {
            await page.waitForSelector(selector, { state: 'attached' });
            input = await page.$(selector);
        }

        if (!input) {
            console.log(`Cannot find input element using selector: ${selector}`);
        }

        await input.setInputFiles(filePath);
    }

    /**
     * Click the first enabled date (1 → 30)
     */
    static async clickFirstEnabledDate(page: Page) {
        const cells = page.locator(
            '//td[@role="gridcell" and not(.//span[contains(@class,"is-other-month")])]'
        );

        const count = await cells.count();

        for (let i = 0; i < count; i++) {
            const cell = cells.nth(i);

            // Skip hidden cells
            if (!(await cell.isVisible())) continue;

            // Some datepickers use aria-disabled instead of class
            const ariaDisabled = await cell.getAttribute('aria-disabled');
            if (ariaDisabled === 'true') continue;
            await cell.waitFor({ state: 'visible' });
            await cell.click();
            console.log('Clicked first enabled date');
            return;
        }

        throw new Error('No enabled date found in current month');
    }


    /**
     * Click the last enabled date (31 → 1)
     */
    static async clickLastEnabledDate(page: Page) {
        const cells = page.locator(
            '//td[@role="gridcell" and not(.//span[contains(@class,"is-other-month")])]'
        );

        const count = await cells.count();

        for (let i = count - 1; i >= 0; i--) {
            const cell = cells.nth(i);

            if (!(await cell.isVisible())) continue;

            const ariaDisabled = await cell.getAttribute('aria-disabled');
            if (ariaDisabled === 'true') continue;
            await cell.waitFor({ state: 'visible' });
            await cell.click();
            console.log('Clicked last enabled date');
            return;
        }

        throw new Error('No enabled date found in current month');
    }

    static async clickSecondLastEnabledDate(page: Page) {
    const cells = page.locator(
        '//td[@role="gridcell" and not(.//span[contains(@class,"is-other-month")])]'
    );

    const count = await cells.count();
    let enabledFound = 0;

    for (let i = count - 1; i >= 0; i--) {
        const cell = cells.nth(i);

        if (!(await cell.isVisible())) continue;

        const ariaDisabled = await cell.getAttribute('aria-disabled');
        if (ariaDisabled === 'true') continue;

        enabledFound++;

        // Click the 2nd enabled date from the end
        if (enabledFound === 2) {
            await cell.waitFor({ state: 'visible' });
            await cell.click();
            console.log('Clicked second last enabled date');
            return;
        }
    }

    throw new Error('Less than 2 enabled dates found in current month');
}

    static async selectDateAfterFiveDays(page: Page) {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 5);

        const targetDay = targetDate.getDate().toString();

        // Locator for current month enabled date cell matching the target day
        const cell = page.locator(
            `//td[@role="gridcell"
            and not(.//span[contains(@class,'is-other-month')])
            and normalize-space(.)='${targetDay}'
            and @aria-disabled='false']`
        );

        if (await cell.count() === 0) {
            throw new Error(`Date ${targetDay} is not available or disabled`);
        }
        await cell.waitFor({state:'visible'});
        await cell.first().click();
        console.log(`Clicked date: ${targetDay}`);
    }


}