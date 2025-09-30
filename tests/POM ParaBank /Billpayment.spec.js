import{test} from '@playwright/test'
import { Parabanklogin } from '../../POM_Pages/Parabanklogin'
import { Billpay } from '../../POM_Pages/Billpay'
import billpaydata from '../../TestData/billpaydata.json'

billpaydata.forEach(({name,payeraddress,cityname,statename,loczipcode,phnumber,accountnumber,verifyaccountnumber,transferamount,fromaccountnumber}, index) => {
    test(`Transfer fund from account @Transferfund ${index}`, async({page})=>{
        const banklogin = new Parabanklogin(page)
        await banklogin.loggin('john', 'demo')

        const bill = new Billpay(page)
        await bill.transferfund(name, payeraddress,cityname,statename,loczipcode,phnumber,accountnumber,verifyaccountnumber,transferamount,fromaccountnumber)
    })
});
