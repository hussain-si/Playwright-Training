import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage.ts";
import { HomePage } from "../pages/homePage.ts";

test('Homepage functionality test', async ({ page }) =>{

    await page.goto('https://crio-qkart-frontend-qa.vercel.app/login');
    const Login = new loginPage(page);
    await Login.login('Admin10000', 'Admin10000');
    
    const home = new HomePage(page);
    await expect(home.qkartLogo).toBeVisible();

    // search for a product and verify the search box reflects the query
    await home.searchProduct('shoe');
    await expect(home.searchBox).toHaveValue('shoe');

    // choose a size and verify dropdown value
    await home.selectSize('8');
    await expect(home.sizeDropdown).toHaveValue('8');

    // add first item to cart and ensure the button click worked
    await home.addToCart(0);
    // (optionally) you could check that some toast/confirmation appears here

    // clear search and confirm the box is reset
    await home.clearSearch();
    await expect(home.searchBox).toHaveValue('');

    // add another item and try adding twice to trigger 'already in cart' message
    await home.addToCart(2);
    await home.addToCart(2);

    // await expect(await home.itemInCartMessage).toBeVisible();
    // await expect(await home.itemInCartMessage).toContainText("Item already in cart");

    // proceed to checkout and assert that checkout button navigates accordingly (could add URL check)
    await home.checkout();
    await expect(page).toHaveURL(/checkout/);

})