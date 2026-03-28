// import {test, expect} from '@playwright/test';

// /**
//  * Navigate https://www.vietnamairlines.com/vn/vi/
//  * Chon depart la SGN -> HAN, Ngay di 25/3/2026 -> 31/3/2026
//  * Verify  từ: SGN đến là HAN, ngày đi là 25/3/2026, ngày về là 31/3/2026
//  **/

// test('Vietnam Airlines booking SGN-HAN', async ({ page }) => {
//     await page.goto('https://www.vietnamairlines.com/vn/vi/');

//     await page.addLocatorHandler(
//         page.getByRole('button', { name: 'Chấp thuận tất cả Cookie' }),
//         async () => {
//             await page.getByRole('button', { name: 'Chấp thuận tất cả Cookie' }).click();
//         }
//     );

//   // Chọn điểm đi SGN
//   await page.getByRole('button', { name: 'Chọn điểm đi' }).click();
//   await page.getByText('SGN', { exact: true }).click({ force: true });

//   // Chọn điểm đến HAN
//   await page.getByRole('button', { name: 'Chọn điểm đến' }).click({ force: true });
//   await page.getByText('HAN', { exact: true }).click({ force: true });

 
//   // Chọn ngày đi 25/03/2026
//   await page.getByRole('button', { name: 'Ngày đi' }).click();
//   await page.getByRole('gridcell', { name: '25' }).click();

//   // Chọn ngày về 31/03/2026
//   await page.getByRole('button', { name: 'Ngày về' }).click();
//   await page.getByRole('gridcell', { name: '31' }).click();

//   // Click nút tìm chuyến bay
//   await page.getByRole('button', { name: /Tìm chuyến bay/i }).click();

//   // Verify thông tin hiển thị
//   await expect(page.getByText(/SGN.*HAN/)).toBeVisible();
//   await expect(page.getByText('25/03/2026')).toBeVisible();
//   await expect(page.getByText('31/03/2026')).toBeVisible();
// });
