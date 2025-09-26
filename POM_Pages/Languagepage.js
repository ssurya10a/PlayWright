exports.Languagepage =

class language{
    constructor(page){
        this.page = page
        this.name = page.locator('//div[text()="Name"]/..//i')
    }

    async select(){
        await this.name.click();
    }
}