import {test, Page, expect } from "@playwright/test";
import { promises } from "fs";
import { createRandomUserData } from "./helper.ts";
import { HomePage } from '../../.vscode/Objects/HomePage';
import { register } from "module";
import { SignInPage } from "../../.vscode/Objects/SignInPage.ts";
import { LoginPage } from "../../.vscode/Objects/LoginPage.ts";
import path from "path";
import { userLogin } from "./fixtures/baseFixture.ts";

const userData  = createRandomUserData();

userLogin('some regist1', async({page, context}) => {
  await page.goto('https://demo.learnwebdriverio.com/');
  const loginPage = new LoginPage(page);
  const register = new SignInPage(page);

  await loginPage.clickSignUp();
  // await context.addCookies([
  //   {
  //     name: 'qa-dojo',
  //     value: 'this is my testing cookies',
  //     url: 'https://demo.learnwebdriverio.com/',
  //   },
  // ])
  await register.fillInputFields(userData);
  await register.clickSignInButton();
  console.log(await context.cookies());

  await page.context().storageState({
    path: `test/condulit-tet/.auth/${userData.name}.auth.json`,
  })
  

})

test("приклад зберігання cookies в json файл", async ({ page, context }) => {
  await page.goto("https://www.zara.com/ua/uk/");

  context.addCookies
  // цей блок коду натискає кнопку прийняти тільки необхідні і чекає відповіді від сервера
  const responsePromise = page.waitForResponse(RegExp("/consentreceipts"));
  await page.locator("#onetrust-reject-all-handler").click();
  // const responsePromise = page.waitForResponse((response) =>
  //   response.url().includes("/consentreceipts") && response.status() === 200
  // );

  await responsePromise;

  const response = await responsePromise;
  const body = await response.json();
  const cookies = await context.cookies(); // записуємо всі кукі в змінну cookies
  const myCookie = cookies.filter((value) => value.name === 'my cookies');
  console.log(cookies);
  
  const directoryPath = path.join("tests", "condulit-tests", ".cookies");
  await promises.mkdir(directoryPath, { recursive: true });

  // за допомогою бібліотеки fs і обʼєкту promises ми записуємо кукі у файл zara.cookies.json
  await promises.writeFile(
    "tests/condulit-tests/.cookies/zara.cookies.json",
    JSON.stringify(cookies)
  );

});