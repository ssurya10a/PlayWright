import{test,expect} from '@playwright/test';

test('CheckBox Assertions Checked/Unchecked', async({page}) =>{
    // navigate to a page 
    await page.goto('https://seleniumbase.io/demo_page');

    // assert check box is checked 
    await expect(page.locator('#checkBox5')).toBeChecked()

    // assert check box is not checked (reverse assertion / negetive assertion)
    await expect(page.locator('#checkBox4')).not.toBeChecked
});

test('Element to be Disable/Enabled', async({page})=>{
    // navigating to a website 
    await page.goto('file:///Users/surya/Downloads/playwright-assertions-playground.html')

    // assert to check element to be disabled 
    await expect(page.locator('#disabled-btn')).toBeDisabled()
    await expect(page.locator('#disabled-btn')).not.toBeEnabled()

    // assert to check element to be enabled 
    await expect(page.locator('#enabled-btn')).toBeEnabled()
    await expect(page.locator('#enabled-btn')).not.toBeDisabled()
});

test('Element to be Editable/noteditable', async({page}) => {
    // navigate to a website 
    await page.goto('file:///Users/surya/Downloads/playwright-assertions-playground.html')

    // element to check element to be editable 
     await expect(page.locator('#editable-input')).toBeEditable()

    // element to check element not to be editable
    await expect(page.locator('#readonly-input')).not.toBeEditable()
}); 

test('Element to be Empty/notEmpty', async({page})=> {
    // navigate to website
    await page.goto('file:///Users/surya/Downloads/playwright-assertions-playground.html')

    // asssert to check element to be empty
    await expect(page.locator('#empty-input')).toBeEmpty()

    // assert to check element not to be empty 
    await expect(page.locator('#editable-input')).not.toBeEmpty()

});

test('Element to be Visable/Hidden', async({page}) => {
    // navigate to a website 
    await page.goto('file:///Users/surya/Downloads/playwright-assertions-playground.html')

    // assret to check element to be hidden
    await expect(page.locator('#hidden-div')).toBeHidden()

    // asserrt to check element to be not hidden 
    await expect(page.locator('#visible-div')).toBeVisible()
    await expect(page.locator('#visible-div')).not.toBeHidden()
});

test('Element to contain Text/ Class', async({page}) =>{
    // navigate to a websie 
    await page.goto('file:///Users/surya/Downloads/playwright-assertions-playground.html')

    // assert to check element to contain text
    await expect(page.locator('#visible-div')).toContainText('I am visible')

    // assert to check element to contain class
    await expect(page.locator('#visible-div')).toContainClass('box')
});

test('Element to have Text/ Class', async({page}) =>{
    // navigate to a websie 
    await page.goto('file:///Users/surya/Downloads/playwright-assertions-playground.html')

    // assert to check element to contain text
    await expect(page.locator('#visible-div')).toContainText('I am visible')

    // assert to check element to contain class
    await expect(page.locator('#visible-div')).toContainClass('box')
});

test('Element to have Attribute', async({page}) => {
    // navigate to a website
    await page.goto('file:///Users/surya/Downloads/playwright-assertions-playground.html')

    // assert to check element to have attribute
    await expect(page.locator('#test-link')).toHaveAttribute('target','_blank')
});

test('element to have text', async({page}) => {
     // navigate to a website
    await page.goto('file:///Users/surya/Downloads/playwright-assertions-playground.html')

    // assert to check element to have exact text (it is different from tocontaintext as checks all the text not partial text)
    await expect(page.locator('#welcome-msg')).toHaveText('Welcome to Playwright Testing!')

    // assert to check element to contains text (it is used to check if the element contains this partial text)
    await expect(page.locator('#welcome-msg')).toContainText('Welcome', 'Playwright')
});

test('Element to have Value/Values', async({page}) =>{
    // navigate to a website
    await page.goto('file:///Users/surya/Downloads/playwright-assertions-playground.html')

    // asssert to check locator contains the value
    await expect(page.locator('#editable-input')).toHaveValue('I am editable')

    await expect(page.locator('#text')).toHaveValues('')
});

