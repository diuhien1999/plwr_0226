import { test, expect } from '@playwright/test';

test('drag and drop', async ({ page }) => {
  // Go to the drag and drop page
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

  await page.locator('#column-a').dragTo(page.locator('#column-b'));

  const colA_AfterDrag = await page.locator('#column-a').textContent();
  await expect(colA_AfterDrag).toBe('B');
});


test('custom drag and drop for all browsers', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

  // Thực hiện drag and drop bằng cách mô phỏng sự kiện
  await page.evaluate(() => {
    const dataTransfer = new DataTransfer();
    const source = document.querySelector('#column-a');
    const target = document.querySelector('#column-b');

    source.dispatchEvent(new DragEvent('dragstart', { dataTransfer }));
    target.dispatchEvent(new DragEvent('drop', { dataTransfer }));
    target.dispatchEvent(new DragEvent('dragend', { dataTransfer }));
  });

  // Kiểm tra kết quả sau khi kéo thả
  const colA_AfterDrag = await page.locator('#column-a').textContent();
  await expect(colA_AfterDrag).toBe('B');
});

