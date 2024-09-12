function foo(bannerId) {
    return `//*[@class="swiper-wrapper"]//*[@class="swiper-slide swiper-slide-active"]//*[data-banner-id = '${bannerId}']`;    
}
console.log(foo(3510));

//foo(3510);

//data-banner-id

//[data-banner-id = '${bannerId}']

//*[@class="swiper-wrapper"][@class="swiper-slide swiper-slide-active"][@]

//*[@class="swiper-wrapper"]//*[@class="swiper-slide swiper-slide-active"]

//return console.log(`//*[@class="swiper-wrapper"]//*[@class="swiper-slide swiper-slide-active"]//*[data-banner-id = '${bannerId}']`);
//3510