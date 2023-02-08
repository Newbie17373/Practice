const burger = document.querySelector('.header__burger') 
const nav = document.querySelector('.header__list')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    nav.classList.toggle('active')
    body.classList.toggle('lock')
})