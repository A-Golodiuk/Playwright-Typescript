import { expect, Page } from '@playwright/test';
import { HomePage } from './HomePage';

export class ProductPage {
  constructor(private page: Page) {}
  async addProduct() {
    const homePage = new HomePage(this.page)
    await homePage.openHomepage()
    const gearMenu = this.page.getByRole('menuitem', { name: 'Gear' });
    await expect(gearMenu).toBeVisible();
    await gearMenu.click(); 
    const firstProduct = this.page.locator('.products-grid .product-item').nth(2);
    await expect(firstProduct).toBeVisible();

    // Click on the second product
    await firstProduct.click();

    // Wait for Add to Cart button to appear
    const addToCartButton = this.page.locator('button#product-addtocart-button');
    await expect(addToCartButton).toBeVisible();
    
    // Click Add to Cart
    await addToCartButton.click();
    await expect(this.page.locator(".counter-number")).toHaveText("1")
  }
}
