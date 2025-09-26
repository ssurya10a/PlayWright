import {test, expect} from '@playwright/test'

test('Fetching Data ', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Get all text contents (multiple elements)
    // it will provide a array that contains a single string but they are mixed with whitespace and newline characters
    console.log(await page.locator('#country').allTextContents());

    // it is used to fetch text from a specific element 
    console.log(await page.getByText('Dynamic Button').textContent());

    // it will fetch all the text present inside the perticular locator
    // it will print all the text in string format
    console.log(await page.locator('#country').innerText())

    // it will print an array having all the text inside the locator
    console.log(await page.locator('#country').allInnerTexts())

    // it will return all the code inside the perticular locator
    console.log(await page.locator('#country').innerHTML())

    // Count number of elements
    console.log(await page.locator('//select[@id="country"]/option').count());

    // to fetch a perticular element attribute
    console.log(await page.locator('#name').getAttribute('placeholder'));

    // it is used to fetch array of locators
    console.log(await page.locator('//select[@id="country"]/option').all())

    // Get page title 
    console.log(await page.title()); 

    // Get page url
    console.log(await page.url());
});