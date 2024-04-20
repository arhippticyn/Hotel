const burger = document.getElementById('burger')
const nav = document.getElementById('mobile-menu')
burger.addEventListener('click',function(){
    nav.classList.toggle('show')
})