import {test, chromium} from '@playwright/test'

// Test to demonstrate browser context usage
test('Browser Context', async({ browser }) => {
    let context = await browser.newContext()    // create new browser context
    let page = await context.newPage()          // open new page in context

    await page.close() // close the page
});

// Test demonstrating remaining browser and keyboard/mouse actions
test("Remaining Browser and Keyboard/Mouse actions", async() => {
    let Browser = await chromium.launch()       // launch browser
    let context = await Browser.newContext()    // create new context
    let page1 = await context.newPage()         // open first page
    await page1.goto('https://demoapps.qspiders.com/ui?scenario=1'); // navigate to Facebook login

    await page1.locator('#name').click()       // click email input
    await page1.keyboard.type('Son Goku')       // type username

    await page1.locator('#password').click()        // click password input
    await page1.keyboard.type('Kakarot')        // type password

    await page1.keyboard.press('Enter')         // press Enter key

    let page2 = await context.newPage()         // open second page

    await page1.close()                          // close first page

    await page2.goto('https://testautomationpractice.blogspot.com/') // navigate to demo site

    let Dynamic_Button = page2.locator('//button[text()="START"]')
    await Dynamic_Button.hover()  // mouse over element
    await Dynamic_Button.click()  // click element

    let dbclick = page2.locator('//button[text()="Copy Text"]')
    await dbclick.scrollIntoViewIfNeeded()   // scroll element into view
    await dbclick.dblclick()                 // double click element

    await page2.locator('//p[text()="Drag me to my target"]').scrollIntoViewIfNeeded() // scroll draggable element into view

    // drag element and drop it on target
    await page2.locator('//p[text()="Drag me to my target"]').dragTo(page2.locator('//p[text()="Drop here"]'))  
    
    await Browser.close(); // closes the browser
});