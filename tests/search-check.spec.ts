import { test, expect } from '@playwright/test';

test('search', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('install');
  await page.getByRole('link', { name: 'Installing Playwright​' }).click();
  await expect(page.locator('#installing-playwright')).toContainText('Installing Playwright');
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('download');
  await page.getByRole('link', { name: 'Download', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Download');
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('api');
  await page.getByRole('link', { name: 'Mock APIs' }).click();
  await expect(page.locator('h1')).toContainText('Mock APIs');
});