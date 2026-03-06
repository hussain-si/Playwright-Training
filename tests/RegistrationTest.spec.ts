import {test,expect} from "@playwright/test"
import { RegistrationPage } from "../pages/RegistrationPage";

test('Registration functionality test',async ({page})=>{

    await page.goto('https://crio-qkart-frontend-qa.vercel.app/register');

    const Registrationpage = new RegistrationPage(page);
    await Registrationpage.Registration('KHarsha','KHarsha01','KHarsha01');


})