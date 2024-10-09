import {test} from '@playwright/test';
import { HomePage } from '../../.vscode/Objects/HomePage';
import { LoginPage } from '../../.vscode/Objects/LoginPage';
import { SignUpPage } from '../../.vscode/Objects/SignupPage';


test ('login - should be logged', async({page}) => {
    
    const singInPage = new SignUpPage(page);

})