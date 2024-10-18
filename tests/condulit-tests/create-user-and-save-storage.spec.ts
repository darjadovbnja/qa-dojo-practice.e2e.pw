import test, { expect } from "@playwright/test";
import { promises } from "fs";
import { createRandomUserData } from "./helper.ts";
import { HomePage } from '../../.vscode/Objects/HomePage';
import { register } from "module";
import { SignInPage } from "../../.vscode/Objects/SignInPage.ts";
import { LoginPage } from "../../.vscode/Objects/LoginPage.ts";

const userData  = createRandomUserData();

test('some regist1', async({page}) => {
  const loginPage = new LoginPage(page);
  const register = new SignInPage(page);

  await loginPage.clickSignUp();
  await register.fillInputFields(userData);
  await register.clickSignInButton();
})

test("приклад зберігання cookies в json файл", async ({ page, context }) => {
  await page.goto("https://www.zara.com/ua/uk/");

  // цей блок коду натискає кнопку прийняти тільки необхідні і чекає відповіді від сервера
  const responsePromise = page.waitForResponse(RegExp("/consentreceipts"));
  await page.locator("#onetrust-reject-all-handler").click();
  await responsePromise;

  const response = await responsePromise;
  const body = await response.json();
  const cookies = await context.cookies(); // записуємо всі кукі в змінну cookies
  console.log(cookies);
  

  // за допомогою бібліотеки fs і обʼєкту promises ми записуємо кукі у файл zara.cookies.json
  await promises.writeFile(
    "tests/condulit-tests/.cookies/zara.cookies.json",
    JSON.stringify(cookies)
  );
});