import { test } from "@playwright/test";    
import { Loginpage } from "../../POM_Pages/Loginpage";
import { Logoutpage } from "../../POM_Pages/Logoutpage";
import { Sidebar } from "../../POM_Pages/Sidebar";
import { Recruitment } from "../../POM_Pages/Recruitmentpage";
import { exceldata } from "../../Utility/exceldata";

test('Recruitment filter', async ({ page }) => {
    test.slow()
    
    const cell = new exceldata()
    let un = await cell.getCellValue('TestData/TestData.xlsx', 'Sheet1', 1, 2)
    let pass = await cell.getCellValue('TestData/TestData.xlsx','Sheet1', 1, 3)

    const login = new Loginpage(page);
    await login.gotologinpage(un, pass);

    const sidebar = new Sidebar(page)
    await sidebar.Recruitment()

    await page.waitForTimeout(2000)
    
    const recruitment = new Recruitment
    await recruitment.search_candidates()

    await page.waitForTimeout(2000)
    
    const logout = new Logoutpage(page)
    await logout.loggingout()
});
