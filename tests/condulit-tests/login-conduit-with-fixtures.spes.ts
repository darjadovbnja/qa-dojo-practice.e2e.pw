import { HomePage } from '../../.vscode/Objects/HomePage';
import { LoginPage } from '../../.vscode/Objects/LoginPage_renamed';
import { SignInPage } from '../../.vscode/Objects/SignInPage';
import { ConsoleMessage, test } from '@playwright/test';
import { userLogin } from './fixtures/baseFixture.ts';

userLogin ('login - should be logged', async({page, signInPage }) => {
    page.on('console', async (msg) => {});
});

test('check console', async({page}) => {
    page.on('console', (msg: ConsoleMessage) => {
        if (msg.text() === 'error' && msg.text() ){
            throw new Error(`on the page ${page.url()} error was thrown in console ${msg.text()}`)
        }
        //console.log(msg.text); 
    })
    await page.goto('https://telemart.ua/');
    await page.reload();
})