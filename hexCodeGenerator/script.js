const btn = document.getElementById('change');
const text = document.getElementById('color');

const getNewColor = function() {
    newColor = '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
    
    console.log(newColor.length);
    if(newColor.length < 7) {
        getNewColor();
    }
}

btn.addEventListener('click', function() {
    getNewColor();

    document.body.style.background = newColor;
    btn.style.color = newColor;
    text.innerText = newColor;
})



