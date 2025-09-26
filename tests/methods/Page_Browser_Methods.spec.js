import {test} from '@playwright/test'

test('Browser / Page Utilities', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Take screenshot
  const now = new Date();

    // give screenshort file path and screenshort name 
    await page.screenshot({ path: `screenshots/screenshot_${now.toLocaleString()}.png`});  

    // Get current viewport size
    console.log(page.viewportSize());

    // Set browser viewport size
    await page.setViewportSize({ width: 1440, height: 900 });
    console.log(page.viewportSize());

    // Wait for element to be  "attached" | "detached" | "visible" | "hidden" 
    await page.locator('#name').waitFor();
});