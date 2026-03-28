import { expect, type Locator, type Page } from '@playwright/test';

export class ContextClickPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/context_menu');
    }

    async rightClickElement() {
        //     const box = page.locator('#hot-spot');
//     await box.click({ button: 'right' });
        const box = this.page.locator('#hot-spot');
        await box.click({ button: 'right' });
        // await this.page.locator('#hot-spot').click({ button: 'right' });
    }

    async waitForAlertAndGetMessage() {
        return new Promise<string>((resolve) => {
            this.page.on('dialog', async (dialog) => {
                const message = await dialog.message();
                await dialog.dismiss();
                resolve(message);
            });
        });
    }
}