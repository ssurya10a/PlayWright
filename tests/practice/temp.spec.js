import { test } from '@playwright/test';

test('locators practice', async({page})=>{
    // navigate to url 
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    // select a element using locator
    await page.locator('#Wikipedia1_wikipedia-search-input').fill('son goku')

    //other way to use locator 
    await page.fill('#username', 'son wu kong')

    // this is used for testing auto suggestions 
    await page.locator('#Wikipedia1_wikipedia-search-input').clear()
    await page.locator('#Wikipedia1_wikipedia-search-input').type('son goku', {delay: 400})
    

});