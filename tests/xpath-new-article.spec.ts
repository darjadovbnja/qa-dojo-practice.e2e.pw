import {test, expect} from '@playwright/test'
import { TIMEOUT } from 'dns';

test.beforeEach(async ({page}) => {
    await page.goto('https://demo.learnwebdriverio.com/', {timeout: 880000});
    await page.locator('//*[contains(text(), "Sign in")])').click();
    await page.locator('//input[@placeholder="Email"]').fill('c3po@g.com');
    await page.locator('//input[@placeholder="Password"]').fill('12345');
    await page.locator('//button[contains(text(),"Sign in")]').click();
})

test('learnwebdriverio-1 create an article', async( {page} ) => {
    await page.locator('').click();
    await page.locator('//a[contains(text(),"New Article")]').click();
    await page.locator('//input[@placeholder="Article Title"]').fill('The Whispering Woods');
    await page.locator('//input[@data-qa-id="editor-description"]').fill('Lila discovers a map in a whispering forest, leading to a hidden grove where time stands still, hinting at a life-changing secret or a potential trap.');
    await page.locator('//div[@class="v-note-edit divarea-wrapper scroll-style transition"]').fill('In the heart of the Whispering Woods, where the trees seem to murmur secrets with every breeze, a young explorer named Lila stumbles upon an ancient, moss-covered stone. Intrigued by the strange symbols etched into its surface, she begins to decipher them, only to realize they are a map—a map leading to a hidden grove where time stands still. As Lila ventures deeper, the forest\'s whispers grow louder, guiding her towards a discovery that could change her life forever, or trap her in the woods eternal mystery.');

    const tags = ['Mystery', 'Adventure', 'Nature'];

    for (const tag of tags) {
        await page.locator('//input[@placeholder="Enter tags"]').fill(tag);
        await page.locator('//input[@placeholder="Enter tags"]').press('Enter');
    }

    await expect(page.locator('//h1[@data-qa-id="article-title"]')).toHaveText('The Whispering Woods');
    await expect(page.locator('//a[@class="author"]')).toHaveText('c3po');
    await expect(page.locator('//a[@class="author"]')).toHaveText('c3po');


})