import test, { expect } from "@playwright/test";
import { promises } from "fs";
import { createRandomUserData } from "./helper.ts";
import { RegisterPage } from "./HomePage";

test("working with cookies", async ({ page, context }) => {
  //додає кукі у контекст який використовує цей тест.
  await context.addCookies([
    {
      name: "qa-dojo",
      value: "this is my cookie testing",
      url: "https://demo.learnwebdriverio.com/",
    },
  ]);

  const allCookies = await context.cookies(); // повертає всі кукі які зараз існують в контексті виконання.

  const addedCookie = allCookies.find((value) => value.name === "qa-dojo"); // приклад використання метода find для знаходження cookie з name === qa-dojo

  await context.clearCookies({ name: "qa-dojo" }); // видаляє кукі за властивітю name
});

test("приклад зберігання cookies в json файл", async ({ page, context }) => {
  await page.goto("https://www.zara.com/ua/uk/");

  // цей блок коду натискає кнопку прийняти тільки необхідні і чекає відповіді від сервера
  const responsePromise = page.waitForResponse(RegExp("/consentreceipts"));
  await page.locator("#onetrust-reject-all-handler").click();
  await responsePromise;

  const cookies = await context.cookies(); // записуємо всі кукі в змінну cookies

  // за допомогою бібліотеки fs і обʼєкту promises ми записуємо кукі у файл zara.cookies.json
  await promises.writeFile(
    "tests/condulit-tests/.cookies/zara.cookies.json",
    JSON.stringify(cookies)
  );
});

test("приклад збереження сессії юзера", async ({ page, context }) => {
  const userData = createRandomUserData();

  const register = new RegisterPage(page);
  await register.navigateToSignUpPage();
  await register.fillInputFields(userData);

  const responsePromise = page.waitForResponse(RegExp("/api/users"));
  await register.clickSignUpButton();

  // очікуємо поки логін юзера буде зевершений за допомогою UI
  await expect(page.getByText(userData.name, { exact: false })).toBeVisible();

  // очікуємо поки реквест який створює юзера виконається
  const response = await responsePromise;
  expect(response.ok()).toBeTruthy();

  // після того як ми впевненились що юзер створений і залогінився, ми зберігаємо його сесію
  await page.context().storageState({
    path: `tests/condulit-tests/.auth/${userData.name}.storage.json`,
  });
});

test("приклад використання збереженох сессії юзера", async ({ browser }) => {
  const userData = createRandomUserData();

  // створюємо новий контекст який буде використовувати вже існуючий storageState
  const context = await browser.newContext({
    storageState: "tests/condulit-tests/.auth/sydni.auth.json", // шлях до збереженої раніше сессії
  });

  // створюємо нову пейджу (зверніть увагу що в цьому тесті використовується лише фікстура browser)
  const page = await context.newPage();

  await page.goto("https://demo.learnwebdriverio.com/");

  // сесія браузер буде використовувати стан який був створений раніше
});