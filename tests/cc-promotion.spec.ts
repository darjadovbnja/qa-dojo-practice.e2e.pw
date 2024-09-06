import { test, expect, Locator } from '@playwright/test';
import exp from 'constants';

test.beforeEach(async( {page} ) => {
  await page.goto('https://coffee-cart.app/')
})

test('cc-1 - promotion message', async ({ page }) => {
  const cupEspresso: Locator = page.locator("//div[@data-test='Espresso']");
  const cupMacchiato: Locator = page.locator("//div[@data-test='Espresso_Macchiato']")
  const cupCappuccino: Locator = page.locator("//div[@data-test='Cappuccino']")
  await cupEspresso.click();
  await cupMacchiato.click();
  await cupCappuccino.click();

  const confirmBonusButton: Locator = page.locator("//button[@class='yes']");
  const rejectBonusButton: Locator = page.locator("//button[@class='yes']/following-sibling::button[1]");

  await expect(confirmBonusButton).toBeVisible();
  await expect(rejectBonusButton).toBeVisible;

  const extraCup: Locator = page.locator("//span[contains(text(), 'extra cup')]");
  
  await expect(extraCup).toBeVisible();

});

test('cc-2 - skip promotion', async( {page} ) => {
  await page.locator('div[data-test="Espresso"]').click();
  await page.locator('div[data-test="Espresso_Macchiato"]').click();
  await page.locator('div[data-test="Cappuccino"]').click();
  await page.locator('.buttons>button.yes+button').click();
  await expect(page.getByLabel('Cart page')).toContainText('(3)');
});

test('cc-3 - accept promotion', async( {page} ) => {
  await page.locator('div[data-test="Espresso"]').click();
  await page.locator('div[data-test="Espresso_Macchiato"]').click();
  await page.locator('div[data-test="Cappuccino"]').click();
  await page.locator('div.buttons>button.yes').click();
  await expect(page.locator('a[aria-label="Cart page"]')).toContainText('(4)');
})