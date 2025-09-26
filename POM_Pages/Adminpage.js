exports.Adminpage =

class Admin{
    constructor(page){
        this.page = page
    }

    async username(name){
        await this.page.locator('//label[text()="Username"]/../following-sibling::div/input').fill(name)
    }

    async userrole(role='Admin'){
        await this.page.locator('//label[text()="User Role"]/../following-sibling::div/descendant::div[text()="-- Select --"]').click()
        if(role.toLowerCase()=='admin'){
            await this.page.locator('//div/span[text()="Admin"]').click()
        }else{
            await this.page.locator('//div/span[text()="ESS"]').click()
        }
    }

    async employee_name(name='Peter Mac Anderson'){
        await this.page.getByPlaceholder('Type for hints...').fill(name)
    }

    async status(status='Enabled'){
        await this.page.locator('//label[text()="Status"]/../following-sibling::div/descendant::div[text()="-- Select --"]').click()

        if(status.toLowerCase()=='enabled'){
            await this.page.locator('//div/span[text()="Enabled"]').click()
        }else{
            await this.page.locator('//div/span[text()="Disabled"]').click()
        }
    }

    async reset(){
        await this.page.getByRole('button', {name: ' Reset '}).click()
    }

    async search(){
        await this.page.getByRole('button', {name: ' Search '}).click()
    }

    async delete(name='SonGoku'){
        await this.page.locator(`//div[@class="oxd-table-row oxd-table-row--with-border"]/div/following-sibling::div/div[text()="${name}"]/../following-sibling::div/descendant::button/i[@class="oxd-icon bi-trash"]`).click()
    }

    async confirmdelete(){
        await this.page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]').click()
    }

    async Languages(){
        await this.page.locator('//span[text()="Qualifications "]').click()
        await this.page.locator('//a[text()="Languages"]').click()
    }
}