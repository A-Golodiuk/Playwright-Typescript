import { test, expect } from '@playwright/test';
import { HomePage } from '../PageObjects/HomePage';
import { LoginPage } from '../PageObjects/LoginPage';
import { ProductPage } from '../PageObjects/ProductPage';
import { CartPage } from '../PageObjects/CartPage';

test('Homepage should load and display Hot Sellers', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.openHomepage(); // Ensure the homepage loads
  
  const hotSellersText = await homePage.HomePageText();
  await expect(hotSellersText).toBeVisible(); // Assert that "Hot Sellers" is visible on the page
});

test("LoginPage should load correctly", async({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLogin();
    await loginPage.login(); // Perform login with predefined credentials
});

test("Add product to cart", async({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.addProduct(); //  Add a product to the cart and ensure it gets added
});
test("Checkout", async({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.goToCart(); // Navigate to the cart and initiate the checkout process
});