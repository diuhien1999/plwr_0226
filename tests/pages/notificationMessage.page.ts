import { expect, type Locator, type Page } from '@playwright/test';

export class NotificationMessagePage {
    readonly page: Page;
    readonly notificationArea: Locator;
    readonly closeButton: Locator;
    readonly clickHereLink: Locator;

    constructor(page: Page) {
        this.page = page;
        // Use more specific selector for notification div with id="flash"
        this.notificationArea = page.locator('#flash');
        this.closeButton = page.getByRole('link', { name: '×' });
        this.clickHereLink = page.getByRole('link', { name: 'Click here' });
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/notification_message_rendered');
    }

    async loadNewNotification() {
        await this.clickHereLink.click();
        // Wait for notification to be visible
        await this.notificationArea.waitFor({ state: 'visible', timeout: 5000 }).catch(() => null);
    }

    async isNotificationVisible() {
        return await this.notificationArea.isVisible();
    }

    async getNotificationText() {
        const text = await this.notificationArea.textContent();
        return text?.trim() || '';
    }

    async isCloseButtonVisible() {
        return await this.closeButton.isVisible();
    }

    async closeNotification() {
        await this.closeButton.click();
        // Wait for notification to disappear
        await this.notificationArea.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => null);
    }

    async isHeadingVisible() {
        const heading = this.page.getByRole('heading', { name: 'Notification Message', level: 3 });
        return await heading.isVisible();
    }

    async isClickHereLinkVisible() {
        return await this.clickHereLink.isVisible();
    }
}
