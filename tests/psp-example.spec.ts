import { expect, test } from '@playwright/test';

test ("create user and verify it", async ({ page }) => {
    await page.goto("");
    await page.getByRole('link', { name: 'Get started'}).click();

    expect(page.getByRole('link', { name: 'Get started'}))
});

test ('2 create urer and ferify it', async() => {
    console.log('test 2')
})