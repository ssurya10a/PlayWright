import{test,chromium } from '@playwright/test'

// Test to demonstrate keyboard and mouse actions
test('Keyboard Actions', async ({ page }) => {
    // navigate to a webpage
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    // here you are giveing input by typing
    await page.locator('#username').click(); 
    await page.keyboard.down('Shift');
    await page.keyboard.press("s");    
    await page.keyboard.up('Shift');
    await page.keyboard.type(' surya'); 
    
    // using press you are making keyboard actio 
    await page.keyboard.press('Enter');          // press Enter key

    // insert text doesnot do any keyup/key down action action 
    await page.locator('#Wikipedia1_wikipedia-search-input').click();
    await page.keyboard.insertText('ಮಗ ಗೋಕು');


});

test('Mouse Actions', async({page}) => {
    // navigate to page 
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#draggable').scrollIntoViewIfNeeded();

    // move mouse over dragable element and click and hold
    const dragele = page.locator('#draggable');
    await dragele.hover();
    await page.mouse.down({ button: 'left' });

    // move the move over to dropable element and release the mouse click 
    const dropele = page.locator('#droppable');
    await dropele.hover();
    await page.mouse.up({button: 'left'});

    await page.waitForTimeout(5000);

    // doble click on a element 
    await page.getByRole('button', {name: 'Copy Text'}).dblclick();

    await page.waitForTimeout(5000);

    // scroll by x and y axis 
    await page.mouse.wheel(0, 1000);

    await page.mouse.wheel(0,-1000);

});

test('other way to drag and drop', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#draggable').scrollIntoViewIfNeeded();

    // move mouse over dragable element and click and hold
    const dragable = await page.locator('#draggable').hover();
    await page.mouse.down();
    await page.waitForTimeout(2000);

    // fetc the x and y of dropele and mouse click on that loc 
    const dropele = await page.locator('#droppable').boundingBox();
    console.log(dropele);
    await page.mouse.move(dropele.x + dropele.width / 2, dropele.y + dropele.height / 2);
    //await page.mouse.click(dropele.x + dropele.width / 2, dropele.y + dropele.height / 2)
    await page.mouse.up();
    await page.waitForTimeout(2000);
})

test('qsp other way to drag and drop', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2');

    // move mouse over dragable element and click and hold
    const dragable = await page.locator('//div[text()="Mobile Charger"]').hover();
    await page.mouse.down();
    await page.waitForTimeout(2000);

    // fetc the x and y of dropele and mouse click on that loc 
    const dropele = await page.locator('//div[text()="Mobile Accessories"]').boundingBox();
    console.log(dropele);
    await page.mouse.move(dropele.x , dropele.y);
    //await page.mouse.click(dropele.x + dropele.width / 2, dropele.y + dropele.height / 2)
    await page.mouse.up();
    await page.waitForTimeout(2000);
})