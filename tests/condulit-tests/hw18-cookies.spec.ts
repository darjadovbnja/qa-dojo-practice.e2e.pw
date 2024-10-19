// ДЗ №18 

// 1. Створіть тест, який буде відкривати https://telemart.ua/  та отримувати всі cookies, встановлені на цій сторінці.
// 2. Додайте новий cookie зі значенням назва вашого улюбленого гурту : найкраща пісня.
// 3. Перевірте, що cookie було додано успішно.
// 4. Серед усіх кукі знайдіть кукі з name  = city_id і запишіть його value у змінну


// Підказка:

// page.context().cookies() для отримання cookies.
// page.context().addCookies() для додавання cookies.
// Array.find() для пошуку кукі у масиві 

import {Page, test, expect} from '@playwright/test';
import { log } from 'util';

test('get all cookies and save its value', async({page}) => {
    //отримати всі cookie
    await page.goto('https://telemart.ua/');
    let cookies = await page.context().cookies();
    //додати нові cookie
    await page.context().addCookies([{
        name: 'favorite_song',
        value: 'Maneskin_Caroline',
        domain: 'telemart.ua',
        path: '/',
        expires: 0,
    },
    {
        name: 'city_id',
        value: 'Boston',
        domain: 'telemart.ua',
        path: '/',
        expires: -1,
    }
]);

cookies = await page.context().cookies();
console.log(cookies);

//перевірити що дадано 
cookies.find(cookies => cookies.name === 'favorite_song');

//записати cityId в змінну та вивести в консоль
const cityIdCookie = cookies.find(cookies => cookies.name === 'city_id');
if (cityIdCookie){
    console.log(`CityId value is ${cityIdCookie.value}`);
}
else {
    console.log('CityId is not found');    
}
});