import { test } from '@playwright/test';

test('search for product', async({page}) => {
    await page.goto('https://rozetka.com.ua/');
    await page.locator("input[name='search']").fill('monitor');
    await page.locator("input[name='search']").press('Enter');

    console.log('test');
    

    
})