// import { test , expect } from './fixtures/the-internet.fixture';

// test('should successfully login with valid credentials', async ({loginPage }) =>{
//   await loginPage.goto();
//   await loginPage.login('tomsmith', 'SuperSecretPassword!');

//   await expect(await loginPage.getSuccessFlashMessage())
//   .toContainText('You logged into a secure area!'); 
  
//   await expect(await loginPage.getWelcomeMessage())
//   .toContainText('Welcome to the Secure Area. When you are done click logout below.');
// });


// import { expect, type Locator, type Page } from '@playwright/test';

// export class CheckboxesPage {
//     readonly page: Page;
//     constructor(page: Page) {
//         this.page = page;
//     }

//     async goto() {
//         await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
//     }

//     async checkFirstCheckbox() {
//         await this.page.getByRole('checkbox').first().check();
//     }

//     async checkSecondCheckbox() {
//         await this.page.getByRole('checkbox').nth(1).check();
//     }

//     async isFirstCheckboxChecked() {
//         return await this.page.getByRole('checkbox').first().isChecked();
//     }

//     async isSecondCheckboxChecked() {
//         return await this.page.getByRole('checkbox').nth(1).isChecked();
//     }
// }


// import { test as base } from '@playwright/test';
// import { LoginPage } from '../pages/login.page';
// import { CheckboxesPage } from '../pages/checkboxes.page';

// type TheInternetFixtures = {
//     loginPage: LoginPage,
//     checkboxesPage: CheckboxesPage
// }

// export const test = base.extend<TheInternetFixtures>({
//     loginPage: async ({ page }, use) => {
//         const loginPage = new LoginPage(page);
//         await use(loginPage);
//     },
//     checkboxesPage: async ({ page }, use) => {
//         const checkboxesPage = new CheckboxesPage(page);
//         await use(checkboxesPage);
//     }
// });

// export { expect } from '@playwright/test';

// import { test, expect } from './fixtures/the-internet.fixture';

// test('verify able to check the checkbox', async ({checkboxesPage}) =>{
//     await checkboxesPage.goto();

//     await checkboxesPage.checkFirstCheckbox(); // accessibility role
//     await checkboxesPage.checkSecondCheckbox(); // accessibility role

//     expect(await checkboxesPage.isFirstCheckboxChecked()).toBe(true);
//     expect(await checkboxesPage.isSecondCheckboxChecked()).toBe(true);
// });


// import {test,expect} from './fixtures/the-internet.fixture';

// test.describe('table1 tests', () => {
//     test.beforeEach(async ({ tablePage }) => {
//         await tablePage.goto();
//         await tablePage.getTable1Data();
//     });

//     test('verify fullname of max due person', async ({ tablePage }) => {
//         expect(await tablePage.getFullNameOfMaxDuePerson()).toBe('Jason Doe');
//     });

//     test('verify min due person full name', async ({ tablePage }) => {
//         expect(await tablePage.getFullNamesOfMinDuePersons()).toEqual([ 'John Smith','Tim Conway']);
//     }); 
// });




// import { expect, type Locator, type Page } from '@playwright/test';

// type TableData = { firstName: string; lastName: string; due: string };
// export class TablePage {
//     readonly page: Page;
//     table1Data: TableData[];

//     constructor(page: Page) {
//         this.page = page;
//         this.table1Data = [];
//     }

//     async goto() {
//         await this.page.goto('https://the-internet.herokuapp.com/tables');
//     }

//     async getTable1Data(){
//         const table = this. page.locator('#table1');
//         const rows = table.locator('tbody tr');

//         this.table1Data = await rows.evaluateAll((rows) => {
//             return rows.map((row) => {
//                 const cells = row.querySelectorAll('td');
//                 return {
//                     firstName: cells[1].innerText,
//                     lastName: cells[0].innerText,       
//                     due: cells[3].innerText.replace('$', ''),
//                 };
//             });
//         });
//     }

//     async getFullNameOfMaxDuePerson() {
//         // find the max due value
//         this.table1Data.sort((a, b) => parseFloat(b.due) - parseFloat(a.due));
//         const maxDueValue = this.table1Data[0].due;
//         const maxDuePerson = this.table1Data.find(person => person.due === maxDueValue);
//         const firstName = maxDuePerson?.firstName;
//         const lastName = maxDuePerson?.lastName;    
//         return `${firstName} ${lastName}`;
//     }

//     async getFullNamesOfMinDuePersons() {
//         // find the min due value
//         this.table1Data.sort((a, b) => parseFloat(a.due) - parseFloat(b.due));
//         const minDueValue = this.table1Data[0].due;
//         const minDuePersons = this.table1Data.filter(person => person.due === minDueValue);
//         return minDuePersons.map(person => `${person.firstName} ${person.lastName}`);
//     }

// }


// import { test as base } from '@playwright/test';
// import { LoginPage } from '../pages/login.page';
// import { CheckboxesPage } from '../pages/checkboxes.page';
// import { TablePage } from '../pages/table.page';

// type TheInternetFixtures = {
//     loginPage: LoginPage,
//     checkboxesPage: CheckboxesPage,
//     tablePage: TablePage
// }

// export const test = base.extend<TheInternetFixtures>({
//     loginPage: async ({ page }, use) => {
//         const loginPage = new LoginPage(page);
//         await use(loginPage);
//     },
//     checkboxesPage: async ({ page }, use) => {
//         const checkboxesPage = new CheckboxesPage(page);
//         await use(checkboxesPage);
//     },
//     tablePage: async ({ page }, use) => {
//         const tablePage = new TablePage(page);
//         await use(tablePage);
//     }
// });

// export { expect } from '@playwright/test';