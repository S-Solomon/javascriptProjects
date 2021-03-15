let modeToggle = document.querySelector('.mode-tog');
let darkMode = document.querySelector('.dark-mode');

console.log(modeToggle);

modeToggle.addEventListener('click', () => {
    modeToggle.classList.toggle('active');
    darkMode.classList.toggle('active');
})