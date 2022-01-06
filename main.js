const menuBtn = document.querySelector('.menu-btn');
const menuScreen = document.querySelector('.menu-screen');
let menuOpen = false;
menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle("open");
    menuScreen.classList.toggle("open");
    menuOpen = !menuOpen;
});