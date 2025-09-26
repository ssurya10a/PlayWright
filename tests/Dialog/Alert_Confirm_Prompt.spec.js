import { expect, test } from "@playwright/test";

test('Alert', async({page}) => {
    // navigate to a page
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    await expect(page.getByRole('button', {name:'Simple Alert'})).toBeEnabled()
    await page.getByRole('button', {name:'Simple Alert'}).scrollIntoViewIfNeeded()

    //Enabling Popup handling. // Dialog handler 
    page.on('dialog', dialog => {
        expect (dialog.type()).toContain('alert')
        expect (dialog.message()).toContain('I am an alert box!')
        dialog.accept()
    });

    await page.getByRole('button', {name: 'Simple Alert'}).click()
});

test('Confirm Popup', async({page}) => {
    // navigate to a page'
    await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0')

    await expect(page.locator('//tbody/descendant:: td[text()="Levis Shirt"]/../td/input')).toBeEnabled()
    await page.locator('//tbody/descendant:: td[text()="Levis Shirt"]/../td/input').click()

    //Enabling Popup handling. // Dialog handler 
    page.on('dialog', dialog => {
        expect (dialog.type()). toContain('confirm')
        expect (dialog.message()).toContain('Are you sure you want to delete?')
        dialog.accept()
    })

    await page.getByRole('button', {name: 'Delete'}).click()
});

test('Prompt popup', async({page}) => {
    // navigate to a page
    await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1')

    await expect(page.locator('//tbody/descendant:: td[text()="Levis Shirt"]/../td/input')).toBeEnabled()
    await page.locator('//tbody/descendant:: td[text()="Levis Shirt"]/../td/input').click()

    //Enabling Popup handling. // Dialog handler 
    page.on('dialog', dialog => {
        expect (dialog.type()). toContain('prompt')
        dialog.accept('delete it now')
    })

    await page.getByRole('button', {name: 'Delete'}).click()
});
