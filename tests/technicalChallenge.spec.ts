import { test, expect } from '@playwright/test';
import { PageManager } from '../PageObjects/pageManager';

test('Homepage should load and display Hot Sellers', async ({ page }) => {
  const pm = new PageManager(page)
  await pm.homePageTo().openHomepage(); // Ensure the homepage loads
  
  const hotSellersText = await pm.homePageTo().HomePageText();
  await expect(hotSellersText).toBeVisible(); // Assert that "Hot Sellers" is visible on the page
});

test("LoginPage should load correctly", async({ page }) => {
  const pm = new PageManager(page)
  await pm.loginPageTo().goToLogin();
  await pm.loginPageTo().login(); // Perform login with predefined credentials
});

test("Add product to cart", async({ page }) => {
  const pm = new PageManager(page)
  await pm.poductPageTo().addProduct(); //  Add a product to the cart and ensure it gets added
});
test("Checkout", async({ page }) => {
  const pm = new PageManager(page)
  await pm.cartPageTo().goToCart(); // Navigate to the cart and initiate the checkout process
});
