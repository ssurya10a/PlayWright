import { test,expect } from "allure-playwright";

test('speice jet round trip', async({browser})=>{
test.slow()
    const context = await browser.newContext({
        Notification:[]
    })

    const page = await context.newPage()
    // navigate to website
    await page.goto('https://www.spicejet.com/')

    // assert url
    await expect(page).toHaveURL('https://www.spicejet.com/')

    // assert title
    await expect(page.title()).toHaveTitle('SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets')

    const rounttripbtn = page.locator('//div[text()="round trip"]/../preceding-sibling::div')

    await expect(rounttripbtn).toBeEnabled()

    await rounttripbtn.click()

    const from =  page.locator('//div[text()="From"]/following-sibling::div/input')

    await expect(from).toBeVisible()

    await from.fill('del')

    await page.keyboard.type('blr')

    await page.waitForURL()
})