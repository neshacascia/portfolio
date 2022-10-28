//Mobile Hamburger Menu:
const hamburgerMenu = document.querySelector(".nav-mobile");
const mobileNav = document.querySelector(".hamburger-menu");

let mobileNavToggle = true;

hamburgerMenu.addEventListener("click", displayNavMenu);

function displayNavMenu() {
  console.log("I am being clicked!");
  mobileNav.style.display === "block";
}
