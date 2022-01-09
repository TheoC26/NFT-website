const menuBtn = document.querySelector(".menu-btn");
const heroShoe = document.querySelector(".hero-shoe");
const body = document.querySelector("body");
const menuScreen = document.querySelector(".menu-screen");
const downArrow = document.querySelector(".downarrow");
const detailsBox = document.querySelector(".details");
const sole = document.querySelector(".details .sole");
const soleRare = document.querySelector(".details .sole-rare");
const main = document.querySelector(".details .main");
const mainRare = document.querySelector(".details .main-rare");
const front = document.querySelector(".details .front");
const frontRare = document.querySelector(".details .front-rare");
const power = document.querySelector(".details .power");
const powerRare = document.querySelector(".details .power-rare");
var shoes = [
  "./shoes/1.png",
  "./shoes/2.png",
  "./shoes/3.png",
  "./shoes/4.png",
  "./shoes/5.png",
  "./shoes/6.png",
  "./shoes/7.png",
  "./shoes/8.png",
  "./shoes/9.png",
];
var numberReal = 0;
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
heroShoe.addEventListener("click", () => {
  switch_shoe();
  console.log("click");
});
window.onload = function () {
  heroShoe.classList.add("start");
};
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function switch_shoe(){
  number = getRandomInt(9)
  if (number != numberReal){
    numberReal = number;
  } else{
    switch_shoe();
  }
  heroShoe.style.backgroundImage='url(' + shoes[numberReal] +')';
  if (number == 0) {
    sole.innerHTML = "sole - light blue";
    soleRare.innerHTML = "common";
    main.innerHTML = "main accent - blue";
    mainRare.innerHTML = "common";
    front.innerHTML = "front accent - purple";
    frontRare.innerHTML = "rare";
    power.innerHTML = "power up - gold wings";
    powerRare.innerHTML = "epic";
  }
  if (number == 1) {
    sole.innerHTML = "sole - pink";
    soleRare.innerHTML = "rare";
    main.innerHTML = "main accent - blue";
    mainRare.innerHTML = "common";
    front.innerHTML = "front accent - purple";
    frontRare.innerHTML = "rare";
    power.innerHTML = "";
    powerRare.innerHTML = "";
  }
  if (number == 2) {
    sole.innerHTML = "sole - yellow";
    soleRare.innerHTML = "common";
    main.innerHTML = "main accent - green";
    mainRare.innerHTML = "common";
    front.innerHTML = "front accent - green";
    frontRare.innerHTML = "common";
    power.innerHTML = "power up - gold wings";
    powerRare.innerHTML = "epic";
  }
  if (number == 3) {
    sole.innerHTML = "sole - light blue";
    soleRare.innerHTML = "common";
    main.innerHTML = "main accent - blue";
    mainRare.innerHTML = "common";
    front.innerHTML = "front accent - purple";
    frontRare.innerHTML = "rare";
    power.innerHTML = "power up - silver wings";
    powerRare.innerHTML = "epic";
  }
  if (number == 4) {
    sole.innerHTML = "sole - pink";
    soleRare.innerHTML = "common";
    main.innerHTML = "main accent - blue";
    mainRare.innerHTML = "common";
    front.innerHTML = "front accent - light blue";
    frontRare.innerHTML = "rare";
    power.innerHTML = "";
    powerRare.innerHTML = "";
  }
  if (number == 5) {
    sole.innerHTML = "sole - light blue";
    soleRare.innerHTML = "common";
    main.innerHTML = "main accent - green";
    mainRare.innerHTML = "common";
    front.innerHTML = "front accent - green";
    frontRare.innerHTML = "rare";
    power.innerHTML = "";
    powerRare.innerHTML = "";
  }
  if (number == 6) {
    sole.innerHTML = "sole - light blue";
    soleRare.innerHTML = "common";
    main.innerHTML = "main accent - blue";
    mainRare.innerHTML = "common";
    front.innerHTML = "front accent - purple";
    frontRare.innerHTML = "rare";
    power.innerHTML = "power up - silver wings";
    powerRare.innerHTML = "epic";
  }
  if (number == 7) {
    sole.innerHTML = "sole - light blue";
    soleRare.innerHTML = "common";
    main.innerHTML = "main accent - pink";
    mainRare.innerHTML = "common";
    front.innerHTML = "front accent - purple";
    frontRare.innerHTML = "rare";
    power.innerHTML = "";
    powerRare.innerHTML = "";
  }
  if (number == 8) {
    sole.innerHTML = "sole - pink";
    soleRare.innerHTML = "common";
    main.innerHTML = "main accent - blue";
    mainRare.innerHTML = "common";
    front.innerHTML = "front accent - light blue";
    frontRare.innerHTML = "rare";
    power.innerHTML = "";
    powerRare.innerHTML = "";
  }
}