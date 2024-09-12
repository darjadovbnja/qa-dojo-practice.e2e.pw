import {expect, Locator, test} from '@playwright/test';

async function verifyNumberOfBanners(carouselBanner: Locator) {
    const banners = await carouselBanner.all();
    await expect(banners.length).toBeGreaterThan(2); 
};

async function clickButtonForward(buttonForward: Locator, timesClick: number) {
    for (let i=0; i<timesClick; i++) {
        await buttonForward.click();
    }
};

async function getActiveBannerUrl(carouselActiveBanner: Locator) {
    return await carouselActiveBanner.getAttribute('href');//class="swiper-slide"
}

test.beforeEach(async( {page} ) => {
    await page.goto('https://telemart.ua/ua/');
});

test.afterEach(({ page }) => {
    page.close();
  });

test('active banner navigation', async({page}) => {
    const carousel: Locator = page.locator('//*[@class="categories-slider"]');
    const carouselBanner: Locator = page.locator('//*[@class="categories-slider"]//*[@class="categories-slider__image"]');
    const carouselActiveBanner: Locator = page.locator('//*[@class="categories-slider"]//*[@class="swiper-wrapper"]/*[@class="swiper-slide swiper-slide-active"]');
    const buttonForward: Locator = page.locator('//*[@class="swiper-button-next"]')

   //await expect((await carouselBanner.all()).length).toBeGreaterThan(2);
   await verifyNumberOfBanners(carouselBanner);

    // await buttonForward.click();
    // await buttonForward.click();
    await clickButtonForward(buttonForward, 3);

    //const ulrOfActiveBanner = await carouselActiveBanner.getAttribute('href')
    const ulrOfActiveBanner = await getActiveBannerUrl(carouselActiveBanner);

    await carouselActiveBanner.click()
    
    //await expect(page.url()).toEqual(ulrOfActiveBanner);
    await expect(page.url()).toEqual(ulrOfActiveBanner);
});