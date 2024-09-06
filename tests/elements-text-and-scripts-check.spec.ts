import { test, expect } from '@playwright/test';

test('scripts on the into page', async ({ page }) => {
await page.goto('https://playwright.dev/docs/intro');
await expect(page.getByRole('article')).toContainText('npm init playwright@latest');
await expect(page.getByRole('article')).toContainText('playwright.config.tspackage.jsonpackage-lock.jsontests/ example.spec.tstests-examples/ demo-todo-app.spec.ts');
await expect(page.getByRole('article')).toContainText('npx playwright test');
await expect(page.getByRole('article')).toContainText('npx playwright show-report');
await expect(page.getByRole('article')).toContainText('npm install -D @playwright/test@latest# Also download new browser binaries and their dependencies:npx playwright install --with-deps');
});