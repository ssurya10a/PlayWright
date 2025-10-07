import {test, expect} from '@playwright/test';

test('Qsp Register button using getbyvalue', async({page}) => {
    //navigate to a page 
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    const button1 = page.getByRole('button', {name: 'Register'})
    
    await expect(button1).toHaveCSS('background-color', 'rgb(249, 115, 22)')
})

test('Test Css value using getbyvalue', async({page}) => {
    //navigate to a page 
    await page.goto('https://getbootstrap.com/docs/4.0/components/buttons/')

    const button1 = page.locator('//div[@class="bd-example"]/button[text()="Primary" and @class="btn btn-primary"]')
    
    const button1clr = await expect(button1).toHaveCSS('background-color', 'rgb(0, 123, 255)')
})

test('Test css value using evaluate', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

  const registerBtn = page.getByRole('button', {name: 'Register' });

  // Await the evaluated CSS property
  const colour = await registerBtn.evaluate((ele) => {
    return window.getComputedStyle(ele).getPropertyValue('background-color');
  });

  console.log('Background color:', colour);

  // Assertion
  expect(colour).toBe('rgb(249, 115, 22)');
});

test('Test css value using elementHandle', async ({ page }) => {
    // elementHandle means a single element in a webpage
    // Navigate to the page
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    const registerBtn = page.getByRole('button', {name: 'Register' });

    const styles = await registerBtn.evaluate(ele => {
    const computed = window.getComputedStyle(ele);
    return {
        color: computed.color,
        bgColor: computed.backgroundColor,
        fontSize: computed.fontSize
    };
    });

    console.log(styles);
    expect(styles.bgColor).toBe('rgb(249, 115, 22)');
    expect(styles.color).toBe('rgb(255, 255, 255)');

});

test('Test secondary button using getbyvalue', async({page}) => {
    //navigate to a page 
    await page.goto('https://getbootstrap.com/docs/4.0/components/buttons/')
    
    const button2 = page.locator('//div[@class="bd-example"]/button[text()="Secondary" and @class="btn btn-secondary"]')
    
    const button2clr = await expect(button2).toHaveCSS('background-color', 'rgb(108, 117, 125)')
})

test('GitHub Sign In button using toHaveCSS', async ({ page }) => {
    await page.goto('https://github.com/login');

    const signInBtn = page.locator('//input[@type="submit" and @name="commit"]');

    // Assert background color
    await expect(signInBtn).toHaveCSS('background-color', 'rgb(31, 136, 61)');

    // Assert font size
    await expect(signInBtn).toHaveCSS('font-size', '14px');
});

test('Test Warning button using getbyvalue', async({page}) => {
    //navigate to a page 
    await page.goto('https://getbootstrap.com/docs/4.0/components/buttons/')
    
    const button2 = page.locator('//div[@class="bd-example"]/button[text()="Warning" and @class="btn btn-warning"]')
    
    const button2clr = await expect(button2).toHaveCSS('background-color', 'rgb(255, 193, 7)')
})

test('Google search button using evaluate/getComputedStyle', async ({ page }) => {
  await page.goto('https://www.google.com/');

  const searchBtn = page.locator('(//input[@name="btnK"])[last()]');

  const styles = await searchBtn.evaluate(ele => {
    const computed = window.getComputedStyle(ele);
    return {
      color: computed.color,
      bgColor: computed.backgroundColor,
      fontSize: computed.fontSize
    };
  });

  console.log(styles);

  expect(styles.color).toBe('rgb(60, 64, 67)');
  expect(styles.bgColor).toBe('rgb(248, 249, 250)');
});


test('YouTube search button using toHaveCSS', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  const searchBtn = page.locator('(//button[@aria-label="Search"])[1]');

  await expect(searchBtn).toHaveCSS('background-color', 'rgb(248, 248, 248)');
 
});

test('Test Success button using getbyvalue', async({page}) => {
    //navigate to a page 
    await page.goto('https://getbootstrap.com/docs/4.0/components/buttons/')
    
    const button2 = page.locator('//div[@class="bd-example"]/button[text()="Success" and @class="btn btn-success"]')
    
    const button2clr = await expect(button2).toHaveCSS('background-color', 'rgb(40, 167, 69)')
})