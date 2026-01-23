let menuBar = document.querySelector(".bar");
let asidePage = document.querySelector("aside");
let menuClose = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
let dropdownBtns = document.querySelectorAll(".active-arrow");

menuBar.addEventListener("click", () => {
  asidePage.classList.add("open");
  overlay.classList.add("active");
});

menuClose.addEventListener("click", () => {
  asidePage.classList.remove("open");
  overlay.classList.remove("active");
});

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let parentLi = btn.closest(".aside-list");
    let dropdown = parentLi.querySelector(".dropdown-aside");
    dropdown.classList.toggle("hii");
  });
});
