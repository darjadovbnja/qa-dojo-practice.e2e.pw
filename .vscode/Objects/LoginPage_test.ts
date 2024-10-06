import test, { Page } from '@playwright/test';

class BasePage {
    private page: Page;
    public someElementXPath: string = '//*';
    protected someElementXPath2: string = '//*';

    constructor (page: Page) {
        this.page = page
    }
    click(){
        this.page.locator('').click();
    }
    navigate(url: string){
        this.page.goto(url);
    }
} 

class LoginPage extends BasePage{
    clickOnLoginButton(){
        
    }
}

test ('some test', async ({page}) => {
    const loginPage = new LoginPage(page);
    const somePage = new BasePage(page);
    somePage.someElementXPath
})




test('1215 - create user, it should be logged', async ({ page }) => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const username = 'Coach' + randomNumber;

    await page.goto('https://demo.learnwebdriverio.com/');
    await page.locator('//a[contains(text(), "Sign up")]').click();

    await page.locator('//input[@placeholder="Username"]').fill(username);
    await page.locator('//input[@placeholder="Email"]').fill(`Test${randomNumber}@gma.com`);
    await page.locator('//input[@placeholder="Password"]').fill('1234');
    await page.locator('//button[contains(text(), "Sign up")]').click();

    //expect(page.locator(`//a[contains(text(), '${username}')]`));

    const coffeeToAdd = 'Cappuccino';
    await page.locator(`//*[@class='list-header']/parent::ul//button[text()='+' and @aria-label="Add one ${coffeeToAdd}"]`).click();
});
function async(arg0: { page: any; }): any {
    throw new Error('Function not implemented.');
}

