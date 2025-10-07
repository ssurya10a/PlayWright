import { test, expect } from '@playwright/test';

test('Notification Popup', async ({ browser }) => {
  const context = await browser.newContext({
    // Handling Notification popup
    permissions: ['notifications']   // allow notifications
  });

  const page = await context.newPage();

  // Navigate to website
  await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0');

  // Click Notification button
  await page.getByRole('button', { name: 'Notification' }).click();

  // Validate notification permission inside browser
  const permission = await page.evaluate(() => Notification.permission);
  console.log('Notification Permission:', permission);

  expect(permission).toBe('granted');  // Assert permission is granted

  await page.waitForTimeout(2000);
});
