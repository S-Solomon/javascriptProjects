let current = 0; // amount of pixels that our current container scrolls by
let target = 0; // our current scroll position
let ease = 0.06; 

let windowWidth, containerHeight, imageHeight, skewDiff;

let container = document.querySelector('.container');
let images = [...document.querySelectorAll('.img_wrap')];

images.forEach((image, idx) => {
    image.style.backgroundImage = `url(./img/img${idx + 1}.jpg)`
})

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

function setTransform(element, transform) {
    element.style.transform = transform;
}

function setUpAnimation() {
    windowWidth = window.innerWidth;
    containerHeight = container.getBoundingClientRect().height;
    imageHeight = containerHeight / (windowWidth > 760 ? images.length / 2 : images.length);

    document.body.style.height = `${containerHeight}px`;
    smoothScroll()
}

function smoothScroll() {
    current = lerp(current, target, ease);
    current = parseFloat(current.toFixed(2)); //break it down to a float with 2 decimal places
    target = window.scrollY;
    skewDiff = (target - current) * 0.015;

    setTransform(container, `translateY(${-current}px) skewY(${skewDiff}deg)`);
    updateImages()
    requestAnimationFrame(smoothScroll);
}

function updateImages() {
    let ratio = current / imageHeight;
    let intersectionRatioIndex,  intersectionRatioValue;

    images.forEach((image, idx) => {
        intersectionRatioIndex = windowWidth > 760 ? parseInt(idx / 2) : idx;
        intersectionRatioValue = ratio - intersectionRatioIndex;
        setTransform(image, `transformY(${intersectionRatioValue * 50}px)`)
    })
}


setUpAnimation()
