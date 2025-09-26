import {test, expect} from '@playwright/test';

// for hidden division you dont need of Dialog handler as it is present in same page 
test('Hidden Division/ Hidden popup', async({browser}) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://demoapps.qspiders.com/ui/hidden?sublist=0')

    await page.getByRole('button', {name: "Add Customer"}).click()

    await page.locator('#customerName').fill('Son Goku')

    await page.locator('#customerEmail').fill('SonGoku@gmail.com')

    await page.locator('#prod').selectOption('Laptop')

    await page.locator('#message').fill('Son Goku survivor of saiyans race ')

    await page.getByRole('button', {name: "Submit"}).click()

}); 