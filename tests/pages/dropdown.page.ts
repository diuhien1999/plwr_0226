import { expect, type Locator, type Page } from '@playwright/test';

export class DropdownPage {
    readonly page: Page ;
    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/dropdown'); 
    }

    async selectOption1() {
        await this.page.locator(`#dropdown`).selectOption({ label: 'Option 1' });
    }

    async isOption1Selected() {
        return await this.page.locator(`#dropdown > option:checked`).textContent();
    }
}