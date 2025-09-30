const { expect } = require('@playwright/test');

export class FlocusApp {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#onboarding-name');
        this.email = page.locator('//div[@class="input-group mb-3"]/input[@placeholder="name@example.com"]');
        this.password = page.locator('//div[@class="input-group mb-5"]/input[@placeholder="create password"]');
        this.login = page.locator('//button[text()="Continue"]');
        this.dashboard = page.locator('//button[text()="Go to Dashboard →"]');
    }

    async login(url, un, eml, pass, describeText = 'Working Professional') {
        // Navigate to URL
        await this.page.goto(url);
        await this.page.waitForLoadState('domcontentloaded'); // ensure page is ready

        // Fill onboarding details
        await expect(this.username).toBeEditable();
        await this.username.fill(un);

        await expect(this.email).toBeEditable();
        await this.email.fill(eml);

        await expect(this.password).toBeEditable();
        await this.password.fill(pass);

        // Click Continue/Login
        await expect(this.login).toBeEnabled();
        await this.login.click();

        // Wait for the onboarding option to appear and assert it
        const describeOption = this.page.locator(`//label[contains(text(),"${describeText}")]`);
        await expect(describeOption).toBeVisible();

        // Click Dashboard button
        await expect(this.dashboard).toBeEnabled();
        await this.dashboard.click();

        // Optional: Assert dashboard loaded successfully
        // Example: await expect(this.page).toHaveURL(/dashboard/);
    }
}
