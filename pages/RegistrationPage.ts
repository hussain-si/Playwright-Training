import { Locator,Page } from "@playwright/test";

export class RegistrationPage{

    page : Page;
    username : Locator;
    password : Locator;
    confirmpassword: Locator;
    RegistrationBtn : Locator;

    constructor(page : Page){
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.confirmpassword=page.locator('#confirmPassword');
        this.RegistrationBtn = page.locator('//button').nth(1);
    }

    async Registration(username : string, password : string,confirmpassword : string){
        await this.username.fill(username);
        await this.password.fill(password);
        if (password===confirmpassword){
        await this.confirmpassword.fill(confirmpassword);
        }
        await this.RegistrationBtn.click();
        await this.page.waitForTimeout(5000);
    }
}
