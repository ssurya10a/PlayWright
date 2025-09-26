import{test, expect} from '@playwright/test'

test('Build In Methods/ Build In Locators', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // page.getByAltText() - to locate an element, usually image, by its text alternative.
    await expect(page.getByAltText('company-branding')).toBeVisible()

    // page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('password').fill('admin123')

    // page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button', {name: " Login "}).click()

    // page.getByText() to locate by text content.
    await page.getByText('Admin', {exact: true}).click()

    // page.getByLabel() to locate a form control by associated label's text.
    // we can use it to fill a text box for that u need a label tag which is accepting input inside the label tag which is very rare
    await page.getByLabel('Username').isVisible()

    // page.getByTitle() to locate an element by its title attribute.
    await page.getByTitle('Help').click()

    // page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
    /*
    There is no example for as of now as we dont use this attribute most of the time 
    */
});