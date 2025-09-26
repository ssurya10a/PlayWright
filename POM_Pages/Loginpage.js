exports.Loginpage = 
class login{
    constructor(page){
        this.page = page
        this.Username = 'Username'
        this.Password = 'Password'
        this.Login = '//button[@type="submit"]'
    }

    async gotologinpage(userid='Admin', pass='admin123'){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await this.page.getByPlaceholder(this.Username).fill(userid)
        await this.page.getByPlaceholder(this.Password).fill(pass)
        await this.page.locator(this.Login).click()        
    } 
}