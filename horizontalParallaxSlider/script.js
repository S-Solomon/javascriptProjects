const images = [...document.querySelectorAll('.img')];
const slider = document.querySelector('.slider');

let sliderWidth, imageWidth;
let current = 0;
let target = 0;
let ease = 0.05;

images.forEach((img, idx) => {
    img.style.backgroundImage = `url(./images/${idx+1}.jpg)`;
})

function lerp(start, end, t) {
    return start * (1-t) + end * t;
}

function setTransform(element, transform) {
    element.style.transform = transform;
}

function init() {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
}

function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    setTransform(slider, `translateX(-${current}px)`)
    requestAnimationFrame(animate);
}

init()
animate()


