const $nav = document.querySelector('.nav');
const $navOpenBtn = document.querySelector('.nav-btn-open');
const $navCloseBtn = document.querySelector('.nav-btn-close');

$navOpenBtn.addEventListener('click', () => {
    $nav.classList.add('nav--open');
});


$navCloseBtn.addEventListener('click', () => {
    $nav.classList.remove('nav--open');
});
