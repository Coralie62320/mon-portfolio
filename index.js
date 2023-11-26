// Correction hauteur 100% (100vh) sur mobile
const appHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  window.addEventListener('resize', appHeight);
  appHeight();



// Fonction ouverture / fermeture menu burger
// Fermeture menu burger après click sur un lien
let nav = document.querySelector("#nav");
let hamMenuIcon = document.querySelector("#ham-menu");
let navBar = document.querySelector("#nav-bar");
let navLinks = navBar.querySelectorAll("li");
hamMenuIcon.addEventListener("click", () => {
    nav.classList.toggle("open");
    navBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
        navBar.classList.remove("active");
        hamMenuIcon.classList.toggle("fa-times");
        nav.classList.remove("open");
    });
});






  