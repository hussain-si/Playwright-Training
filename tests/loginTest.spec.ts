import {test,expect} from "@playwright/test"
import { loginPage } from "../pages/loginPage";

test('Login functionality test',async ({page})=>{

    await page.goto('https://crio-qkart-frontend-qa.vercel.app/login');

    const Login = new loginPage(page);
    
    // Username required validation
    await Login.login('','');
    await expect(Login.usernameError).toBeVisible();
    await expect(Login.usernameError).toHaveText("Username is a required field");

    // Password required validation
    await Login.login('Admin10000','');
    await expect(Login.passwordError).toBeVisible();
    await expect(Login.passwordError).toHaveText("Password is a required field");

    // Username does not exist
    await Login.login('Admin1000','Admin10000');
    await expect(Login.usernameNotExist).toBeVisible();
    await expect(Login.usernameNotExist).toHaveText("Username does not exist");

    // Incorrect password
    await Login.login('Admin10000','Admin1000');
    await expect(Login.passwordNotCorrect).toBeVisible();
    await expect(Login.passwordNotCorrect).toHaveText("Password is incorrect");

    //Login 
    await Login.login('Admin10000','Admin10000');

    //Login Successfully
    await expect(Login.loginSuccess).toBeVisible();
    await expect(Login.loginSuccess).toHaveText("Logged in successfully");
})