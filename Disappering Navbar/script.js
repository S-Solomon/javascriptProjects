const header = document.querySelector('header');

let previousScrollPosition = window.pageYOffset;


window.onscroll = function() {
    let currentScrollPosition = window.pageYOffset;


    previousScrollPosition > currentScrollPosition 
        ? header.classList.remove("scroll")
        : header.classList.add("scroll");

    previousScrollPosition = currentScrollPosition;

  
};