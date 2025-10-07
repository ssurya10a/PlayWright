import {test} from "@playwright/test";

test('inbuild locators', async({page})=>{
    //navigate to a web element 
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    // get by role
    await page.getByRole('button', {name: 'START'}).click()
    await page.waitForTimeout(3000)
    await page.getByRole('button', {name: 'STOP'}).click()

    // to handel alert popup
    page.on('dialog', async (dialog)=>{
        if(dialog.type()==='alert'){
            console.log( dialog.message());
            console.log(dialog.type())
            await dialog.accept()
        }else if(dialog.type()==='confirm'){
            console.log(dialog.message());
            console.log(dialog.type())
            await dialog.accept()
            // await dialog.dismiss()
        }else{
            console.log(dialog.message());
            console.log(dialog.type())
            console.log(dialog.defaultValue())
            await dialog.accept('Son Goku') // inside accept you need to give string
            // await dialog.dismiss()
        }
    })

    
    // get by get by text
    const alert = page.getByText('Simple Alert', {exact: true})
    await alert.scrollIntoViewIfNeeded()
    await alert.click()

    // get by text 
    await page.getByText('Confirmation Alert', {exact: true}).click()

    // get by text
    await page.getByText('Prompt Alert', {exact: true}).click()

    await page.waitForTimeout(3000)

    // get by label 
    await page.getByLabel('Accept terms').check()
    /** build in locator
     * get by text 
     * get by role
     * getbytitle 
     * getbylabel
     * getbyalttext
     * getbyplaceholder
     * getbytestid
     */

    /** assertions
     * tobeenabled
     * tobedisabled
     * tobeempty
     * tobevisable
     * tohaveclass
     * tohaveid
     * tohavecss
     * tobechecked
     * tobeeditable
     * tobeenable
     * tohavetitle
     * tohaveurl
     * tohavetext
     * totextcontent
     */

    
})