import { expect } from '@playwright/test';
import { timeStamp } from 'console';
import { test } from '../../tests/condulit-tests/fixtures/signUpFixture.ts';


test('sign up', async({loginPage, signInPage}) => {
    await loginPage.clickSignUp();
    
    const timestamp = Date.now();
    const userName = `userNameSample${timestamp}`;    
    const userEmail = `userNameSample${timestamp}@gmail.com`;    
    const userPassword = userName+userEmail 

    await signInPage.fillUsername(userName);
    await signInPage.fillEmail(userEmail);
    await signInPage.fillPassword(userPassword);
    await signInPage.signUpButton.click();
    
    await expect(userName?.toLowerCase()).toBe(userName.toLowerCase());
})