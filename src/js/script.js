const hamburgerBtn = document.querySelector('.hamburger')

hamburgerBtn.addEventListener('click', (e) => {
    e.target.closest('.hamburger').classList.toggle('hamburger--active')
    e.target.closest('.page-menu').querySelector('.page-menu__list').classList.toggle('page-menu__list--active')
})