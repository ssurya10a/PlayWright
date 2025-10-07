export class saucedemo{
    constructor(page){
        this.page = page
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.login = page.locator('#login-button')
    }

    async loggin(url,un,pass){
        await this.page.goto(url)
        await this.username.fill(un)
        await this.password.fill(pass)
        await this.login.click()
    }
}    