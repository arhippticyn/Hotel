const burger = document.getElementById('burger')
const nav = document.getElementById('nav-ul')
burger.addEventListener('click',function(){
    nav.classList.toggle('show')
})