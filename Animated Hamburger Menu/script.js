
let menuToggle = document.querySelector('.menu-toggle');
let navMenu = document.querySelector('.nav');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.nav-right');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let contact = document.querySelector('.contact');
let logo = document.querySelector('.logo');

menuToggle.addEventListener('click', openMenu);

function openMenu() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
    contact.classList.toggle('active');
    logo.classList.toggle('active');

    navLinks.forEach((link) => {
        link.classList.toggle('active');
    });
};