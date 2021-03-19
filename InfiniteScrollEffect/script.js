
let menu = document.querySelector('.menu');
let items = document.querySelectorAll('.menu-item');
let clones = [];
let disableScroll = false;
let scrollHeight = 0;
let scrollPos = 0;
let clonesHeight = 0;

function getScrollPos() {
    return menu.scrollTop; //Amount window scrolled
}

function setScrollPos(pos) {
    menu.scrollTop = pos;
}

function getClonesHeight() {
    clonesHeight = 0;

    clones.forEach((clone) => {
        clonesHeight += clone.offsetHeight; // offsetHeight returns height of element
    })

    return clonesHeight;
}


// recalculate dimensions when our screen is resized
function reCalc() {
    scrollPos = getScrollPos();
    scrollHeight = menu.scrollHeight; // height of an element content, including content not visible on the screen
    clonesHeight = getClonesHeight();

    if(scrollPos <= 0) {
        getScrollPos(1); // initial set at 1px to enable upwards scrolling
    }
}

function scrollUpdate() {
    if(!disableScroll) {
        scrollPos = getScrollPos();
        if(clonesHeight + scrollPos >= scrollHeight) {
            // scroll back to top when we reached bottom of our page
            setScrollPos(1);
            disableScroll = true;
        }else if (scrollPos <= 0) {
            // scroll to bottom when we reach the top
            setScrollPos(scrollHeight - clonesHeight);
            disableScroll = true;
        }
    }
    if(disableScroll) {
        // disable scroll jumping for a short period to avoid flickering

        window.setTimeout(() => {
            disableScroll = false;
        }, 40);
    }

}

function onLoad() {
    items.forEach((item) => {
        const clone = item.cloneNode(true);
        menu.appendChild(clone);
        clone.classList.add('js-clone');
    });

    clones = menu.querySelectorAll('.js-clone');

    reCalc();

    menu.addEventListener('scroll', () => {
        window.requestAnimationFrame(scrollUpdate);
    }, false);

    window.addEventListener('resize', () => {
        window.requestAnimationFrame(reCalc);
    },false);

}

window.onload = onLoad();