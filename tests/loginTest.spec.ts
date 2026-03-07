import {test,expect} from "@playwright/test";
import { loginPage } from "../pages/loginPage.ts";

test('Login functionality test',async ({page})=>{

    await page.goto('https://crio-qkart-frontend-qa.vercel.app/login');

    const Login = new loginPage(page);

    // Username required validation
    await Login.login('','');
    await expect(Login.notification).toBeVisible();
    await expect(Login.notification).toHaveText("Username is a required field");

    // Password required validation
    await Login.login('Admin10000','');
    await expect(Login.notification).toBeVisible();
    await expect(Login.notification).toHaveText("Password is a required field");

    // Username does not exist
    await Login.login('Admin1000','Admin10000');
    await expect(Login.notification).toBeVisible();
    await expect(Login.notification).toHaveText("Username does not exist");

    // Incorrect password
    await Login.login('Admin10000','Admin1000');
    await expect(Login.notification).toBeVisible();
    await expect(Login.notification).toHaveText("Password is incorrect");

    //Login 
    await Login.login('Admin10000','Admin10000');

    //Login Successfully
    await expect(Login.notification).toBeVisible();
    await expect(Login.notification).toHaveText("Logged in successfully");
})