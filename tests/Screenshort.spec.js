import{test} from '@playwright/test';

test('Screenshort', async({page})=>{

    // navigate to url
    await page.goto('https://www.amazon.in/');

    // fetching date using this so screenshort name will be unique every time
    const now = new Date();

    // give screenshort file path and screenshort name 
    await page.screenshot({ path: `screenshots/screenshot_${now.toLocaleString()}.png`});  

});

test('Full Screenshort', async({page})=>{

    // navigate to url
    await page.goto('https://www.amazon.in/');

    // fetching date using this so screenshort name will be unique every time
    const now = new Date();

    // give screenshort file path and screenshort name 
    await page.screenshot({ path: `screenshots/screenshot_${now.toLocaleString()}.png`, fullPage: true});  

});

test('Element Screenshort', async({page})=>{

    // navigate to url
    await page.goto('https://www.amazon.in/');

    // fetching date using this so screenshort name will be unique every time
    const now = new Date();

    // give screenshort file path and screenshort name 
    await page.locator('#nav-search').screenshot({ path: `screenshots/screenshot_${now.toLocaleString()}.png`, fullPage: true});  

});