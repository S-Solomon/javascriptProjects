const header = document.querySelector('.header');

window.onscroll = function() {
    let scrollTop = window.scrollY;
    if (scrollTop >=20 ? header.classList.add('active') : header.classList.remove('active'));
}


