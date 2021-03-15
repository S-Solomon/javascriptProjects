let modeToggle = document.querySelector('.mode-tog');
let darkMode = document.querySelector('.dark-mode');

modeToggle.addEventListener('click', () => {
    modeToggle.classList.toggle('active');
    darkMode.classList.toggle('active');
});