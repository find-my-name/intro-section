const featuresMenu = document.getElementById("features");
const companyMenu = document.getElementById("company");

const featuresImage = document.querySelector(".features img");
const companyImage = document.querySelector(".company img");

const menu = document.querySelector(".hamburger");
const list = document.querySelector(".menu");

featuresMenu.addEventListener("click", () => {
  if (featuresImage.hasAttribute("open")) {
    featuresImage.setAttribute("src", "/images/icon-arrow-up.svg");
    featuresImage.removeAttribute("open");
  } else {
    featuresImage.setAttribute("src", "/images/icon-arrow-down.svg");
    featuresImage.setAttribute("open", "");
  }
  document.querySelector(".features-list").classList.toggle("hidden");
});

companyMenu.addEventListener("click", () => {
  if (companyImage.hasAttribute("open")) {
    companyImage.setAttribute("src", "/images/icon-arrow-up.svg");
    companyImage.removeAttribute("open");
  } else {
    companyImage.setAttribute("src", "/images/icon-arrow-down.svg");
    companyImage.setAttribute("open", "");
  }
  document.querySelector(".company-list").classList.toggle("hidden");
});

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  list.classList.toggle("hidden");
});
