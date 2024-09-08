import { test, expect } from '@playwright/test';

test('cc-6-item-appears-in-cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.locator('[data-test="Mocha"]').click();
  await page.getByLabel('Cart page').click();
 
  const coffeeTypes = ['Cappuccino', 'Espresso', 'Mocha'];
  for (const coffee of coffeeTypes) {
    await expect(page.locator('div').filter({ hasText: new RegExp(`^${coffee}$`) })).toBeVisible();
  } 
});