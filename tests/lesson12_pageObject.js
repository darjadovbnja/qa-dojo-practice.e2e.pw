//https://demo.learnwebdriverio.com/register

export function LoginPage(page) {
    this.page = page;

    this.usernameSelector = '//input[@placeholder="Username"]';
    this.emailSelector = '//input[@placeholder="Email"]';
    this.passwordSelector = '//input[@placeholder="Password"]';
    this.signUpButtonSelector = '//button[contains(text(), "Sign up")]';
}

LoginPage.prototype.login = async function (username: string, email: string, pass: string) {
    await this.page.locator(this.usernameSelector).fill(username);
    await this.page.locator(this.emailSelector).fill(email);
    await this.page.locator(this.passwordSelector).fill(pass);
    await this.page.locator(this.signUpButtonSelector).click();    
}

