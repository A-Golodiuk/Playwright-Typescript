import { Page,expect } from '@playwright/test';
import { HomePage } from './HomePage';

export class LoginPage {
  constructor(private page: Page) {}
  async goToLogin() {
    const homePage = new HomePage(this.page)
    await homePage.openHomepage()
    const signInLink = this.page.getByRole('link', {name: "Sign In"})
    await signInLink.waitFor({state: 'visible'})
    await signInLink.click()
  }
  async login(){
    await this.page.getByTitle("Email").fill("playd232323@gmail.com")
    await this.page.getByTitle('Password').fill("Tel318493!")
    await this.page.getByRole('button', {name: "Sign In"}).click()
    const changeButton = this.page.locator('button[data-action="customer-menu-toggle"]').nth(0);
    await expect(changeButton).toBeVisible();
    
  }
}