import {test, expect, Locator} from '@playwright/test'

test.beforeEach(async ({page}) => {
    const loginLocator: Locator = page.locator('//a[@href="/login"]')
    await page.goto('https://demo.learnwebdriverio.com/', {timeout: 880000});
    await loginLocator.click();
    //await page.locator('//a[@href="/login"]').click();
    await page.locator('//input[@placeholder="Email"]').fill('c3po@g.com');
    await page.locator('//input[@placeholder="Password"]').fill('12345');
    await page.locator('//button[contains(text(),"Sign in")]').click();
})

test('learnwebdriverio-1 create an article', async( {page} ) => {
    await page.locator('//a[@href="/editor"]').click();
    await page.locator('//input[@placeholder="Article Title"]').fill('The Whispering Woods');
    await page.locator('//input[@data-qa-id="editor-description"]').fill('Lila discovers a map in a whispering forest, leading to a hidden grove where time stands still, hinting at a life-changing secret or a potential trap.');
    await page.locator('//div[@class="v-note-edit divarea-wrapper scroll-style transition"]')
    .evaluate((element) => element.textContent = 'In the heart of the Whispering Woods.');

    const tags = ['Mystery', 'Adventure', 'Nature'];

    for (const tag of tags) {
        await page.locator('//input[@placeholder="Enter tags"]').fill(tag);
        await page.locator('//input[@placeholder="Enter tags"]').press('Enter');
    }

    await page.locator('//button[@data-qa-id="editor-publish"]').click();

    await expect(page.locator('//h1[@data-qa-id="article-title"]')).toHaveText('The Whispering Woods');
    await expect(page.locator('(//a[@class="author"])[1]')).toHaveText('c3po');
    await expect(page.locator('(//a[@class="author"])[2]')).toHaveText('c3po');


})