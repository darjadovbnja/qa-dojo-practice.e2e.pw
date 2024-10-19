// 1. Створіть тест, який буде логінитися на linkedin та зберігати storageState у файл.
// 2. Створіть інший тест, який буде використовувати збережений storageState, щоб увійти на сайт автоматично, без повторного логіну.

// Підказка:

// Використовуйте context.storageState({ path: 'state.json' }) для збереження стану.
// Використовуйте опцію storageState: 'state.json' для відновлення стану в новому тесті.

import {test, expect, Page} from '@playwright/test';

test('save-session-state', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('https://www.linkedin.com/login');

    await page.fill('[id="username"]', 'ddovbnia963@gmail.com');
    await page.fill('[id="password"]', 'Colgate123!');
    await page.click('button[aria-label="Sign in"]');

    await expect(page).toHaveURL('https://www.linkedin.com/feed/');

    const myLinkedInState = await context.storageState({ path: 'tests/condulit-tests/.cookies/state.json' });

    console.log(myLinkedInState);

    await context.close();
});

test.use({storageState: 'tests/condulit-tests/.cookies/state.json'});

test('sign in using session-state', async({browser, page}, use) => {
    await page.goto('https://www.linkedin.com/feed/');
    await expect(page).toHaveURL('https://www.linkedin.com/feed/');
    await page.close();
})