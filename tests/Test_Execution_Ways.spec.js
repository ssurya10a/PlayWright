import {test} from '@playwright/test'

test.describe('Test Execution ways', async() => {
    
    // it will exicute only this test 
    // test.only('exicute only this test', async({page}) => {
    // await page.goto('https://playwright.dev/docs/test-annotations#skip-a-test');
    // });

    // just want to skip the test
    test.skip('skiping the text script', async({page}) => {
        await page.goto('https://playwright.dev/docs/test-annotations#skip-a-test');
    });
 
    // we already know it is going to fail
    test.fail('going to fail', async({page}) => {
        // if the test pases it will give error stateing  --> Expected to fail, but passed.
        await page.goto('httpplaywright.dev/docs/test-annotations#skip-a-test')
    });

    // have some issue in the test to be fixed later 
    test.fixme('going to fix later so it is skiped', async({page})=>{
        await page.goto('https://playwright.dev/docs/test-annotations#skip-a-test')
    });

    // when the site or execution of test is slow due to some reason can be due to internet speed, display speed, delay inloading etc
    test('for slow execution due to some reason', async({page}) => {
        test.slow()

        await page.goto('https://playwright.dev/docs/test-annotations#skip-a-test');
    });

    // it is used for group execution or like suite execution 
    test.describe('it is group execution', () => {
        test('launtching a browser munally', async ({ page }) => {
            await page.goto('https://example.com');
        });

        test('navigate to a browser',async({page})=>{
            await page.goto('https://testautomationpractice.blogspot.com/');
        });
    }); 
});

// --reporter html --> gives the report in html page we have it in default in config file (gives report in html)
// --reporter list --> gives the report in lists (gives report in lists )
// --reporter dot --> gives the report in dot format (differnt colour and size of dots )
// --reporter line --> gives the report in line (gives report in line )
// --reporter json --> gives the result in a object with key and value pair 
// --reporter junit --> gives the result innpm i -D @playwright/test allure-playwright JUnit-style 