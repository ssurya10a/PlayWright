exports.Logoutpage =
class logout{
    constructor(page){
        this.page = page;
    }

    async loggingout(){
        await this.page.locator('//span[@class="oxd-userdropdown-tab"]').click()
        await this.page.locator('//a[text()="Logout"]').click()
    }
}
