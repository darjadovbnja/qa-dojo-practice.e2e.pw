import { test, expect } from '@playwright/test';

test('components visibility', {tag:['@core']}, async ({ page }) => {
await page.goto('https://playwright.dev/');
await expect(page.getByLabel('GitHub repository')).toBeVisible();
await expect(page.getByLabel('Discord server')).toBeVisible();
await expect(page.getByLabel('Switch between dark and light')).toBeVisible();
await expect(page.getByRole('img', { name: 'Browsers (Chromium, Firefox,' })).toBeVisible();
await expect(page.locator('div').filter({ hasText: 'Chosen by companies and open' }).nth(4)).toBeVisible();
});