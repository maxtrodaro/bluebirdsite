var swiper_compreepontue_new = new Swiper('.new-compre-ganhe-pontos', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    }
});