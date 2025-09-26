import{test, expect} from '@playwright/test';

test('Test css value using evaluate & getPropertyValue', async ({ page }) => {
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

test('Test Css value using toHaveCSS', async({page}) => {
    //navigate to a page 
    await page.goto('https://getbootstrap.com/docs/4.0/components/buttons/')

    const button1 = page.locator('//div[@class="bd-example"]/button[text()="Primary" and @class="btn btn-primary"]')
    
    const button1clr = await expect(button1).toHaveCSS('background-color', 'rgb(0, 123, 255)')
});

test('Test Css value using elementHandle', async ({ page }) => {
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