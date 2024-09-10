import { test, expect } from '@playwright/test';

// test.beforeEach(async( {page} ) => {
//   await page.goto('https://coffee-cart.app/')
// });

test('cc-7-ingredient-match', async( {page} ) => {
  await page.goto('https://coffee-cart.app/')  
  const coffeTypes = ['[data-test="Cappuccino"]', '[data-test="Americano"]'];

  for (const cup of coffeTypes) {
    const cupIng = page.locator(cup);
    const text1 = await cupIng.textContent();
    console.log(text1);
    const espressoText = await page.locator('.ingredient.espresso.disabled-hover').textContent();

    if (text1 === espressoText) {
      console.log('text1 matches the espresso ingredient text');
  } else {
      console.log('text1 does not match the espresso ingredient text');
  }


     
   // const cupIng = await page.locator(cup).textContent();

  }
})

