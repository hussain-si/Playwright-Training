import { Locator,Page } from "@playwright/test";

export class loginPage{

    page : Page;
    username : Locator;
    password : Locator;
    loginBtn : Locator;

    constructor(page : Page){
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('//button').nth(1);
    }

    async login(username : string, password : string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
        await this.page.waitForTimeout(10000);
    }
}
