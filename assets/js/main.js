const nav = document.querySelector('#nav-menu')
const toggle = document.querySelector('#nav-toggle')
const close = document.querySelector('#nav-close')

toggle.addEventListener('click',  () => {
    nav.classList.add('show-menu')
})

close.addEventListener('click', () => {
    nav.classList.remove('show-menu')
})