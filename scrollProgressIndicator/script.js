let progessSection = document.querySelector('.progress-section');
let progessBar = document.querySelector('.progress-bar');
let progressNum = document.querySelector('.progress-num');

let x, y;

window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
}) 

function updateProgressBar() {

    // make it move with the mouse
    progessSection.style.transform = `translate(${x}px, ${y}px)`

    progessBar.style.height = `${getScrollPercentage()}%`
    progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`
    requestAnimationFrame(updateProgressBar)
}

function getScrollPercentage() {
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
}

updateProgressBar()