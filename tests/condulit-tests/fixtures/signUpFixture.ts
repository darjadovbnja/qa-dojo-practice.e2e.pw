import { HomePage } from "../../../.vscode/Objects/HomePage";
import { LoginPage } from "../../../.vscode/Objects/LoginPage"
import { SignInPage } from "../../../.vscode/Objects/SignInPage"
import { test as base} from '@playwright/test';

type signUpFixture = {
    loginPage: LoginPage;
    signInPage: SignInPage;
    homePage: HomePage;
}

export const test = base.extend<signUpFixture>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo('/');
        await use(loginPage);
    },

    signInPage: async({page}, use) => {
        const signInPage = new SignInPage(page);
        await use(signInPage);
    },

    homePage: async({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    }
})