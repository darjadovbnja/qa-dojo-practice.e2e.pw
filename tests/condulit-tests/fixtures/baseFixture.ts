import {test} from '@playwright/test';
import { SignInPage } from '../../../.vscode/Objects/SignInPage';

type MyFixture = {
    signInPage: SignInPage;
    //userData: {email: string; password: string};
}

export const userLogin = test.extend<MyFixture>({
    signInPage: async ({ page }, use) => {
        const signInPage = new SignInPage(page);

        await use(signInPage)
    },
    context: async ({context}, use) => {
        context.addCookies([
            {
              name: 'qa-dojo',
              value: 'this is my testing cookies',
              url: 'https://demo.learnwebdriverio.com/',
            },
        ]);
        await use(context);

    },

    page: async ({ page }, use) => {
        
        const signInPage = new SignInPage(page);

        await signInPage.navigateToSignInPage();

        await signInPage.fillInputFields({email: '123', pass: '312'});
        }
        //userData: {email: '', password: ''},
});