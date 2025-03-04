import { Page,expect } from '@playwright/test';
import { HomePage } from './HomePage';
import { ProductPage } from './ProductPage';

export class CartPage {
    constructor(private page: Page) {}
    async goToCart() {
      const homePage = new HomePage(this.page)
      const productPage = new ProductPage(this.page)
      await homePage.openHomepage()
      await productPage.addProduct()
      await this.page.locator(".counter-number").click()
      await this.page.getByTitle("Proceed to Checkout").click()
      await this.page.fill('input[name="firstname"]', 'John');
      await this.page.fill('input[name="lastname"]', 'Doe');
      await this.page.fill('input[name="company"]', 'Test Corp');
      await this.page.fill('input[name="street[0]"]', '123 Test Street');
      await this.page.fill('input[name="city"]', 'New York');
      await this.page.selectOption('select[name="region_id"]', '43'); // Selects New York
      await this.page.fill('input[name="postcode"]', '10001');
      await this.page.fill('input[name="telephone"]', '1234567890');
      await this.page.fill('#customer-email', "lolkek@sd.ry")

    // Select Shipping Method
    const shippingMethod = this.page.locator('input[value="flatrate_flatrate"]');
    await shippingMethod.check();

    // Click Next to Continue to Payment
    const nextButton = this.page.getByRole('button', {name: "Next"});
    await expect(nextButton).toBeVisible();
    await nextButton.click();
    await this.page.getByRole('button', {name: "Place Order"}).click()
    const thankYouMessage = this.page.locator('h1.page-title span');
    await expect(thankYouMessage).toHaveText('Thank you for your purchase!');



    }
  }