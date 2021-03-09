let lineOne = document.querySelector('.line-1');
let lineTwo = document.querySelector('.line-2');

window.onscroll = () => {
    let position = window.scrollY -800;
    lineOne.style.left = `${position}px`;
    lineTwo.style.right = `${position}px`;
}