const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const sideNav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

menuOpen.addEventListener('click', menuToggle);
menuClose.addEventListener('click', menuToggle);

navLinks.forEach((link) => {
    link.addEventListener('click', menuToggle)
})

function menuToggle(e) {
    sideNav.classList.toggle('active');
}