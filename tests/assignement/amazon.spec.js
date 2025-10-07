import { test } from "allure-playwright";
import {amazon} from '../../POM_Pages/amazon'

test('amazon add to cart', async({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    const addtocart = new amazon(page, context)

    await addtocart.search()

    await page.waitForTimeout(4000)
})