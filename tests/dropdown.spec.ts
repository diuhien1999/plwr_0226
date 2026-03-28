// import { test, expect } from '@playwright/test';


// Open browser

// Navigate to https://the-internet.herokuapp.com/dropdown

// Select "option 1"

// Validate "option 1" is selected

// test('Dropdown', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/dropdown');
    
//     await page.locator(`#dropdown`).selectOption({ label: 'Option 1' });
//     // await expect(page.locator(`#dropdown`)).toHaveValue('1');
//     await expect(page.locator(`#dropdown > option:checked`)).toHaveText('Option 1');
// });

// test('Dropdown with multiple options', async ({ page }) => {
//     await page.goto('https://output.jsbin.com/osebed/2');

//     await page.locator('#fruits').selectOption(['apple', 'banana']);
//     await expect(page.locator('#fruits > option:checked')).toHaveText(['Banana', 'Apple' ]);

//     await page.locator('#fruits').selectOption([]);
//     await expect(page.locator('#fruits > option:checked')).toHaveText([]);
// });

import { test, expect } from './fixtures/the-internet.fixture';

test('verify able to select option from dropdown', async ({dropdownPage}) =>{
    await dropdownPage.goto();
    await dropdownPage.selectOption1(); 
    const selectedOptionText = await dropdownPage.isOption1Selected();
    expect(selectedOptionText).toBe('Option 1');
});

