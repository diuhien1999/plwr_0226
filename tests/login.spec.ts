import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
});

test('locator with get label', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
});

test('locator with get CSS & XPath', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').click();
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').click();
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('//button[@type="submit"]').click();
});

test('locator with get ID (CSS)', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').click();
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').click();
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('#login').click();
});

test('locator ', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('input[name="username"]').fill('tomsmith');
    await page.locator('input[name="password"]').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
});

test('locator by xpath', async ({ page }) => {
    //relative path
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('//input[@name="username"]').fill('tomsmith');
    await page.locator('//input[@name="password"]').fill('SuperSecretPassword!');
    await page.locator('//button[@type="submit"]').click();
});


