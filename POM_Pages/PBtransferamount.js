import {expect} from '@playwright/test'
export class PBtransferamount{
    constructor(page){
        this.page = page
        this.transferpage = page.locator('//a[text()="Transfer Funds" and @href="transfer.htm"]')
        this.Amount = page.locator('//input[@id ="amount"]')
        this.fromaccount = page.locator('//select[@id ="fromAccountId"]')
        this.toaccount = page.locator('//select[@id ="toAccountId"]')
        this.transfer = page.locator('//input[@value="Transfer"]')
    }

    async transferammount(amount,fromaccountId,toaccountid){
        await expect(this.transferpage).toBeEnabled()
        await this.transferpage.click()

        await expect(this.Amount).toBeEditable()
        await this.Amount.fill(amount)

        await expect(this.fromaccount).toBeEditable()
        await this.fromaccount.selectOption(fromaccountId)

        await expect(this.toaccount).toBeEditable()
        await this.toaccount.selectOption(toaccountid)

        await expect(this.transfer).toBeEditable()
        await this.transfer.click()
    }
}