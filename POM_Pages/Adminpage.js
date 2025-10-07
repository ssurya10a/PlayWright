const { expect } = require('@playwright/test');

exports.Adminpage =
class Admin {
    constructor(page) {
        this.page = page;
    }

    async username(name) {
        const usernameField = this.page.locator('//label[text()="Username"]/../following-sibling::div/input');
        await expect(usernameField).toBeEditable();
        await usernameField.fill(name);
    }

    async userrole(role = 'Admin') {
        const roleDropdown = this.page.locator('//label[text()="User Role"]/../following-sibling::div/descendant::div[text()="-- Select --"]');
        await expect(roleDropdown).toBeVisible();
        await roleDropdown.click();

        if (role.toLowerCase() === 'admin') {
            const adminOption = this.page.locator('//div/span[text()="Admin"]');
            await expect(adminOption).toBeVisible();
            await adminOption.click();
        } else {
            const essOption = this.page.locator('//div/span[text()="ESS"]');
            await expect(essOption).toBeVisible();
            await essOption.click();
        }
    }

    async employee_name(name = 'Peter Mac Anderson') {
        const empField = this.page.getByPlaceholder('Type for hints...');
        await expect(empField).toBeEditable();
        await empField.fill(name);
    }

    async status(status = 'Enabled') {
        const statusDropdown = this.page.locator('//label[text()="Status"]/../following-sibling::div/descendant::div[text()="-- Select --"]');
        await expect(statusDropdown).toBeVisible();
        await statusDropdown.click();

        if (status.toLowerCase() === 'enabled') {
            const enabledOption = this.page.locator('//div/span[text()="Enabled"]');
            await expect(enabledOption).toBeVisible();
            await enabledOption.click();
        } else {
            const disabledOption = this.page.locator('//div/span[text()="Disabled"]');
            await expect(disabledOption).toBeVisible();
            await disabledOption.click();
        }
    }

    async reset() {
        const resetBtn = this.page.getByRole('button', { name: ' Reset ' });
        await expect(resetBtn).toBeVisible();
        await resetBtn.click();
    }

    async search() {
        const searchBtn = this.page.getByRole('button', { name: ' Search ' });
        await expect(searchBtn).toBeEnabled();
        await searchBtn.click();
    }

    async delete(name = 'SonGoku') {
        const deleteBtn = this.page.locator(`//div[@class="oxd-table-row oxd-table-row--with-border"]/div/following-sibling::div/div[text()="${name}"]/../following-sibling::div/descendant::button/i[@class="oxd-icon bi-trash"]`);
        await expect(deleteBtn).toBeVisible();
        await deleteBtn.click();
    }

    async confirmdelete() {
        const confirmBtn = this.page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin"]');
        await expect(confirmBtn).toBeEnabled();
        await confirmBtn.click();

        // Assertion after deletion (example: check toast or table row gone)
        const successToast = this.page.locator('p.oxd-toast-content-text');
        await expect(successToast).toBeVisible();
        await expect(successToast).toHaveText('Success');
    }

    async Languages() {
        const qualificationsTab = this.page.locator('//span[text()="Qualifications "]');
        await expect(qualificationsTab).toBeVisible();
        await qualificationsTab.click();

        const languagesTab = this.page.locator('//a[text()="Languages"]');
        await expect(languagesTab).toBeVisible();
        await languagesTab.click();
    }
};
