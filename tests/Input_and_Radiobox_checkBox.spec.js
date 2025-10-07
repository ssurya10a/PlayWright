import{test, expect} from '@playwright/test';

// you are sending some data/ test/ string into a text field here 
test('InputBox (select a text field and fill some value) ', async({page}) => {
    // navigate to a website 
    await page.goto('https://demoapps.qspiders.com/ui');

    // these are some validation methods so can wait for it to load first then enter some vaslue

    // await expect(page.getByPlaceholder('Enter your name')).toBeEditable()
    // await expect(page.getByPlaceholder('Enter your name')).toBeEmpty()
    // await expect(page.getByPlaceholder('Enter your name')).toBeEnabled()
    // await expect(page.getByPlaceholder('Enter your name')).toBeAttached()
    await expect(page.getByPlaceholder('Enter your name')).toBeVisible()
    

    // using any of the below ways you can enter some data into text field

    //await page.getByPlaceholder('First Name').fill('Random')
    await page.fill('#name', 'Son Goku')

});

// here you can only one opction in the opptions 
test('Radio Button', async({page}) => {

    test.slow()
    // navigate to a website 
    await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0');

    // these are some validation methods so can wait for it to load first then select radio button 

    // validate wether you can click on radio button 
    await expect(page.locator('#attended_a')).toBeEditable()
    await expect(page.locator('#attended_a')).toBeEnabled()
    await expect(page.locator('#attended_a')).toBeAttached()
    await expect(page.locator('#attended_a')).toBeVisible()


    // using any of the below ways you can select radio button 

    await page.check('#attended_a')
    //await page.getByText('Male', { exact: 'true'}).check();


    // these validation is to know we have already clicked on the check box 
    await expect(page.locator('#attended_a')).toBeChecked()

    // it is a method to get boolean value if radio button is checked xs
    console.log(await page.locator('#attended_a').isChecked());

    // using is checked to see if other option is checked 
    console.log(await page.locator('#attended_b').isChecked()== false);

});

// here you can select multiple checkboxes 
test('CheckBoxs', async({page}) => {
    // navigate to a website 
    await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0');

    // make the script for the check box to be editable 
    await expect(page.locator('#domain_a')).toBeVisible()
    await expect(page.locator('#domain_a')).toBeEditable()

    // clicking on a checkbox
    await page.check('#domain_a')
    await page.check('#domain_c')

    // using assertion to check wether i have selecte the check box 
    await expect(page.locator('#domain_a')).toBeChecked()
    await expect(page.locator('#domain_b')).not.toBeChecked() // checking if i have selected 2nd check box
    
    // using method to check if i have select a chech box
    console.log(await page.locator('#domain_a').isChecked());   
    console.log(await page.locator('#domain_a').isChecked());
    
});