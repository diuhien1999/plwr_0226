// import { test, expect } from '@playwright/test';
// import { LoginPage } from './pages/login.page';

// test('should successfully login with valid credentials', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   //arrange
//   loginPage.goto();
//   //actions
//   loginPage.login('tomsmith', 'SuperSecretPassword!');
//   // //assertions
//   await expect(await loginPage.getSuccessFlashMessage())
//   .toContainText('You logged into a secure area!'); 
  
//   await expect(await loginPage.getWelcomeMessage())
//   .toContainText('Welcome to the Secure Area. When you are done click logout below.');
// });


import { test , expect } from './fixtures/the-internet.fixture';

test('should successfully login with valid credentials', async ({loginPage }) =>{
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(await loginPage.getSuccessFlashMessage())
  .toContainText('You logged into a secure area!'); 
  
  await expect(await loginPage.getWelcomeMessage())
  .toContainText('Welcome to the Secure Area. When you are done click logout below.');
});