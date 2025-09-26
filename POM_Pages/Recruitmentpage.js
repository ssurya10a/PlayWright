const { timeStamp } = require("console")

exports.Recruitment =

class recruitment{

    constructor(page){
        this.page = page 
        this.job_title = page.locator('//label[text()="Job Title"]/../following-sibling::div//div[text()="-- Select --"]')
        //this.Vacancy = page.locator('//label[text()="Vacancy"]/../following-sibling::div//div[text()="-- Select --"]')
        //this.Hiring_Manager = page.locator('//label[text()="Hiring Manager"]/../following-sibling::div//div[text()="-- Select --"]')
        //this.Hiring_Manager_opction = page.locator('//label[text()="Hiring Manager"]/../following-sibling::div//child::span[text()="Rahul Patil"]')
    }

    async search_candidates (Title='QA Lead',vacancyposition='Senior QA Lead'){
        await this.job_title.click()
        // await this.page.locator(`//label[text()="Job Title"]/../following-sibling::div//child::span[text()="${Title}"]`).click()
        //await this.Vacancy.selectOpction(vacancyposition)
        
    }
}