// console.log("JS Loaded!");

// const name = "Marc";

// console.log(name);
let hamburger = document.getElementById("hamburger-container");
let sideMenu = document.getElementById("side-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("toggle-hamburger");
  sideMenu.classList.toggle("show-side-menu");
});
