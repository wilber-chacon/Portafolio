let sec = document.querySelectorAll("section");
let links = document.querySelectorAll("nav a");

window.onscroll = () => {
  sec.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 60;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

const btnswitch = document.querySelector("#switch");
const valueDarkMode = localStorage.getItem("DarkMode");

if (valueDarkMode == null || valueDarkMode == "light") {
  if (valueDarkMode == null) {
    localStorage.setItem("DarkMode", "light");
  }
  btnswitch.classList.remove("active");
  document.body.classList.remove("dark");
} else if (valueDarkMode == "dark") {
  btnswitch.classList.add("active");
  document.body.classList.add("dark");
}

btnswitch.addEventListener("click", () => {
  const valueDarkMode = localStorage.getItem("DarkMode");

  if (valueDarkMode == "light") {
    localStorage.setItem("DarkMode", "dark");
  }
  if (valueDarkMode == "dark") {
    localStorage.setItem("DarkMode", "light");
  }
  document.body.classList.toggle("dark");
  btnswitch.classList.toggle("active");
});

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#header");
const barras = document.querySelector("#barras");
const btnclose = document.querySelector("#close");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("enable");
  barras.classList.toggle("disable");
  btnclose.classList.toggle("enable");
});


let boxes = document.querySelectorAll('.box');

function scrollTrigger(){

  
  boxes.forEach( boxx => {
    
    let tops = window.scrollY;
    let offsets = boxx.parentElement.offsetTop - 60;
    let heights = boxx.parentElement.offsetHeight;
    
    if (tops >= offsets && tops < offsets + heights) {
      boxx.classList.add('active');
    }else{
      boxx.classList.remove('active');
    }


  });
}


window.addEventListener('scroll', scrollTrigger);

window.addEventListener('load', scrollTrigger);