import {test,expect} from "@playwright/test"
import { loginPage } from "../pages/loginPage";

test('Login functionality test',async ({page})=>{

    await page.goto('https://crio-qkart-frontend-qa.vercel.app/login');

    const Login = new loginPage(page);
    await Login.login('Admin10000','Admin10000');
    await expect(6).tobe(4);

    //demo
})
