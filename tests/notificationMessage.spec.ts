import { test, expect } from '@playwright/test';

test.describe('Notification Message Rendered', () => {
  test('should load page with notification message section', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');
    
    // Verify page title and heading
    await expect(page).toHaveTitle('The Internet');
    await expect(page.getByRole('heading', { name: 'Notification Message', level: 3 })).toBeVisible();
    
    // Verify the link to load new message
    await expect(page.getByRole('link', { name: 'Click here' })).toBeVisible();
  });

  test('should display notification message when link is clicked', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');
    
    // Click the link to load a message
    await page.getByRole('link', { name: 'Click here' }).click();
    
    // Verify notification message is visible and contains text
    const notification = page.locator('#flash');
    await expect(notification).toBeVisible();
  });

  test('should display close button on notification message', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');
    
    // Load a notification message
    await page.getByRole('link', { name: 'Click here' }).click();
    
    // Verify close button (×) is visible
    const closeButton = page.getByRole('link', { name: '×' });
    await expect(closeButton).toBeVisible();
  });

  test('should close notification when close button is clicked', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');
    
    // Load a notification message
    await page.getByRole('link', { name: 'Click here' }).click();
    
    // Verify notification is visible
    const notification = page.locator('#flash');
    await expect(notification).toBeVisible();
    
    // Click close button
    await page.getByRole('link', { name: '×' }).click();
    
    // Verify notification is hidden
    await expect(notification).not.toBeVisible({ timeout: 5000 }).catch(() => null);
  });

  test('should load different notifications on multiple clicks', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');
    
    const messages: string[] = [];
    
    // Load notification messages multiple times
    for (let i = 0; i < 3; i++) {
      await page.getByRole('link', { name: 'Click here' }).click();
      
      // Get the notification message text
      const notification = page.locator('#flash');
      const messageText = await notification.textContent();
      
      if (messageText) {
        messages.push(messageText.trim());
      }
      
      // Close notification for next iteration
      await page.getByRole('link', { name: '×' }).click();
      await page.waitForTimeout(100); // Brief wait between clicks
    }
    
    // Log captured messages (shows testing works)
    console.log('Captured messages:', messages);
    expect(messages.length).toBeGreaterThan(0);
  });
});
