import { test } from "@playwright/test";    
import { Loginpage } from "../../POM_Pages/Loginpage";
import { Logoutpage } from "../../POM_Pages/Logoutpage";
import { Languagepage } from "../../POM_Pages/Languagepage"
import { Adminpage } from "../../POM_Pages/Adminpage";
import { Sidebar } from "../../POM_Pages/Sidebar";
import { exceldata } from "../../Utility/exceldata";

test('language checkboxs', async ({ page }) => {
    test.slow()

    const cell = new exceldata()
    let un = await cell.getCellValue('TestData/TestData.xlsx', 'Sheet1', 1, 2)
    let pass = await cell.getCellValue('TestData/TestData.xlsx','Sheet1', 1, 3)

    const login = new Loginpage(page);
    await login.gotologinpage(un, pass);

    const sidebar = new Sidebar(page)
    await sidebar.Admin()

    const adminpg = new Adminpage(page)
    await adminpg.Languages()

    const languagepage = new Languagepage(page)
    await languagepage.select()

    const logout = new Logoutpage(page)
    await logout.loggingout()
});
