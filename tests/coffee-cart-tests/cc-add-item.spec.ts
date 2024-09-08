import { test, expect, Locator } from '@playwright/test';

test.beforeEach(async( {page} ) => {
  await page.goto('https://coffee-cart.app/')
});

test('cc-5-match-price-in-cart', async ({ page }) => {
  const initialTotalText = await page.locator("//button[@data-test='checkout']").textContent();
  const initialTotal: number = parseFloat(initialTotalText.match(/\$(\d+\.\d+)/)[1]);
  const coffeeCupCappuccino: Locator = page.locator("//div[@aria-label='Cappuccino']");
  const cappuccinoPriceText = await page.locator("//h4[contains(text(), 'Cappuccino')]/small").textContent();
  const cappuccinoPrice: number = parseFloat(cappuccinoPriceText?.replace('$', ''));

  await coffeeCupCappuccino.click();

  const finalTotalText = await page.locator('button.pay').textContent();
  const finalTotal: number = parseFloat(finalTotalText.match(/\$(\d+\.\d+)/)[1]);

  await expect(finalTotal).toEqual(initialTotal + cappuccinoPrice, 2);
});

test('cc-6-item-added-to-cart-branch1', async ({ page }) => {
    const coffeeCupEspresso: Locator = page.locator("div.cup-body[aria-label='Espresso']");
    const coffeeCupCappuccino: Locator = page.locator("div.cup-body[aria-label='Cappuccino']");
    const coffeeCupMocha: Locator = page.locator("div.cup-body[aria-label='Mocha']")
    const cartPage: Locator = page.locator("[aria-label='Cart page']")

    await coffeeCupEspresso.click();
    await coffeeCupCappuccino.click();
    await coffeeCupMocha.click();
    await cartPage.click();

    const coffeeTypes = ['Espresso', 'Cappuccino', 'Mocha'];
    for (const coffee of coffeeTypes) {
        await expect(page.locator('div').filter({ hasText: new RegExp(`^${coffee}$`) })).toBeVisible();
}
  });
