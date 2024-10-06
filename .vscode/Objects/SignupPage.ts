import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { TIMEOUT } from 'dns';

export class SignUpPage extends BasePage {
    private userNameField: Locator;
    private emailField: Locator;
    private passwordField: Locator;
    signUpButton: Locator

    constructor(page: Page){
        super(page);
        this.userNameField = this.page.locator('[placeholder="Username"]');
        this.emailField = this.page.locator('[placeholder="Email"]');
        this.passwordField = this.page.locator('[placeholder="Password"]');
        this.signUpButton = this.page.locator("[class*='btn']");
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

} 