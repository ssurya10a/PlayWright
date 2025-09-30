const { expect } = require("allure-playwright")

exports.Loginpage = 
class login{
    constructor(page){
        this.page = page
        this.url = page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        this.Username = page.getByPlaceholder('Username')
        this.Password = page.getByPlaceholder('Password')
        this.Login = page.locator('//button[@type="submit"]')
    }

    async gotologinpage(userid='Admin', pass='admin123'){
        await this.url
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        await expect(this.Username).toBeVisible()
        await this.Username.fill(userid)

        await expect(this.Password).toBeVisible()
        await this.Password.fill(pass)

        await expect(this.Login).toBeVisible()
        await this.Login.click()        
    } 
}