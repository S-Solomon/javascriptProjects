let imageItems = [...document.querySelectorAll('.img-wrap')];
let titles = [...document.querySelectorAll('h2')];

let options = {
    rootMargin: '0px',
    threshold: .2
}

let setItemActive = (enteries => {
    console.log(enteries)

    enteries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active')
        }
    })
});

let observer = new IntersectionObserver(setItemActive, options);

imageItems.forEach((item, idx) => {
    item.children[0].style.backgroundImage = `url(./images/${idx+1}.jpg)`
    idx % 2 == 0 ? item.style.left = '55%' : item.style.left = '5%';
    observer.observe(item);
})

titles.forEach((title, idx) => {
    idx % 2 == 0 ? title.style.left = '45%' : title.style.left = '35%';
    observer.observe(title)

})


// https://alligator.io/js/intersection-observer/