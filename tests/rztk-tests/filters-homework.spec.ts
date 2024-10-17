import { test, expect } from '@playwright/test';


// написати параметризований тест для сторінки роботи з фільтрами на розетці

// кожен параметризований тест повинен проставляти ту кількість галочок по категорії яку ви передаєте в якості параметра тесту: 

// тобто у вас повинно бути мінімум три параметри

// тест id, категорія, кількість проставлених чек боксів по категорії.

// https://hard.rozetka.com.ua/ua/computers/c80095/

const dataTest = [
    {
        testId: 'rztk-001',
        category: 'producer',
        checkboxesCount: 3 // кількість чекбоксів, яку треба вибрати
    },
    {
        testId: 'rztk-002',
        category: 'pc_processors',
        checkboxesCount: 2
    },
    {
        testId: 'rztk-003',
        category: 'video_card',
        checkboxesCount: 4
    }
]

for (const data of dataTest) {
    test(`Filter test ${data.testId} for category ${data.category}`, async ({ page }) => {
        await page.goto('https://hard.rozetka.com.ua/ua/computers/c80095/');

        // Пошук категорії фільтра на основі параметра category
        const filterCategory = await page.locator(`[data-filter-name="${data.category}"]`);
        await filterCategory.click();

        // Знаходимо всі чекбокси в межах даної категорії
        const checkboxes = filterCategory.locator('.checkbox-filter__item');

        // Перевіряємо, що кількість чекбоксів не менше за вказану у параметрі
        const checkboxesCountOnPage = await checkboxes.count();
        expect(checkboxesCountOnPage).toBeGreaterThanOrEqual(data.checkboxesCount);

        // Проставляємо чекбокси, скільки передано в параметрі
        for (let i = 0; i < data.checkboxesCount; i++) {
            // Вибираємо чекбокс
            await checkboxes.nth(i).click();

            // Перевіряємо, що чекбокс має клас checkbox-filter__link--checked після вибору
            const checkboxLink = checkboxes.nth(i).locator('.checkbox-filter__link');
            expect(await checkboxLink.getAttribute('class')).toContain('checkbox-filter__link--checked');
        }
    });
}
