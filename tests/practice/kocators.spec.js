import {test} from '@playwright/test';

test('fetch all urls', async({page}) => {

	await page.goto('https://parabank.parasoft.com/parabank/index.htm')
	
	const urlscount = await page.getByRole('link').count()

	for(let i=0; i<urlscount; i++){
		const url = await page.getByRole('link').nth(i).getAttribute('href')
		console.log(`${i +1}.` + url);
	}
});