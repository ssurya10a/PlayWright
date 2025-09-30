import{test, expect} from '@playwright/test';
import { Loginpage } from '../../POM_Pages/Loginpage';
import { Logoutpage } from '../../POM_Pages/Logoutpage';
import { exceldata } from '../../Utility/exceldata';

test('login', async({page}) => {
    const cell = new exceldata()
    let un = await cell.getCellValue('TestData/TestData.xlsx', 'Sheet1', 1, 2)
    let pass = await cell.getCellValue('TestData/TestData.xlsx','Sheet1', 1, 3)
    // create object of login
    const login = new Loginpage(page);
    await login.gotologinpage(un, pass);

    const logout = new Logoutpage(page);
    await logout.loggingout();
});