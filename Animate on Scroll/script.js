let aosElements = Array.from(document.querySelectorAll('.aos'));

window.addEventListener('scroll', _.throttle(scanElements, 500) );

//find the position of the div relative to our viewport using getBoundingClientRect
function isVisible(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -300;
    return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}

function scanElements(e) {
    console.count(e);
    aosElements.forEach((element) => {
        if(isVisible(element)) {
            element.classList.add('active');
        }else {
            element.classList.remove('active');
        }
        // console.log(element.getBoundingClientRect());
    })
}
// Using throttling to boost application's performance
// it's adviced not to use your own throttle function
function throttle(fn, delay) {
    let lastCall = 0;

    return (...args) => {

        let context = this;

        let current = new Date().getTime();

        if(current - lastCall < delay) {
            return
        }
        lastCall = current;
        return fn.apply(context, ...args)
    }
}