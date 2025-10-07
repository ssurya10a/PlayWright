import { test } from "@playwright/test";
import { celldata } from "../../Utility/exceldata";
import { rowdata, alldata } from "../../Utility/exceldata";
import testdata from "../../TestData/testdata.json";
import { qsplogin } from "../../POM_Pages/qsplogin";
import { saucedemo } from "../../POM_Pages/saucedemo";
import saucedemologin from "../../TestData/sausedemologin.json";
import flocusapplogin from "../../TestData/flocusapplogin.json";
import { flocusapp } from "../../POM_Pages/flocusapp";


test('Read Excel Cell data', async () => {
    const cell = new celldata()
    let cellvalue = await cell.getCellValue('TestData/TestData.xlsx', 'Sheet1', 1, 2)
    console.log(cellvalue)

});


test('Read Excel row data', async()=>{
    const row = new rowdata()
    const rowdatavalue = await row.getRowValue('TestData/TestData.xlsx', 'Sheet1')
    console.log(rowdatavalue)
})

test('Read All the data in a sheet', async()=>{
    const excel = new alldata()
    const total = await excel.getalldata('TestData/TestData.xlsx', 'Sheet1')
    console.log(total)
})

// qspiders demoapps login
testdata.forEach(({url, name, email, password}, index) => {
    test(`json loop execution ${index}`, async({page})=> {
        let login = new qsplogin(page)
        await login.accountcreate(url,name, email, password)
        await page.waitForTimeout(2000)
    })
});

// sause demo
saucedemologin.forEach(({url, username, password}, index) => {
    test(`sause login ${index}`, async({page}) => {
        let sauce = new saucedemo(page)
        await sauce.loggin(url, username, password)
    })
});

flocusapplogin.forEach(({url, username, email, password, describe}, index) => {
    test(`demoapp_login ${index}`, async({page}) => {
        test.slow()
        let sauce = new flocusapp(page)
        await sauce.loggin(url, username, email, password, describe)
    })
});

