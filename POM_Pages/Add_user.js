exports.Add_user = 
class admin {
    constructor(page) {
        this.page = page;
    }

    async adduser() {
        const addBtn = this.page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]');
        await expect(addBtn).toBeVisible();
        await addBtn.click();
    }

    async role(name='Admin') {
        const roleDropdown = this.page.locator('//label[text()="User Role"]/../following-sibling::div/div/div/div[text()="-- Select --"]');
        await expect(roleDropdown).toBeVisible();
        await roleDropdown.click();

        const roleOption = this.page.locator(`//div[@role="option"]/span[text()="${name}"]`);
        await expect(roleOption).toBeVisible();
        await roleOption.click();
    }

    async empname(name='Peter Mac Anderson') {
        const empField = this.page.getByPlaceholder('Type for hints...');
        await expect(empField).toBeEditable();
        await empField.fill(name);

        const empOption = this.page.locator(`//span[text()="${name}"]`);
        await empOption.waitFor({ state: 'visible' });
        await expect(empOption).toBeVisible();
        await empOption.click();
    }

    async status(status='Enabled') {
        const statusDropdown = this.page.locator('//label[text()="Status"]/../following-sibling::div/div/div/div[text()="-- Select --"]');
        await expect(statusDropdown).toBeVisible();
        await statusDropdown.click();

        const statusOption = this.page.locator(`//div[@role="option"]/span[text()="${status}"]`);
        await expect(statusOption).toBeVisible();
        await statusOption.click();
    }

    async username(name) {
        const usernameField = this.page.locator('//label[text()="Username"]/../following-sibling::div/input');
        await expect(usernameField).toBeEditable();
        await usernameField.fill(name);
    }

    async password(password) {
        const passwordField = this.page.locator('//label[text()="Password"]/../following-sibling::div/input');
        await expect(passwordField).toBeEditable();
        await passwordField.fill(password);
    }

    async confirmpassword(conpass) {
        const confirmField = this.page.locator('//label[text()="Confirm Password"]/../following-sibling::div/input');
        await expect(confirmField).toBeEditable();
        await confirmField.fill(conpass);
    }

    async cancel() {
        const cancelBtn = this.page.getByRole('button', { name: ' Cancel ' });
        await expect(cancelBtn).toBeVisible();
        await cancelBtn.click();
    }

    async save() {
        const saveBtn = this.page.getByRole('button', { name: ' Save ' });
        await expect(saveBtn).toBeEnabled();
        await saveBtn.click();

        const successToast = this.page.locator('p.oxd-toast-content-text').getByText('Success', { exact: true });
        await expect(successToast).toBeVisible();
        await expect(successToast).toHaveText('Success');
    }
};
