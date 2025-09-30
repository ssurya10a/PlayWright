const { expect } = require('@playwright/test');

export class Billpay {
    constructor(page) {
        this.page = page;
        this.billpay = page.locator('//a[text()="Bill Pay"]');
        this.payername = page.locator('//input[@name="payee.name"]');
        this.address = page.locator('//input[@name="payee.address.street"]');
        this.city = page.locator('//input[@name="payee.address.city"]');
        this.state = page.locator('//input[@name="payee.address.state"]');
        this.zipcode = page.locator('//input[@name="payee.address.zipCode"]');
        this.phonenumber = page.locator('//input[@name="payee.phoneNumber"]');
        this.account = page.locator('//input[@name="payee.accountNumber"]');
        this.verifyaccount = page.locator('//input[@name="verifyAccount"]');
        this.amount = page.locator('//input[@name="amount"]');
        this.fromaccount = page.locator('//select[@name="fromAccountId"]');
        this.sendpayment = page.locator('//input[@value="Send Payment"]');
    }

    async transferfund(name, payeraddress, cityname, statename, loczipcode, phnumber, accountnumber, verifyaccountnumber, transferamount, fromaccountnumber) {
        // Click Bill Pay link
        await expect(this.billpay).toBeVisible();
        await this.billpay.click();

        // Fill payer details
        await expect(this.payername).toBeEditable();
        await this.payername.fill(name);

        await expect(this.address).toBeEditable();
        await this.address.fill(payeraddress);

        await expect(this.city).toBeEditable();
        await this.city.fill(cityname);

        await expect(this.state).toBeEditable();
        await this.state.fill(statename);

        await expect(this.zipcode).toBeEditable();
        await this.zipcode.fill(loczipcode);

        await expect(this.phonenumber).toBeEditable();
        await this.phonenumber.fill(phnumber);

        await expect(this.account).toBeEditable();
        await this.account.fill(accountnumber);

        await expect(this.verifyaccount).toBeEditable();
        await this.verifyaccount.fill(verifyaccountnumber);

        await expect(this.amount).toBeEditable();
        await this.amount.fill(transferamount);

        await expect(this.fromaccount).toBeVisible();
        await this.fromaccount.selectOption({ value: fromaccountnumber });

        // Click Send Payment
        await expect(this.sendpayment).toBeEnabled();
        await this.sendpayment.click();

        // Optional: Assert successful payment message
        const successMsg = this.page.locator('//*[contains(text(),"Payment Successful")]'); // Adjust selector if needed
        await expect(successMsg).toBeVisible();
    }
}
