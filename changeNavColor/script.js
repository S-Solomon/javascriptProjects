const header = document.querySelector('.header');

window.onscroll = function() {
    let top = window.scrollY;
    if (top >=20 ? header.classList.add('active') : header.classList.remove('active'));
}


