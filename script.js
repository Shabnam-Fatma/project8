let menuBar = document.querySelector(".bar");
let asidePage = document.querySelector("aside");
let menuClose = document.querySelector(".close");
let overlay = document.querySelector(".overlay");

menuBar.addEventListener("click", () => {
  asidePage.classList.add("open");
  overlay.classList.add("active")
});

menuClose.addEventListener("click", () => {
  asidePage.classList.remove("open");
});