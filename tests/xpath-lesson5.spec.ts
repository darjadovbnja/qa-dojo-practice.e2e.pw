import { test, expect } from '@playwright/test'

test('1215 - create user, it should be logged', async ({ page }) => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const username = 'dasha' + randomNumber;

    await page.goto('https://demo.learnwebdriverio.com/');
    await page.locator('//a[contains(text(), "Sign up")]').click();

    await page.locator('//input[@placeholder="Username"]').fill(username);
    await page.locator('//input[@placeholder="Email"]').fill(`Test${randomNumber}@g.com`)
    await page.locator('//input[@placeholder="Password"]').fill('1234');
    await page.locator('//button[contains(text(), "Sign up")]').click();

    expect (page.locator(`//a[contains(text(), ${username})]`)).toBeVisible();
});
