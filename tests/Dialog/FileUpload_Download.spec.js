import{test, expect} from '@playwright/test';
import path from 'path'
import fs from 'fs';


test('Single File Upload', async ({ browser }) => {
    const context = await browser.newContext();
    const mainpage = await context.newPage();

    // navigate to a website
    await mainpage.goto('https://demoapps.qspiders.com/ui/fileUpload?sublist=0');

    // uploading a single file 
    await mainpage.locator('//input[@type="file"]').setInputFiles(path.join(__dirname, 'temp.docx'));

    // To remove all files from input
    await mainpage.locator('//input[@type="file"]').setInputFiles([]);

    await mainpage.locator('#fullName').fill('son goku')
});


test('Multiple File Upload', async ({ browser }) => {

  const context = await browser.newContext();

  const mainpage = await context.newPage();

  // navigate to a website
  await mainpage.goto('https://demoapps.qspiders.com/ui/fileUpload/multiple?sublist=3');

  console.log(__dirname);

  // creating a array to upload multiple files 
  const arr = [
    path.join(__dirname, 'temp.docx'), 
    path.join(__dirname, 'temp2.docx')
  ];

  // uploding multiple files 
  await mainpage.locator('//input[@type="file"]').setInputFiles(arr);

  await mainpage.waitForTimeout(3000)

  // To remove all files from input
  await mainpage.locator('//input[@type="file"]').setInputFiles([]);

  await mainpage.waitForTimeout(3000)

  // Continue with other form actions
  await mainpage.locator('#fullName').fill('son goku');
});

test('Download', async({browser}) => {

  const context = await browser.newContext()

  const page = await context.newPage()

  // navigate to a website 
  await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')

  await page.getByPlaceholder('Enter text here').fill('Son Goku the god of sayan')

  // Start waiting for download before clicking. Note no await.
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', {name: 'Download'}).click()
  const download = await downloadPromise;
  
  // specifying the download location 
  await download.saveAs(path.join('/Users/surya/Desktop/playwright/tests/Dialog', 'songoku.txt'));

  // Validate file exists in your system
  expect(fs.existsSync('/Users/surya/Desktop/playwright/tests/Dialog')).toBeTruthy();

  await page.waitForTimeout(5000)
}); 