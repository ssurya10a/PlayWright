import { test } from "allure-playwright";
import { Parabanklogin } from "../../POM_Pages/Parabanklogin";
import { PBtransferamount } from "../../POM_Pages/PBtransferamount";

test('Transfer fund', async({page})=>{
    const login = new Parabanklogin(page)
    await login.loggin('songoku', 'goku')

    const transfer = new PBtransferamount(page)
    await transfer.transferammount('10', '14787', '14454')
})