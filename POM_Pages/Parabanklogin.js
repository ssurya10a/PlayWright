import { expect } from "allure-playwright"

export class Parabanklogin{
    constructor(page){
        this.page = page
        this.url = page.goto('https://parabank.parasoft.com/parabank/index.htm')
        this.username = page.locator('//input[@name="username"]')
        this.password = page.locator('//input[@name="password"]')
        this.loginbtn = page.locator('//input[@value="Log In"]')
    }

    async loggin(userid, userpass){
        await this.url
        await expect(this.page).toHaveURL('https://parabank.parasoft.com/parabank/index.htm')

        await expect(this.username).toBeEditable()
        await this.username.fill(userid)

        await expect(this.password).toBeEditable()
        await this.password.fill(userpass)

        await expect(this.loginbtn).toBeVisible()
        await this.loginbtn.click()
    }
}