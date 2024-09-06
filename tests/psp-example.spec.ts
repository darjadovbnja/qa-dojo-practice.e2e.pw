import { chromium, test, expect } from '@playwright/test';
import { loadavg } from 'node:os';
import { beforeEach } from 'node:test';

//hooks
test.beforeAll(async() => {
    console.log('This is before all');    
})

test.beforeEach(async ({ page }) => {
    console.log('this is before each');
    await page.goto('https://playwright.dev/'); 
})

test.describe('this is my first test suit', () => {
    test('#1 create user - it should have status', 
        {
            tag: ['@marketing']
        }, 
        async ( {page} ) => { // page - webpage or tab in browser
    
            //await page.goto("")
            
            await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
            await expect(page.getByRole('link', { name: 'Get started' })).toContainText("Get started");
            await expect(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('class', 'getStarted_Sjon');
            
        }
    );
    
    test('#2', 
        {
            tag: ['@marketing']
        }, 
        async ( {page} ) => { // page - webpage or tab in browser
    
         //   await page.goto("")
            await page.getByRole('link', { name: 'Get started' }).click();
            const pageHeader = page.locator('text=Installation').nth(1);
            await expect(pageHeader).toBeVisible();
        }
    );
})

//npx playwright codegen
//npx playwright test
//assert - общее (зачем этот тест) 
//expect -- проверка в тесте

//попросить Пашу дать заглушки для авторизации через гугл
//getByText --  
//fill() vs pressSequentially('text', {delay: 100});
//text rich area
//await чтобы возвращался объект, а не промис
//check cups ingredient (~40 мин)
