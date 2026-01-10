let menuBar = document.querySelector(".bar");
let asidePage = document.querySelector("aside");
let menuClose = document.querySelector(".close");

menuBar.addEventListener("click", () => {
  asidePage.classList.add("open");
});

menuClose.addEventListener("click", () => {
  asidePage.classList.remove("open");
});
