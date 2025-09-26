import { test, expect } from '@playwright/test'
/*____________________________________________________
 Test to demonstrate Hard Assertion Methods
____________________________________________________*/

test('hard assertions methods', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // assert page title --> Ensures the page has the given title
  await expect(page).toHaveTitle('Automation Testing Practice');

  // assert page URL --> Ensures the page has the given url
  await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

  // assert element text --> Ensures the Locator points to an element with the given text
  await expect(page.locator('//p[@class="description"]')).toHaveText('For Selenium, Cypress & Playwright');

  // assert multi-select options selected --> Ensures the Locator points to an element with the given input value 
  const colour = page.locator('#colors');
  await colour.selectOption(['Red', 'Yellow', 'White']);
  await expect(colour).toHaveValues(['red', 'yellow', 'white']);

  // assert single select option selected --> Ensures the Locator points to an elements with the given input values 
  const animals = page.locator('#animals');
  await animals.selectOption('Cheetah');
  await expect(animals).toHaveValue('cheetah');

  // Element has an ID --> Ensures the Locator points to an element with the given DOM Node ID
  await expect(page.getByPlaceholder('Enter Name')).toHaveId('name')

  // Element has an Class --> Ensures the Locator points to an element with the given DOM Node Class
  await expect(page.getByPlaceholder('Enter Name')).toHaveClass('form-control')

  // Element is visible --> Ensures that Locator points to an attached and visible DOM node
  await expect(page.locator('//h2[text()="Tabs"]')).toBeVisible()

  // Element contains text --> Ensures the Locator points to an element that contains the given text
  await expect(page.getByRole('button', {name: 'START'})).toContainText('START')

  // Element is enabled --> Ensures the Locator points to an enabled element
  await expect(page.getByRole('button', {name: 'START'})).toBeEnabled()

  // Container is empty -->Ensures the Locator points to an empty editable element or to a DOM node that has no text
  await expect(page.getByPlaceholder('Enter EMail')).toBeEmpty()

  // Element is editable --> Ensures the Locator points to an editable element
  await expect(page.getByPlaceholder('Enter Phone')).toBeEditable()

  // Checkbox is checked --> Ensures the Locator points to a checked input
  let suncheckbox = page.locator('#sunday')
  await suncheckbox.check()
  await expect(suncheckbox).toBeChecked()

  // Element is attached --> Ensures that Locator points to an element that is connected to a Document or a ShadowRoot
  await expect(page.locator('//div[@name="Header"]')).toBeAttached()
});


/*____________________________________________________
 Test to demonstrate Soft Assertion Methods
____________________________________________________*/
test('Soft Assertion', async({page}) => {
    // navigate to a page 
    await page.goto('https://www.nopcommerce.com/en/register')

    // 1) expect(page).toHaveURL()   Page has URL
    await expect.soft(page).toHaveURL('https://www.nopcommerce.com/en/register')

    // 2) expect(page).toHaveTitle()   Page has title
    await expect.soft(page).toHaveTitle('Register - nopCommerce')

    // 3) expect(locator).toBeVisible()  Element is visible
    await expect.soft(page.getByLabel('Confirm email')).toBeVisible()

    // 4) expect(locator).toBeEnabled()  Control is enabled
    await expect.soft(page.locator('#CountryId')).toBeEnabled()

    // 5) expect(locator).toBeChecked()  Radio/Checkbox is checked
    await expect.soft(page.locator('#Newsletter')).toBeChecked()

    // 6) expect(locator).toHaveAttribute() Element has attribute
    await expect.soft(page.locator('#check-availability-button')).toHaveAttribute('type', 'button', 'value', 'Check Availability')

    // 7) expect(locator).toHaveText()  Element matches text
    await expect.soft(page.locator('//label[@for="FirstName"]')).toHaveText('First name:')

    // 8) expect(locator).toContainText()  Element contains text
    await expect.soft(page.locator('//label[@for="ConfirmEmail"]')).toContainText('email')

    // 9) expect(locator).toHaveValue(value) Input has a value
    await expect.soft(page.locator('#check-availability-button')).toHaveValue('Check Availability')

    // 10) expect(locator).toHaveCount()  List of elements has given length
    await expect.soft(page.locator('//input[@type="button"]')).toHaveCount(1)
});

/*____________________________________________________
Test to demonstrate Negating Assertions methods
____________________________________________________*/
// by adding .not to hard and soft assertion it becomes a reverse of it or Negating Assertions methods
test('Negating Assertions methods', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // assert page title --> Ensures the page do not have the given title
  await expect(page).not.toHaveTitle('Butomation Testing Practice');

  // assert page URL --> Ensures the page do not have  the given url
  await expect(page).not.toHaveURL('https://testautomationpractice.hotspot.com/');

  // assert element text --> Ensures the Locator do not points to an element with the given text
  await expect(page.locator('//p[@class="description"]')).not.toHaveText('For javascript, Cypress & Playwright');

  // assert multi-select options selected --> Ensures the Locator does not points to an element with the given input value 
  const colour = page.locator('#colors');
  await colour.selectOption(['Red', 'Yellow', 'White']);
  await expect(colour).not.toHaveValues(['cheetah', 'bat', 'cat']);

  // assert single select option selected --> Ensures the Locator does not points to an elements with the given input values 
  const animals = page.locator('#animals');
  await animals.selectOption('Cheetah');
  await expect(animals).not.toHaveValue('yellow');

  // Element has an ID --> Ensures the Locator does not points to an element with the given DOM Node ID
  await expect(page.getByPlaceholder('Enter Name')).not.toHaveId('age')

  // Element has an Class --> Ensures the Locator does not points to an element with the given DOM Node Class
  await expect(page.getByPlaceholder('Enter Name')).not.toHaveClass('control-form')

  // Element is visible --> Ensures that Locator does not points to an attached and visible DOM node
  await expect(page.locator('//h1[text()="Tabs"]')).not.toBeVisible()

  // Element contains text --> Ensures the Locator does not points to an element that contains the given text
  await expect(page.getByRole('button', {name: 'START'})).not.toContainText('ARTS')

  // Element is enabled --> Ensures the Locator does not points to an enabled element
  // there is no such element in the site to give a example 
  //await expect(page.getByRole('button', {name: 'START'})).not.toBeEnabled()

  // Container is empty -->Ensures the Locator does not points to an empty editable element or to a DOM node that has no text
  await page.getByPlaceholder('Enter EMail').fill('hh')
  await expect(page.getByPlaceholder('Enter EMail')).not.toBeEmpty()

  // Element is editable --> Ensures the Locator does not points to an editable element
  // there is no such element in the site to give a example 
  //await expect(page.locator('Enter Phone')).not.toBeEditable()

  // Checkbox is checked --> Ensures the Locator does not points to a checked input
  let suncheckbox = page.locator('#sunday')
  await expect(suncheckbox).not.toBeChecked()

  // Element is attached --> Ensures that Locator does not points to an element that is connected to a Document or a ShadowRoot
  await expect(page.locator('//div[@name="ladder"]')).not.toBeAttached()
});
