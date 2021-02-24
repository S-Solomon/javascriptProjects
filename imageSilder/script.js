const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const autoSlide = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

nextBtn.addEventListener('click', e => {
    nextSlide();
});


const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

prevBtn.addEventListener('click', e => {
    prevSlide();
});