// import { test, expect } from '@playwright/test';

// test('Checkboxes', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/checkboxes');  

//     await page.getByRole('checkbox').first().check();
//     await expect(page.getByRole('checkbox').first()).toBeChecked();

//     await page.getByRole('checkbox').nth(1).check();
//     await expect(page.getByRole('checkbox').nth(1)).toBeChecked();
// });

import { test, expect } from './fixtures/the-internet.fixture';

test('verify able to check the checkbox', async ({checkboxesPage}) =>{
    await checkboxesPage.goto();

    await checkboxesPage.checkFirstCheckbox(); // accessibility role
    await checkboxesPage.checkSecondCheckbox(); // accessibility role

    expect(await checkboxesPage.isFirstCheckboxChecked()).toBe(true);
    expect(await checkboxesPage.isSecondCheckboxChecked()).toBe(true);
});