// - перевірити що в каруселі знаходиться більше 2х елементів (використовуйте locator().all() і length) 
// - натиснути 2 рази на scroll каруселі 
// - клікнути на контект каруселі 
// - перевірити що навігація успішна  (подумайте як) 

//проверить что в слайдере больше 2-х элементов 
//2 раза кликнуть вперед
//проверить uRL текущего баннера
//кликнуть по нему
//проверить что результирующий url = url баннера



import {expect, Locator, test, Page} from '@playwright/test';

async function verifyNumberOfBanners(carouselBanner: Locator) {
    const banners = await carouselBanner.all();
    await expect(banners.length).toBeGreaterThan(2);
}

async function clickForwardButton(buttonForward: Locator, times: number) {
    for (let i = 0; i < times; i++) {
        await buttonForward.click();
    }
}

async function getActiveBannerURL(carouselActiveBanner: Locator) {
    await carouselActiveBanner.getAttribute('href');
}

test.beforeEach(async( {page} ) => {
    await page.goto('https://telemart.ua/ua/');
})

test('active banner navigation', async( {page} ) => {

    const carousel: Locator = page.locator('//*[@class="categories-slider"]');
    const carouselBanner: Locator = page.locator('//*[@class="categories-slider"]//*[@class="categories-slider__image"]');
    const carouselActiveBanner: Locator = page.locator('//*[@class="categories-slider"]//*[@class="swiper-wrapper"]/*[@class="swiper-slide swiper-slide-active"]');

    const carouselScroll: Locator = page.locator("//*[contains(@class, 'categories-slider-progress-bar-container__progress-bar')]");
    const buttonForward: Locator = page.locator('//*[@class="swiper-button-next"]')

//    await expect((await carouselBanner.all()).length).toBeGreaterThan(2);
    await verifyNumberOfBanners(carouselBanner);
   
//    await buttonForward.click();
//    await buttonForward.click();
    await clickForwardButton(buttonForward, 5);

    const ulrOfActiveBanner = await getActiveBannerURL(carouselActiveBanner);

    await Promise.all([
        carouselActiveBanner.click(),
        expect(getActiveBannerURL(carouselActiveBanner)).toEqual(ulrOfActiveBanner)
    ])
    // await carouselActiveBanner.click()

    // await expect(getActiveBannerURL(carouselActiveBanner)).toEqual(ulrOfActiveBanner);
})