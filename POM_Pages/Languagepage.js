const { expect } = require('@playwright/test');
exports.Languagepage =

class language{
    constructor(page){
        this.page = page
        this.name = page.locator('//div[text()="Name"]/..//i')
    }

    async select(){
        await expect(this.name).toBeVisible()
        await this.name.click();
    }
}