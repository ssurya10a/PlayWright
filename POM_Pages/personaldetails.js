exports.Personaldetails = 

class personaldetails{

    constructor(page){
        this.page = page
        this.malegender = page.locator('//label[text()="Male"]/child::span')
        this.femalegender = page.locator('//label[text()="Female"]/child::span')
    }

    async changegender(){
        if(await this.malegender.isChecked()){
            await this.femalegender.click()
        }else{
            await this.malegender.click()
        }
    }
}