import { test, expect } from './fixtures/the-internet.fixture';

test.describe('Notification Message Rendered - with Page Objects', () => {
  test('should load page with notification message section', async ({ notificationMessagePage }) => {
    await notificationMessagePage.goto();
    
    // Verify heading and click here link are visible
    expect(await notificationMessagePage.isHeadingVisible()).toBe(true);
    expect(await notificationMessagePage.isClickHereLinkVisible()).toBe(true);
  });

  test('should display notification message when link is clicked', async ({ notificationMessagePage }) => {
    await notificationMessagePage.goto();
    
    // Load a notification message
    await notificationMessagePage.loadNewNotification();
    
    // Verify notification is visible
    expect(await notificationMessagePage.isNotificationVisible()).toBe(true);
    
    // Verify notification has text
    const messageText = await notificationMessagePage.getNotificationText();
    expect(messageText.length).toBeGreaterThan(0);
  });

  test('should display close button on notification', async ({ notificationMessagePage }) => {
    await notificationMessagePage.goto();
    
    // Load a notification message
    await notificationMessagePage.loadNewNotification();
    
    // Verify close button is visible
    expect(await notificationMessagePage.isCloseButtonVisible()).toBe(true);
  });

  test('should close notification when close button is clicked', async ({ notificationMessagePage }) => {
    await notificationMessagePage.goto();
    
    // Load a notification message
    await notificationMessagePage.loadNewNotification();
    expect(await notificationMessagePage.isNotificationVisible()).toBe(true);
    
    // Close the notification
    await notificationMessagePage.closeNotification();
    
    // Verify notification is hidden
    expect(await notificationMessagePage.isNotificationVisible()).toBe(false);
  });

  test('should load and display multiple notifications sequentially', async ({ notificationMessagePage }) => {
    await notificationMessagePage.goto();
    
    // Load and close multiple notifications
    for (let i = 0; i < 3; i++) {
      await notificationMessagePage.loadNewNotification();
      expect(await notificationMessagePage.isNotificationVisible()).toBe(true);
      
      const messageText = await notificationMessagePage.getNotificationText();
      // Match notification message patterns - they can have variations
      expect(messageText).toContain('Action');
      
      await notificationMessagePage.closeNotification();
      expect(await notificationMessagePage.isNotificationVisible()).toBe(false);
    }
  });
});
