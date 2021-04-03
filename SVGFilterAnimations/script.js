let mainSlider = document.querySelector('.slider-main');
let innerSliderOne = document.querySelector('.slider-inner-one');
let innerSliderTwo = document.querySelector('.slider-inner-two');
let images = [...document.querySelectorAll('svg')];
let imageItems = [];

let current = 0;
let target = 0;
let ease = 0.075;

window.addEventListener('resize', init);

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function init() {
    document.body.style.height = `${mainSlider.getBoundingClientRect().width - (window.innerWidth - window.innerHeight)}px`
}

function transformElement(el, transform) {
    el.style.transform = transform;
} 

function animate() {
    target = window.scrollY;
    current = lerp(current, target, ease).toFixed(2); // 2 decimal places to avoid float with loads of decimal places
    transformElement(mainSlider, `translate3d(${-current}px, 0, 0)`); // in 3d, chrome offloads work to the gpu, uses less cpu
    transformElement(innerSliderTwo, `translate3d(${-current * 1.1}px, 0, 0)`);

    requestAnimationFrame(animate); // calls the function over and over again
}

init()
animate();