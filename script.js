const nav = document.getElementById('mobile-menu')
const burger = document.getElementById('burger')
const header = document.getElementById('header')
const mobileBurger = document.getElementById('mobile-burger-menu-top-burger-mobile')

burger.addEventListener('click',function(){
    nav.classList.toggle('show')
    header.classList.toggle('show')
})

mobileBurger.addEventListener('click', function(){
    nav.classList.toggle('show')
    header.classList.toggle('show')
})