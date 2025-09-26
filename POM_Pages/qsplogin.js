export class qsplogin{
    constructor(page){
        this.page = page
        this.name = page.locator('#name')
        this.mail = page.locator('#email')
        this.password = page.locator('#password')
        this.register = page.locator('//button[@type="submit" and text()="Register"]')
    }

    async accountcreate(url,name,email,pwd){
        await this.page.goto(url)
        await this.name.fill(name)
        await this.mail.fill(email)
        await this.password.fill(pwd)
        await this.register.click()
    }
}