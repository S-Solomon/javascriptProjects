let menuToggle = document.querySelector('.menu-toggle');
let menuClose = document.querySelector('.menu-close');
let navMenu = document.querySelector('.menu');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));


menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

function openMenu() {
    navMenu.classList.add('active');
    navLinks.forEach((link, index) => {
        setTimeout(()=> {
            link.classList.add('active')
        }, index * 100);
    });
}

function closeMenu() {
    navMenu.classList.remove('active');

    setTimeout(() => {
        navLinks.forEach(link => link.classList.remove('active'));
    }, 100)
}