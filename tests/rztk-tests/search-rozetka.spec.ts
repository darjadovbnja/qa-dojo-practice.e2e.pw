import { expect, test } from '@playwright/test';

const testData = [
    {
        testId: 'rztk-001',
        searchQuery: 'Монитор',
        searchResultWord: 'Монитор',
    }, 
    {
        testId: 'rztk-002',
        searchQuery: 'Карта',
        searchResultWord: 'Карта',
    },
]

for (const data of testData) {
    test.describe.serial(`${data.testId}. Search for ${data.searchQuery}`, () => {
        test(`${data.testId} - should search and find ${data.searchQuery}`, async ({ page }) => {
            await page.goto('https://rozetka.com.ua/');
            await page.locator("input[name='search']").fill(data.searchQuery);
            await page.locator("input[name='search']").press('Enter');
        
            const searchResult = await page.locator(`//div[contains(@class, 'goods-tile__inner')]//a//img`).first();
            const titleAttribute = await searchResult.getAttribute('title');
        
            expect(titleAttribute).toContain(data.searchResultWord);
        });
    });
}
