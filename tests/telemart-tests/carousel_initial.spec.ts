// - перевірити що в каруселі знаходиться більше 2х елементів (використовуйте locator().all() і length) 
// - натиснути 2 рази на scroll каруселі 
// - клікнути на контект каруселі 
// - перевірити що навігація успішна  (подумайте як) 

//проверить что в слайдере больше 2-х элементов 
//2 раза кликнуть вперед
//проверить uRL текущего баннера
//кликнуть по нему
//проверить что результирующий url = url баннера



import {expect, Locator, test} from '@playwright/test';

test.beforeEach(async( {page} ) => {
    await page.goto('https://telemart.ua/ua/');
})

test('active banner navigation', async( {page} ) => {
    const carousel: Locator = page.locator('//*[@class="categories-slider"]');
    const carouselBanner: Locator = page.locator('//*[@class="categories-slider"]//*[@class="categories-slider__image"]');
    const carouselActiveBanner: Locator = page.locator('//*[@class="categories-slider"]//*[@class="swiper-wrapper"]/*[@class="swiper-slide swiper-slide-active"]');

    const carouselScroll: Locator = page.locator("//*[contains(@class, 'categories-slider-progress-bar-container__progress-bar')]");
    const buttonForward: Locator = page.locator('//*[@class="swiper-button-next"]')

    await expect((await carouselBanner.all()).length).toBeGreaterThan(2);
    await buttonForward.click();
    await buttonForward.click();
    const ulrOfActiveBanner = await carouselActiveBanner.getAttribute('href')

    await carouselActiveBanner.click()

    await expect(page.url()).toEqual(ulrOfActiveBanner);
})