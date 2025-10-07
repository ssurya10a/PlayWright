import { expect } from "allure-playwright"
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
        await expect(this.page).toHaveURL(url)

        await expect(name).toBeEditable()
        await this.name.fill(name)

        await expect(this.mail).toBeEditable()
        await this.mail.fill(email)

        await expect(this.password).toBeEditable()
        await this.password.fill(pwd)

        await expect(this.register).toBeEditable()
        await this.register.click()    }
}