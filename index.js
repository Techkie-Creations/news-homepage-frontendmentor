const navbar = document.querySelector('.navbar')
const hamburger = document.getElementsByClassName('menu')[0]
const closer = document.querySelector('.menu-close')
const veil = document.querySelector('.veil')
const body = document.getElementsByTagName('body')[0]
const image = document.getElementsByClassName('hero-img')[0]

window.addEventListener('resize', () => {
    if (window.innerWidth <= 624) {
        image.src = './assets/images/image-web-3-mobile.jpg'
    } else {
        image.src = './assets/images/image-web-3-desktop.jpg'
    }
})

hamburger.addEventListener('click', () => {
    navbar.classList.add('active')
    veil.classList.add('active')
    closer.classList.add('active')
    body.setAttribute('class', 'active')
})

closer.addEventListener('click', () => {
    navbar.classList.remove('active')
    veil.classList.remove('active')
    closer.classList.remove('active')
    body.removeAttribute('class')
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active')
}))

veil.addEventListener('click', () => {
    navbar.classList.remove('active')
    veil.classList.remove('active')
    closer.classList.remove('active')
    body.removeAttribute('class')
})

