const menuBtn = document.querySelector(".menu-btn");
const heroShoe = document.querySelector(".hero-shoe");
const body = document.querySelector("body");
const menuScreen = document.querySelector(".menu-screen");
const downArrow = document.querySelector(".downarrow");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuScreen.classList.toggle("open");
  body.classList.toggle("open");
  menuOpen = !menuOpen;
});
downArrow.addEventListener("click", () => {
  downArrow.scrollIntoView();
});
window.onload = function () {
  heroShoe.classList.add("start");
};