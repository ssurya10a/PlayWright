import { expect, test } from '@playwright/test';

test('Single Select', async({page}) => {
  test.slow()
  // Navigate to a website 
  await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0');

  // validate it is loaded 
  await expect(page.locator('#select3')).toBeEditable()

  // selecting a opction from dropdown 
  await page.selectOption('#select3', 'India')

  // validate it is selected 
  const opction = await page.locator('#select3').inputValue()
  expect(opction).toBe('India')
   
});

test('Multi Select', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Validate dropdown is editable and multiple
  const dropdown = page.locator('#animals');
  await dropdown.scrollIntoViewIfNeeded()

  // Validate multiple attribute exists
  const hasMultiple = await page.getAttribute('#animals', 'multiple');
  expect(hasMultiple).not.toBeNull(); 

  // Define the option values you want to select
  await page.locator('//select[@id="animals"]').selectOption(['Cat', 'Deer', 'Lion'])

  // Validate multiple opctions are selected
  const selectedValues = await page.locator('#animals option:checked').allInnerTexts();
  console.log(selectedValues); 
});


test('Auto Suggestions Dropdown', async ({page}) => {
  await page.goto('https://www.amazon.in/');

  await page.getByPlaceholder('Search Amazon.in').fill('Son Goku');
  
  await page.waitForSelector('//div[@role="row"]');
  //await page.locator('//div[@role="row"]').last().waitFor();
  //await page.waitForTimeout(3000);
  const suggestions = await page.locator('//div[@role="row"]').all();
  
  
  console.log(suggestions);

  for (let element of suggestions) {
    const text = await element.textContent();
    if(text=='son goku'){
        await element.click()
        break
    }
  }
});
