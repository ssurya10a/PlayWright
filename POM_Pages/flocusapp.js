export class flocusapp{
    constructor(page){
        this.page = page
        this.username = page.locator('#onboarding-name')
        this.email = page.locator('//div[@class="input-group mb-3"]/input[@placeholder="name@example.com"]')
        this.password = page.locator('//div[@class="input-group mb-5"]/input[@placeholder="create password"]')
        this.login = page.locator('//button[text()="Continue"]')
    }

    async loggin(url,un,eml,pass){
        await this.page.goto(url)
        await this.username.fill(un)
        await this.email.fill(eml)
        await this.password.fill(pass)
        await this.login.click()
    }
}    