import { test } from "@playwright/test";    
import { Add_user } from "../../POM_Pages/Add_user";
import { Loginpage } from "../../POM_Pages/Loginpage";
import { Sidebar } from "../../POM_Pages/Sidebar";
import { Adminpage } from "../../POM_Pages/Adminpage";
import { Logoutpage } from "../../POM_Pages/Logoutpage";
import oranagehrmadd_delete from "../../TestData/oranagehrmadd_delete.json";
import { celldata } from "../../Utility/exceldata";

test('create account using Excel', async ({ page }) => {
    
    const cell = new celldata()
    let un = await cell.getCellValue('TestData/TestData.xlsx', 'Sheet1', 1, 2)
    let pass = await cell.getCellValue('TestData/TestData.xlsx','Sheet1', 1, 3)
    let role = await cell.getCellValue('TestData/TestData.xlsx','Sheet1', 2, 1)
    let empname = await cell.getCellValue('TestData/TestData.xlsx','Sheet1', 2, 2)
    let status = await cell.getCellValue('TestData/TestData.xlsx','Sheet1', 2, 3)
    let username = await cell.getCellValue('TestData/TestData.xlsx','Sheet1', 2, 4)
    let password = await cell.getCellValue('TestData/TestData.xlsx','Sheet1', 2, 5)
    let confirmpassword = await cell.getCellValue('TestData/TestData.xlsx','Sheet1', 2, 6)
    

    const login = new Loginpage(page);
    await login.gotologinpage(un, pass);

    const sidebar = new Sidebar(page)
    await sidebar.Admin()

    const newuser = new Add_user(page);
    await newuser.adduser();
    await newuser.role(role);
    await newuser.empname(empname);
    await newuser.status(status);
    await newuser.username(username);
    await newuser.password(password);
    await newuser.confirmpassword(confirmpassword);
    await newuser.save();
    
    await sidebar.Admin()

    const adminpg = new Adminpage(page)
    await adminpg.username(username)
    await adminpg.userrole(role)
    await adminpg.status(status)
    await adminpg.search()

    const logout = new Logoutpage(page)
    await logout.loggingout()
});

test('create account using Excel cell index', async ({ page }) => {
    
    const cell = new exceldata('TestData/TestData.xlsx', 'Sheet1')
    let un = await cell.getCellValue(1, 2)
    let pass = await cell.getCellValue(1, 3)
    let role = await cell.getCellValue(2, 1)
    let empname = await cell.getCellValue(2, 2)
    let status = await cell.getCellValue(2, 3)
    let username = await cell.getCellValue(2, 4)
    let password = await cell.getCellValue(2, 5)
    let confirmpassword = await cell.getCellValue(2, 6)
    

    const login = new Loginpage(page);
    await login.gotologinpage(un, pass);

    const sidebar = new Sidebar(page)
    await sidebar.Admin()

    const newuser = new Add_user(page);
    await newuser.adduser();
    await newuser.role(role);
    await newuser.empname(empname);
    await newuser.status(status);
    await newuser.username(username);
    await newuser.password(password);
    await newuser.confirmpassword(confirmpassword);
    await newuser.save();

    await sidebar.Admin()

    const adminpg = new Adminpage(page)
    await adminpg.username(username)
    await adminpg.userrole(role)
    await adminpg.status(status)
    await adminpg.search()

    const logout = new Logoutpage(page)
    await logout.loggingout()
});

oranagehrmadd_delete.forEach(({un, pass, role, empname, status, username, password, confirmpassword}, index)=>{

    test(`create account using json ${index}`, async ({ page }) => {
    
    const login = new Loginpage(page);
    await login.gotologinpage(un, pass);

    const sidebar = new Sidebar(page)
    await sidebar.Admin()

    const newuser = new Add_user(page);
    await newuser.adduser();
    await newuser.role(role);
    await newuser.empname(empname);
    await newuser.status(status);
    await newuser.username(username);
    await newuser.password(password);
    await newuser.confirmpassword(confirmpassword);
    await newuser.save();

    await sidebar.Admin()

    const adminpg = new Adminpage(page)
    await adminpg.username(username)
    await adminpg.userrole(role)
    await adminpg.status(status)
    await adminpg.search()

    const logout = new Logoutpage(page)
    await logout.loggingout()
    });
});