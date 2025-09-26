import {test} from '@playwright/test'

// Test to demonstrate navigation methods in browser
test('navigation methods', async({page}) => {

    // go to is used to navigate to a page 
    await page.goto('https://www.amazon.in/')

    // go back is used to go to previous page 
    await page.goBack()

    // go forward is used to go to forward page 
    await page.goForward()

    // reload is used to refresh the page
    await page.reload()
});