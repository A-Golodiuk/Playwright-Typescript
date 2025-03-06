import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly hotSellersText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hotSellersText = page.locator('text=Hot Sellers'); // Adjust based on the actual selector
    }

    async openHomepage() {
        await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    }

    async HomePageText() {
        return this.hotSellersText;
    }
}