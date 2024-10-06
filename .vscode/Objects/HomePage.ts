import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage'; 

export class HomePage extends BasePage{
    usernameButton: Locator;

    constructor(page: Page){
        super(page);
        this.usernameButton = this.page.locator("(//*[contains(@class, 'navbar-nav')]//*[contains(@class, 'nav-item')]/a[contains(@class, 'nav-link')])[4]");
    }
} 