import { test, expect } from '@playwright/test';

test.beforeEach(async( {page} ) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('div[data-test="Mocha"]').click();
  await page.locator('div[data-test="Espresso"]').click();
  await page.locator('div[data-test="Americano"]').click();
})

test('cc4-remove-item', async ({ page }) => {
  await page.locator('a[aria-label="Cart page"]').click();
  await page.locator('button[aria-label="Remove all Americano"]').click();
  await page.locator('button[aria-label="Remove all Espresso"]').click();
  await page.locator('button[aria-label="Remove all Mocha"]').click();
  await expect (page.locator('div p').filter({hasText: "No coffee"})).toBeVisible();
  await expect(page.locator('a[aria-label="Cart page"]')).toContainText('(0)');
});