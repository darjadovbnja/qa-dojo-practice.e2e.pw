import { test, expect } from '@playwright/test';

test('page navigation', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.getByRole('button', { name: 'Node.js' }).click();
  await page.getByRole('button', { name: 'Node.js' }).click();
  await page.getByRole('link', { name: 'Node.js' }).click();
  await page.getByRole('link', { name: 'Community' }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.goto('https://playwright.dev/community/welcome');
  await page.goto('https://playwright.dev/docs/intro');
  await page.getByRole('link', { name: 'Running the Example Test', exact: true }).click();
  await page.getByRole('link', { name: 'Test use options' }).click();
  await page.goto('https://playwright.dev/docs/intro');
});