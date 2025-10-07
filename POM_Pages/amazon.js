import { expect } from "allure-playwright";
import excel from 'exceljs';

export class amazon {
    constructor(page, context){
        this.context = context
        this.page = page 
        this.url = page.goto('https://www.amazon.in/')
        this.productsearch = page.getByPlaceholder('Search Amazon.in')
        this.searchbutton = page.locator('#nav-search-submit-button')
        this.mobile = page.locator('//div[@class="puisg-row"]/descendant::span[contains(text(),"iPhone 16") and contains(text(),"Black")]')
    }

    async search() {
        // navigate to url
        await this.url

        await this.page.waitForURL('https://www.amazon.in/')

        // enter some search data in search field
        await this.productsearch.fill('iphone')

        // click on enter
        await this.searchbutton.click()

        // scroll if needed
        await this.mobile.scrollIntoViewIfNeeded()

        // handel oage
        const page2 = this.page.waitForEvent('page')

        // click on the mobile
        await this.mobile.click()

        // switch to new page
        const newpage = await page2

        // new page 
        
    }
}