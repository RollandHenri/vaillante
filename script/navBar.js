export {};

/*-- Event de la NavBar --*/

/*-- Version Desktop --*/

const navBar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    navBar.classList.remove("nav");
    navBar.classList.add("navScroll");
  } else {
    navBar.classList.remove("navScroll");
    navBar.classList.add("nav");
  }
});

navBar.addEventListener("mouseover", () => {
  if (navBar.classList.contains("navScroll")) {
    navBar.classList.remove("navScroll");
    navBar.classList.add("nav");
  }
});

navBar.addEventListener("mouseleave", () => {
  if (navBar.classList.contains("nav") && window.scrollY > 302) {
    navBar.classList.remove("nav");
    navBar.classList.add("navScroll");
  }
});
