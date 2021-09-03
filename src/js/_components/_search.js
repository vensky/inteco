const $headerSearch = document.querySelector('.header-main__form-search');
const $searchBtn = $headerSearch.querySelector('.header-main__search');
const $search = $headerSearch.querySelector('.search__btn');

$searchBtn.addEventListener('click', () => {
    $searchBtn.classList.toggle('header-main__search--open');
});
