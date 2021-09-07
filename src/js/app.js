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

const swiperPersonal = new Swiper('.personal__swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination--personal',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--personal',
        prevEl: '.swiper-button-prev--personal',
    },
});

const swiperBonus = new Swiper('.bonus__swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination--bonus',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next--bonus',
        prevEl: '.swiper-button-prev--bonus',
    },
});
