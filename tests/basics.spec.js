import { test, expect } from '@playwright/test';

test('navigate to a browser',async({page})=>{

    // navigating to a website 
    await page.goto('https://testautomationpractice.blogspot.com/');

});

test('launtching a browser munally', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://example.com');
});

import { chromium } from '@playwright/test';  // here we are fetching to execute a specific browser 

test('launching a specific browser manually', async () => {
  // launch a Chromium browser (headed = visible)
  const browser = await chromium.launch();

  // create a new browser context
  const context = await browser.newContext();

  // open a new page (tab)
  const page = await context.newPage();

  // navigate to a site
  await page.goto('https://testautomationpractice.blogspot.com/');
});

// test.fixme('launtching a browser and doing some actions', async ({ browser }) => {
//   // creating a browser context 
//   const context = await browser.newContext();

//   // open a new page (tab)
//   const page = await context.newPage();

//   // navigate to a url
//   await page.goto('https://www.amazon.in/s?k=iphone&crid=2QZ5ZB2MDRZT7&sprefix=%2Caps%2C232&ref=nb_sb_ss_recent_1_0_recent');

//   // validating page title 
//   expect(page).toHaveTitle('Amazon.in : iphone');

//   // clink on a product
//   await page.getByLabel('Apple').scrollIntoViewIfNeeded().click(); // it is not working check it later

// });
