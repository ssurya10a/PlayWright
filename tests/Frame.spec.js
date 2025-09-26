import {test} from '@playwright/test';

test('By Locating Element Inside Iframe', async({page}) => {
    // navigte to a website
    await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')


    // Locate element inside frame and doing action directly
    await page.frameLocator('iframe.w-full.h-96').locator('//input[@name="username"]').fill('Son')

    await page.frameLocator('iframe.w-full.h-96').locator('#password').fill('Goku')

    await page.frameLocator('iframe.w-full.h-96').getByRole('button', {name: 'Login'}).click()
});

test.describe('Frame Objects', () =>{
    
    test('Single Iframe', async({page}) => {
        // navigate to a webpage 
        await page.goto('https://ui.vision/demo/webtest/frames/')

        //  Get frame using frame's URL
        const frame1 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
        await frame1.locator('//input[@name="mytext1"]').fill(' Son Goku')

        // navigate to another page 
        await page.goto('https://demo.automationtesting.in/Frames.html')

        // Get frame using the frame's name attribute
        const frame2 = page.frame({name: 'SingleFrame'})
        await frame2.locator('(//input[@type="text"])[1]').fill(' Son Goku')
    });

    test('Multi Iframes', async ({ page }) => {
        // Navigate to the page
        await page.goto('https://practice-automation.com/iframes/');

        // to get number of frames
        console.log(await page.frames().length);
         

        // Access first iframe using frameLocator
        const frame1 = page.frameLocator('#iframe-1'); 

        // Click inside iframe1
        await frame1.locator('a.getStarted_Sjon').click();

        await page.waitForTimeout(3000); // Just to observe

        // Access second iframe using frameLocator 
        const frame2 = page.frameLocator('#iframe-2');

        // click button inside iframe2
        await frame2.locator('//span[@class="DocSearch-Button-Placeholder"]').click()

        await page.waitForTimeout(3000); // Just to observe

    });


// not geting the output try it later 
// test('Nested with Multiple iframe', async ({ page }) => {
//   // Navigate to the page
//   await page.goto('https://demoapps.qspiders.com/ui/frames/nestedWithMultiple?sublist=3');

//   // Select outer and inner iframes properly
//   const outerFrame = page.frameLocator('(//iframe)[1]');
//   const innerFrame = outerFrame.frameLocator('iframe')

//   // Fill form fields inside nested iframe
//   await innerFrame.getByRole('textbox', { name: 'Email:' }).fill('Admin@gmail.com');
//   await innerFrame.locator('#email').fill('Admin@gmail.com');
//   await innerFrame.locator('#password').fill('Admin@1234');
//   await innerFrame.locator('#confirm').fill('Admin@1234');

//   // Click submit button
//   await innerFrame.getByRole('button', { name: 'Submit' }).click();

//   // Validate email field still has value
//   await expect(innerFrame.locator('#email')).toHaveValue('Admin@gmail.com');
// });


test('Window Alert Frame', async({browser}) => {

    const context = await browser.newContext()

    const page = await context.newPage()

    //navigate to a website
    await page.goto('https://demoapps.qspiders.com/ui/frames/frameAlert?sublist=4')

    const frame =  page.frameLocator('.w-full.h-96')

    await frame.locator('(//button[text()="Buy Now"])[last()]').click()

    await frame.getByRole('button', {name: 'Pay Now'}).click()

    page.on('dialog', dialog => {
        dialog.accept()
    });

    await page.waitForTimeout(3000)
});

});


test('qspider nexsted frame', async ({page})=>{
    // navigate to webpage
    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1')

    // fetching parent frame
    let parenframe = await page.frameLocator('.w-full.h-96')

    // fetching chile frame 
    let childframe = await parenframe.frameLocator('//section[@class="main_form_container"]//iframe')

    // fill value in text field
    await childframe.locator('//input[@id="email"]').fill('vjvjhv')
})

test('multiple frame', async({page})=>{
    //navigate to webpage 
    await page.goto('https://demoapps.qspiders.com/ui/frames/multiple?sublist=2')

    // Locate the iframe
    const iframeElement = page.locator('(//section[@class="flex gap-10 w-full"]/div/iframe)[1]');

    // Get the frame object
    const frame = await iframeElement.contentFrame();

    // Locate the input inside the iframe
    const emailInput = frame.locator('//input[@id="email"]');

    // Interact with it
    await emailInput.fill('adcss');

    // Locate the input inside the iframe
    let passwordInput = frame.locator('//input[@id="password"]');

    // Interact with it
    await passwordInput.fill('asddf')

})