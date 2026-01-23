let menuBar = document.querySelector(".bar");
let asidePage = document.querySelector("aside");
let menuClose = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
let dropdownBtn = document.querySelector(".active-arrow");
let dropdown = document.querySelector(".dropdown-aside");

menuBar.addEventListener("click", () => {
  asidePage.classList.add("open");
  overlay.classList.add("active")
});

menuClose.addEventListener("click", () => {
  asidePage.classList.remove("open");
  overlay.classList.remove("active")
});

dropdownBtn.addEventListener("click", () => {
  dropdown.classList.toggle("hii");
})