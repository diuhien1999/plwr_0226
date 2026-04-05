import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { CheckboxesPage } from '../pages/checkboxes.page';
import { TablePage } from '../pages/table.page';
import { ContextClickPage } from '../pages/contextClick.page'; 
import { DragDropPage } from '../pages/dragDrop.page';
import { DropdownPage } from '../pages/dropdown.page';
import { NotificationMessagePage } from '../pages/notificationMessage.page';

type TheInternetFixtures = {
    loginPage: LoginPage,
    checkboxesPage: CheckboxesPage,
    tablePage: TablePage,
    dropdownPage: DropdownPage,
    dragDropPage: DragDropPage, 
    contextClickPage: ContextClickPage,
    notificationMessagePage: NotificationMessagePage
}

export const test = base.extend<TheInternetFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    checkboxesPage: async ({ page }, use) => {
        const checkboxesPage = new CheckboxesPage(page);
        await use(checkboxesPage);
    },
    tablePage: async ({ page }, use) => {
        const tablePage = new TablePage(page);
        await use(tablePage);
    },
    contextClickPage: async ({ page }, use) => {
        const contextClickPage = new ContextClickPage(page);
        await use(contextClickPage);
    },
    dragDropPage: async ({ page }, use) => {
        const dragDropPage = new DragDropPage(page);
        await use(dragDropPage);
    },
    dropdownPage: async ({ page }, use) => {
        const dropdownPage = new DropdownPage(page);
        await use(dropdownPage);   
    },
    notificationMessagePage: async ({ page }, use) => {
        const notificationMessagePage = new NotificationMessagePage(page);
        await use(notificationMessagePage);
    }
});

export { expect } from '@playwright/test';