import { Locator, Page } from "@playwright/test";

export class HomePage {
    page: Page;
    qkartLogo: Locator;
    searchBox: Locator;
    sizeDropdown: Locator;
    addToCartBtn: Locator;
    checkoutBtn: Locator;
    itemInCartMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.qkartLogo = page.getByRole('link', { name: 'QKart-icon' });
        this.searchBox = page.getByRole('textbox', { name: 'Search for items/categories' });
        this.sizeDropdown = page.getByLabel('Size');
        this.addToCartBtn = page.locator('button:has-text("Add to cart")');
        this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });
        this.itemInCartMessage = page.locator('#notistack-snackbar');
    }

    async searchProduct(productName: string): Promise<void> {
        await this.searchBox.click();
        await this.searchBox.fill(productName);
    }

    async clearSearch(): Promise<void> {
        await this.searchBox.click();
        await this.searchBox.fill('');
        await this.searchBox.press('Enter');
    }

    async selectSize(size: string): Promise<void> {
        await this.sizeDropdown.selectOption(size);
    }

    async addToCart(index: number = 0): Promise<void> {
        await this.addToCartBtn.nth(index).click();
    }

    async checkout(): Promise<void> {
        await this.checkoutBtn.click();
    }
}
