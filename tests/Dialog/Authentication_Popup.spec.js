import { test, browser } from '@playwright/test';

test('Authentication Popup', async ({ browser }) => {

  // Create a context with HTTP authentication credentials
  const context = await browser.newContext({
    httpCredentials: {
      username: 'Son goku',
      password: 'kakarot'
    }
  });

  // Use this context to open a new page
  const page = await context.newPage();

  // Navigate to the page that requires authentication
  await page.goto('https://demoapps.qspiders.com/ui/auth?sublist=0');

  // Click the Login link that triggers the authentication
  await page.locator('//a[text()="Login"]').click();
});

