import {test, expect} from '@playwright/test'
// inside locator we can weite xpath and css

// Test to demonstrate various locators and actions
test('Locators_Actions', async({page}) => {
    // navigate to website 
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('#name').fill('Son Goku')   // fill input field
    await page.locator('#email').clear();     // Clear the input field.
    await page.locator('#email').type('Kakarot')   // slow typing into input
    await page.locator('#male').click()        // click radio button
    await page.locator('#sunday').check()       // check checkbox
    await page.locator('#sunday').uncheck()      // uncheck checkbox
    await page.locator('#country').selectOption('India') // select value from dropdown
});