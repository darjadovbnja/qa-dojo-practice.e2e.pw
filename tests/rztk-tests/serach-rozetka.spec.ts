import { expect, test } from '@playwright/test';

const arr = []; // for of
const object = {}; // for in

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
    test(`${data.testId}. Search for ${data.searchQuery}`, async({page}) => {
        await page.goto('https://rozetka.com.ua/');
        await page.locator("input[name='search']").fill(data.searchQuery);
        await page.locator("input[name='search']").press('Enter');
    
        const searchResult = page.locator(`//div[contains(@class, 'goods-tile__inner')]//a//img`).first();
    
        expect(searchResult.getAttribute('title')).toContain(data.searchResultWord);
            
    })
}