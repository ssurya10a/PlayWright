import { expect } from '@playwright/test';
import excel from 'exceljs';

export class flipkartflight {
    constructor(page){
        this.page = page
        this.flight = page.locator('//span[text()="Flight Bookings"]')
        this.roundtrip = page.locator('//input[@id="ROUND_TRIP"]/following-sibling::div[@class="qsHXPi"]')
        this.from = page.locator('.v2VFa-.rLGgLC.g9KxuM.smJZop.ZjUTQC.z2D4XG')
        this.fromopt = page.locator('//span[text()="Visakhapatnam"]')
        this.to = page.locator('//input[@class="v2VFa- rLGgLC g9KxuM smJZop G+rzy6 z2D4XG"]')
        this.todd = page.locator('//div[text()="PNQ"]')
        this.depart = page.locator('//label[text()="Depart On"]/preceding-sibling::input')
        this.departdd = page.locator('//div[text()="October 2025"]/ancestor::table/child::tbody/descendant::button[text()="5"]')
        this.return = page.locator('//label[text()="Return On"]/preceding-sibling::input')
        this.returndd = page.locator('//div[text()="November 2025"]/ancestor::table/child::tbody/descendant::button[text()="5"]')
        this.premium = page.locator('//div[text()="Premium Economy"]')
        this.adultpacenger = page.locator('//div[text()="Adults"]/../following-sibling::div/descendant::button[@class="QqFHMw +qYPut vSNayu"]')
        this.done = page.locator('//button[text()="Done"]')
        this.search = page.locator('//span[text()="SEARCH"]')
        this.fprice = page.locator('._44X-Hx')
        this.fname = page.locator('.hBcZZV')

    }

    async booking() {
        // navigate to the page
        await this.page.goto('https://www.flipkart.com/')

        await expect(this.page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        // click on flight 
        await expect(this.flight).toBeEnabled()
        await this.flight.click()

        // click on rownd trip
        await this.roundtrip.click()
        await expect(this.roundtrip).toBeChecked()

        //enter from loc
        await this.from.fill('visha')
        await expect(this.from).toBeFocused()
        // select from loc dropdown 
        await this.fromopt.click()
        await expect(this.fromopt).not.toBeEmpty()

        //enter to loc
        await this.to.fill('pun')
        await expect(this.to).toBeFocused()

        // select from to loc dropdown
        await this.todd.click()
        await expect(this.todd).not.toBeEmpty()

        // seclet depart date
        await this.depart.click()
        await expect(this.depart).toBeFocused()

        //click on date 
        await expect(this.departdd).toBeVisible()
        await this.departdd.click()

        // select return date
        await this.return.click()
        await expect(this.return).toBeFocused()

        // select date from return date
        await expect(this.returndd).toBeVisible()
        await this.returndd.click()

        // select prem
        await this.premium.check()
        await expect(this.premium).toBeChecked()

        // increase pacenger count 
        await expect(this.adultpacenger).toBeVisible()
        await this.adultpacenger.click()

        // click on done 
        await expect(this.done).toBeVisible()
        await this.done.click()

        // search for flight 
        await expect(this.search).toBeVisible()
        await this.search.click()

        await this.fname.last().waitFor()

        const workbook = new excel.Workbook();
        // Load existing file
        await workbook.xlsx.readFile('TestData/TestData.xlsx');
        const sheet = workbook.getWorksheet('Sheet2');

        const count = await this.fname.count(); // number of elements
            for (let i = 0; i < count; i++) {
            const name = await this.fname.nth(i).textContent();
            const price = await this.fprice.nth(i).textContent();
            console.log('Flight Name: ' + name);
            console.log('Flight price: ' + price);
            sheet.getRow(i+1).getCell(1).value = name
            sheet.getRow(i+1).getCell(2).value = price
        }
        await workbook.xlsx.writeFile('TestData/TestData.xlsx');
        
        await this.page.waitForTimeout(4000)
    }
}