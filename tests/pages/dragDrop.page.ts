import { expect, type Locator, type Page } from '@playwright/test';

export class DragDropPage {
    readonly page: Page ;
    constructor(page: Page) {
        this.page = page;
    }   

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    }

    async dragAndDrop() {
        await this.page.locator('#column-a').dragTo(this.page.locator('#column-b'));
    }

    async getColumnAText() {
        return await this.page.locator('#column-a').textContent();
    }
}