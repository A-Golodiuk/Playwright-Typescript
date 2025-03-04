import { Page,expect } from '@playwright/test';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { ProductPage } from './ProductPage';
import { CartPage } from './CartPage';

export class PageManager{
    private readonly page: Page
    private readonly homePage: HomePage
    private readonly loginPage: LoginPage
    private readonly productPage: ProductPage
    private readonly cartPage: CartPage 

    constructor(page:Page){
        this.page = page
        this.homePage = new HomePage(this.page)
        this.loginPage = new LoginPage(this.page)
        this.productPage = new ProductPage(this.page)
        this.cartPage = new CartPage(this.page)

    }
    homePageTo(){
        return this.homePage
    }
    loginPageTo(){
        return this.loginPage
    }
    poductPageTo(){
        return this.productPage
    }
    cartPageTo(){
        return this.cartPage
    }
}