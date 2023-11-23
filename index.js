const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{window.pageYOffset === 0 ? navbar.classList.remove("active-navbar") : navbar.classList.add("active-navbar")});


///////////////////////////////////////////////////////////////

const themeSwitcher = document.querySelector(".theme-switcher");

const body = document.querySelector("body");
const container = document.querySelector(".container")

themeSwitcher.addEventListener("click",()=>{body.classList.toggle("light-theme");
navbar.classList.toggle("navbar-light-theme");
container.classList.toggle("light-theme");
themeSwitcher.classList.toggle("theme-switcher-light-theme");
});


///////////////////////////////////////////////////////////////

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".navbar-list");

menuIcon.addEventListener("click",()=>{menuList.classList.toggle("navbar-list-active");
navbar.classList.toggle("active-list");
})

window.addEventListener("resize",()=>{  
    if(window.innerWidth > 1000){
    navbar.classList.toggle("active-list")
}})
console.log(window.innerWidth)