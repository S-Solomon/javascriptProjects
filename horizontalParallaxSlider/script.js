const images = [...document.querySelectorAll('.img')];
const slider = document.querySelector('.slider');

let sliderWidth, imageWidth;
let current = 0;
let target = 0;
let ease = 0.05;

window.addEventListener('resize', init); //make sure the slider always fit in every window size


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
    animateImages()
    requestAnimationFrame(animate);
}

init()
animate()

// Parallax Effect

function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue;

    images.forEach((image, idx) => {
        intersectionRatioValue = ratio - (idx * 0.7); // experiment with these numbers
        setTransform(image, `translateX(${intersectionRatioValue * 70}px)`)
    })
}
