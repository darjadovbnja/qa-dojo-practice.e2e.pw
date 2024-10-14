import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { TIMEOUT } from 'dns';

export class SignInPage extends BasePage {
    private userNameField: Locator;
    private emailField: Locator;
    private passwordField: Locator;
    private signInButton: Locator;
    signUpButton: Locator

    constructor(page: Page){
        super(page);
        this.userNameField = this.page.locator('[placeholder="Username"]');
        this.emailField = this.page.locator('[placeholder="Email"]');
        this.passwordField = this.page.locator('[placeholder="Password"]');
        this.signUpButton = this.page.locator("[class*='btn']");
        this.signInButton = this.page.locator("button");
    }

    async fillInputFields(userData?: { email: string; pass: string }) {
        if (!userData) {
            userData = createRandonUserData() || { email: '', pass: '' };  // Fallback to empty strings if undefined
        }
    
        await this.emailField.fill(userData.email);
        await this.passwordField.fill(userData.pass);
    
        return userData;
    }
    
    
    

    async fillUsername (userName: string){
        await this.userNameField.fill(userName);
    };

    async fillEmail (email: string){
        await this.emailField.fill(email);
    };

    async fillPassword (password: string){
        await this.emailField.fill(password);
    };

    async navigateToSignInPage(){
        await this.page.goto('/login');
    };

    async clickSignInButton() {
        await this.signInButton.click();
    }

} 

function createRandonUserData(): { email: string; pass: string; } | undefined {
    throw new Error('Function not implemented.');
}
