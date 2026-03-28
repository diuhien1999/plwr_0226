// import {test,expect} from '@playwright/test'

// test('verify fullname of max due person', async ({page}) =>{

//     await page.goto('https://the-internet.herokuapp.com/tables');

//     // const tableContents =  await page.locator("#table1 tbody tr td").allTextContents();
//     // //print table content
//     // console.log(tableContents);

//     const dueAmounts = await page.locator("#table1 tbody tr td:nth-child(4)").allTextContents();
//     // console.log(dueAmounts);
//     //Give array  [ '$50.00', '$51.00', '$100.00', '$50.00' ]  find the index of item has max value?
//     const maxDueValue = Math.max(...dueAmounts.map(amount => parseFloat(amount.replace('$', ''))));
//     const maxDueIndex = dueAmounts.indexOf('$' + maxDueValue.toFixed(2));
//     // console.log(maxDueIndex);
//     const firstName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(2)`).textContent();
//     const lastName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(1)`).textContent();
//     // console.log(`Full name of person with max due: ${firstName} ${lastName}`);
//     expect(`${firstName} ${lastName}`).toBe('Jason Doe');

// });

// test('verify fullname of max due person fixed', async ({page}) =>{

//   await page.goto('https://the-internet.herokuapp.com/tables');
//     const table = await page.locator('#table1');
//     const rows = await table.locator('tbody tr');

//     const tableData = await rows.evaluateAll((rows) => {
//         return rows.map((row) => {
//             const cells = row.querySelectorAll('td');
//             return {
//                 firstName: cells[0].innerText,
//                 lastName: cells[1].innerText,       
//                 due: cells[3].innerText.replace('$', ''),
//             };
//         });
//     });
//     console.log(tableData);
//     // find the max due value
//     tableData.sort((a, b) => parseFloat(b.due) - parseFloat(a.due));
//     const maxDueValue = tableData[0].due;
//     const maxDuePerson = tableData.find(person => person.due === maxDueValue);
//     const firstName = maxDuePerson?.firstName;
//     const lastName = maxDuePerson?.lastName;    
//     expect(`${firstName} ${lastName}`).toBe('Jason Doe');
// });



// // test('verify fullname of max due person', async ({page}) =>{

// //   await page.goto('https://the-internet.herokuapp.com/tables');
// //     const table = await page.locator('#table1');
// //     const rows = await table.locator('tbody tr');

// //     const tableData = await rows.evaluateAll((rows) => {
// //         return rows.map((row) => {
// //             const cells = row.querySelectorAll('td');
// //             return {
// //                 firstName: cells[1].innerText,
// //                 lastName: cells[0].innerText,       
// //                 due: cells[3].innerText.replace('$', ''),
// //             };
// //         });
// //     });
// //     console.log(tableData);
// //     // find the max due value
// //     tableData.sort((a, b) => parseFloat(b.due) - parseFloat(a.due));
// //     const maxDueValue = tableData[0].due;
// //     const maxDuePerson = tableData.find(person => person.due === maxDueValue);
// //     const firstName = maxDuePerson?.firstName;
// //     const lastName = maxDuePerson?.lastName;    
// //     expect(`${firstName} ${lastName}`).toBe('Jason Doe');
// // });

// test('verify min due person full name fixed ver 2', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/tables');
//     const table = await page.locator('#table1');
//     const rows = await table.locator('tbody tr');

//     const tableData = await rows.evaluateAll((rows) => {
//         return rows.map((row) => {
//             const cells = row.querySelectorAll('td');
//             return {
//                 firstName: cells[1].innerText,
//                 lastName: cells[0].innerText,       
//                 due: cells[3].innerText.replace('$', ''),
//             };
//         });
//     });
//     console.log(tableData);
//     // find the min due value
//     tableData.sort((a, b) => parseFloat(a.due) - parseFloat(b.due));
//     const minDueValue = tableData[0].due;
//     const minDuePersons = tableData.filter(person => person.due === minDueValue);
//     const fullNames = minDuePersons.map(person => `${person.firstName} ${person.lastName}`);
//     expect(fullNames).toEqual([ 'John Smith','Tim Conway']);
//    })
// // verify fullname of min due person are ["john smith", "Tim Conway"]

// test('verify fullname of person with max due practice', async ({page}) =>{
//     //go to page
//     // get all due amount in array
//     // find max value and index of max value
//     // get first name and last name using index of max value

//     await page.goto('https://the-internet.herokuapp.com/tables');

//     const allDueAmounts = await page.locator("#table1 tbody tr td:nth-child(4)").allTextContents();
//     //query table content and get all due amount in array, in this array fields 'Due' is in 4th column, so we use nth-child(4) to get all due amount
    
//     const maxDueValue = Math.max(...allDueAmounts.map(amount => parseFloat(amount.replace('$', ''))));
//     //find max value from array, we use map to remove $ sign and convert string to number using parseFloat, then we use Math.max to find max value
    
//     const maxDueIndex = allDueAmounts.indexOf('$' + maxDueValue.toFixed(2));
//     //find index of max value, we use indexOf to find index of max value in array, we add $ sign and convert number to string with 2 decimal places using toFixed(2) because in array due amount is in format '$xx.xx'
    
//     const firstName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(2)`).textContent();
//     const lastName = await page.locator(`#table1 tbody tr:nth-child(${maxDueIndex + 1}) td:nth-child(1)`).textContent();
//     //get first name and last name using index of max value, we use nth-child with index+1 because nth-child starts from 1, and we use td:nth-child(2) to get first name and td:nth-child(1) to get last name
//     expect(`${firstName} ${lastName}`).toBe('Jason Doe');
// });

// test('verify fullname of persons with min due study', async ({page}) =>{
//     // go to page
//     // get all due amount in array
//     // find min value and index of min value
//     // get first name and last name using index of min value

//     await page.goto('https://the-internet.herokuapp.com/tables');

//     const allDueAmounts = await page.locator("#table1 tbody tr td:nth-child(4)").allTextContents();
    
//     const minDueValue = Math.min(...allDueAmounts.map(amount => parseFloat(amount.replace('$', ''))));
//     const minDueIndex = allDueAmounts.indexOf('$' + minDueValue.toFixed(2));
    
//     const firstName = await page.locator(`#table1 tbody tr:nth-child(${minDueIndex + 1}) td:nth-child(2)`).textContent();
//     const lastName = await page.locator(`#table1 tbody tr:nth-child(${minDueIndex + 1}) td:nth-child(1)`).textContent();
//     expect(`${firstName} ${lastName}`).toBe('Timothy Mooney');
// });

// test('verify fullname of person with min due fix', async ({ page }) => {

//   await page.goto('https://the-internet.herokuapp.com/tables');

//   const allDueAmounts = await page.locator("#table1 tbody tr td:nth-child(4)").allTextContents();

//   const dueNumbers = allDueAmounts.map(amount => parseFloat(amount.replace('$', '')));

//   const minDueValue = Math.min(...dueNumbers);

//   const minIndexes = dueNumbers
//     .map((value, index) => value === minDueValue ? index : -1)
//     .filter(index => index !== -1);

//   const names = [];

//   for (const index of minIndexes) {
//     const firstName = await page.locator(`#table1 tbody tr:nth-child(${index + 1}) td:nth-child(2)`).textContent();
//     const lastName = await page.locator(`#table1 tbody tr:nth-child(${index + 1}) td:nth-child(1)`).textContent();
//     names.push(`${firstName} ${lastName}`);
//   }

//   expect(names).toEqual(expect.arrayContaining(['John Smith', 'Tim Conway']));

// });

// //use json array
// test('verify min due person full name', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/tables');
//     const table = await page.locator('#table1');
//     const rows = await table.locator('tbody tr');

//     const tableData = await rows.evaluateAll((rows) => {
//         return rows.map((row) => {
//             const cells = row.querySelectorAll('td');
//             return {
//                 firstName: cells[0].innerText,
//                 lastName: cells[1].innerText,       
//                 due: cells[3].innerText.replace('$', ''),
//             };
//         });
//     });
//     console.log(tableData);
//     // find the min due value
//     tableData.sort((a, b) => parseFloat(a.due) - parseFloat(b.due));
//     const minDueValue = tableData[0].due;
//     const minDuePersons = tableData.filter(person => person.due === minDueValue);
//     const fullNames = minDuePersons.map(person => `${person.firstName} ${person.lastName}`);
//     expect(fullNames).toEqual(['John Smith', 'Tim Conway']);
//    });



// test.describe('table1 tests', () => {
//     let tableData: { firstName: string; lastName: string; due: string }[];

//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://the-internet.herokuapp.com/tables');
//         const table = await page.locator('#table1');
//         const rows = await table.locator('tbody tr');

//         tableData = await rows.evaluateAll((rows) => {
//             return rows.map((row) => {
//                 const cells = row.querySelectorAll('td');
//                 return {
//                     firstName: cells[1].innerText,
//                     lastName: cells[0].innerText,       
//                     due: cells[3].innerText.replace('$', ''),
//                 };
//             });
//         });
//     });

//     test('verify fullname of max due person', async () => {
//         // find the max due value
//         tableData.sort((a, b) => parseFloat(b.due) - parseFloat(a.due));
//         const maxDueValue = tableData[0].due;
//         const maxDuePerson = tableData.find(person => person.due === maxDueValue);
//         const firstName = maxDuePerson?.firstName;
//         const lastName = maxDuePerson?.lastName;    
//         expect(`${firstName} ${lastName}`).toBe('Jason Doe');
//     });

//     test('verify min due person full name', async () => {
//         // find the min due value
//         tableData.sort((a, b) => parseFloat(a.due) - parseFloat(b.due));
//         const minDueValue = tableData[0].due;
//         const minDuePersons = tableData.filter(person => person.due === minDueValue);
//         const fullNames = minDuePersons.map(person => `${person.firstName} ${person.lastName}`);
//         expect(fullNames).toEqual([ 'John Smith','Tim Conway']);
//     }); 
// });


import {test,expect} from './fixtures/the-internet.fixture';

test.describe('table1 tests', () => {
    test.beforeEach(async ({ tablePage }) => {
        await tablePage.goto();
        await tablePage.getTable1Data();
    });

    test('verify fullname of max due person', async ({ tablePage }) => {
        expect(await tablePage.getFullNameOfMaxDuePerson()).toBe('Jason Doe');
    });

    test('verify min due person full name', async ({ tablePage }) => {
        expect(await tablePage.getFullNamesOfMinDuePersons()).toEqual([ 'John Smith','Tim Conway']);
    }); 
});