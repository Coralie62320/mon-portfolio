let navBar = document.querySelector("nav");
let icon = document.querySelector("i");


function openMenu() {
    let nav = document.querySelector("nav")
    nav.classList.toggle("open")
}
function changeIcon(icon) {
    icon.classList.toggle("fa-times")
}



// let hamMenuIcon = document.querySelector("#ham-menu");
// let navBar = document.querySelector("#nav-bar");
// let navLinks = navBar.querySelectorAll("li");
// hamMenuIcon.addEventListener("click", () => {
//     navBar.classList.toggle("active");
//     hamMenuIcon.classList.toggle("fa-times");
// });
// navLinks.forEach((navLinks) => {
//     navLinks.addEventListener("click", () => {
//         navBar.classList.remove("active");
//         hamMenuIcon.classList.toggle("fa-times");
//     });
// });


// document.addEventListener("scroll", function() {
//     console.log(scrollY);
//         if(scrollY > 10) {
//             let timeline = document.querySelector("#timeline");
//             timeline.animation = translateLeft;
            
//         } else {
//             let timeline = document.querySelector("#timeline");
//             timeline.animation = translateRight;
//         }
// });





  