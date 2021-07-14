const hamburgerMenu = document.querySelector('.hamburger')
const navMenu = document.querySelector('.navbar ul')
const overlay = document.querySelector('.overlay')

hamburgerMenu.addEventListener('click', (e) => {
  navMenu.classList.toggle('active')
  overlay.classList.toggle('active')
})

overlay.addEventListener('click', (e) => {
  navMenu.classList.remove('active')
  overlay.classList.remove('active')
})