exports.Add_user = 
class admin{
    constructor(page){
        this.page = page
    }

    async adduser(){
        await this.page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    }

    async role(name='Admin') {

        await this.page.locator('//label[text()="User Role"]/../following-sibling::div/div/div/div[text()="-- Select --"]').click()

        await this.page.locator(`//div[@role="option"]/span[text()="${name}"]`).click();
   
    }

    async empname(name='Peter Mac Anderson'){
        await this.page.getByPlaceholder('Type for hints...').fill(`${name}`);

        await this.page.waitForTimeout(3000)

        await this.page.locator('//span[text()="Peter Mac Anderson"]').click()
    }

    async status(status='Enabled'){
        await this.page.locator('//label[text()="Status"]/../following-sibling::div/div/div/div[text()="-- Select --"]').click()


        await this.page.locator(`//div[@role="option"]/span[text()="${status}"]`).click();

    }

    async username(name){
        await this.page.locator('//label[text()="Username"]/../following-sibling::div/input').fill(name);
    }

    async password(password){
        await this.page.locator('//label[text()="Password"]/../following-sibling::div/input').fill(password)
    }

    async confirmpassword(conpass){
       await this.page.locator('//label[text()="Confirm Password"]/../following-sibling::div/input').fill(conpass)
    }

    async cancel(){
        await this.page.getByRole('button', {name: ' Cancel '}).click()
    }

    async save(){
        await this.page.getByRole('button', {name: ' Save '}).click()
    }
}