// 1. Перехід на сторінку HomePage
// 2. клік по signUp
// 3. заповнення обовʼязкових полів 
// 4. клік по Sign Up
// 5. перевірити що юзер зареєстрований
import { expect, Page, test } from '@playwright/test';
import { BasePage } from '../../.vscode/Objects/BasePage';
import { LoginPage } from '../../.vscode/Objects/LoginPage';
import { SignUpPage } from '../../.vscode/Objects/SignupPage';
import { HomePage } from '../../.vscode/Objects/HomePage';
import { timeStamp } from 'console';


test('sign up', async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('https://demo.learnwebdriverio.com/');
    await loginPage.clickSignUp();
    
    const timestamp = Date.now();
    const signUpPage = new SignUpPage(page);
    const userName = `userNameSample${timestamp}`;    
    const userEmail = `userNameSample${timestamp}@gmail.com`;    
    const userPassword = userName+userEmail 

    await signUpPage.fillUsername(userName);
    await signUpPage.fillEmail(userEmail);
    await signUpPage.fillPassword(userPassword);
    await signUpPage.signUpButton.click();
    
    const homePage = new HomePage(page);
    await expect(userName?.toLowerCase()).toBe(userName.toLowerCase());
})