import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    private signInButton: Locator;
    private signUpButton: Locator;

    constructor(page: Page) {
        super(page);
        this.signInButton = this.page.locator("//*[contains(@class, 'navbar navbar-light')]//a[contains(@href, 'login')]");
        this.signUpButton = this.page.locator("//*[contains(@class, 'navbar-light')]//a[contains(@href, '/register')]");
    }

    async clickSignIn() {
        await this.signInButton.click();
    }

    async clickSignUp() {
        await this.signUpButton.click();
    }

    
}