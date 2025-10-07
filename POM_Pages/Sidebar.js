exports.Sidebar = 
class Sidebar{
    constructor(page){
        this.page = page
    }

    async Admin(){
        await this.page.locator('//span[text()="Admin"]').click()
    }

    async PIM(){
        await this.page.locator('//span[text()="PIM"]').click()
    }

    async Leave(){
        await this.page.locator('//span[text()="Leave"]').click()
    }
    
    async Time(){
        await this.page.locator('//span[text()="Time"]').click()
    }
    
    async Recruitment(){
        await this.page.locator('//span[text()="Recruitment"]').click()
    }
    
    async My_Info(){
        await this.page.locator('//span[text()="My Info"]').click()
    }

    async Performance(){
        await this.page.locator('//span[text()="Performance"]').click()
    }

    async Dashboard(){
        await this.page.locator('//span[text()="Dashboard"]').click()
    }

    async Directory(){
        await this.page.locator('//span[text()="Directory"]').click()
    }

    async Maintenance(){
        await this.page.locator('//span[text()="Maintenance"]').click()
    }

    async Claim(){
        await this.page.locator('//span[text()="Claim"]').click()
    }
    async Buzz(){
        await this.page.locator('//span[text()="Buzz"]').click()
    }
}