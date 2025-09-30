import{test, expect} from '@playwright/test';
import { promiseHooks } from 'node:v8';

test('Switching Browser Window/Context', async({browser}) => {
    // creating a browsercontext
    let context = await browser.newContext()

    //createing a page in browser contex
    let page = await context.newPage()

    // navigate to a page 
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")

    // wait for event 
    const newpage = context.waitForEvent('page');

    await page.locator('(//button[text()="view more"])[last()]').click()

    // storing the new page in a variable so can use it to do actions on new page 
    const poppage = await newpage 

    // doing actions on new page
    await poppage.getByRole('button', {name:"Add to Cart"}).click()

    await poppage.locator('//*[local-name()="svg"]').click()

    await poppage.close()

});

test('Switch Browser Tabs', async ({browser}) => {
    const context = await browser.newContext()

    const page1 = await context.newPage()

    // navigate to a page 
    await page1.goto('https://www.flipkart.com/')

    await page1.getByPlaceholder('Search for Products, Brands and More').fill('IPHONE')

    await page1.locator('//button[@type="submit"]').click()

    const newpage = context.waitForEvent('page')

    await page1.locator('(//div[contains(text(),"iPhone 16")])[last()]').click()

    const page2 = await newpage

    //await page2.close()

});

// we can handel new tab in another way that is
/*
let [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator().click // click on the element which is leading to the new tab
])
// here both the promise are going to exiqute parallelly  
*/