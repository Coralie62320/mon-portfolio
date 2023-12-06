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


// Page formation div translate left
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    };
};

window.addEventListener("scroll", reveal);


// Page formation div translate right
function revealDeux() {
    let revealsDeux = document.querySelectorAll(".reveal-2");
    for (let i = 0; i < revealsDeux.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = revealsDeux[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          revealsDeux[i].classList.add("active");
        } else {
          revealsDeux[i].classList.remove("active");
        }
      };
};

window.addEventListener("scroll", revealDeux);





  