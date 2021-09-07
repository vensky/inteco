'use strict';

@@include('./_components/_swiper-bundle.js');

const swiper = new Swiper('.projects__swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
