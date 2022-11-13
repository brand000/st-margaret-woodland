//Author: Devon Leigh
//This script file contains intilization and functions called in the index of the webpage, this provides functionality to certain features depicted below by comments

function openNav() {
  document.getElementById("nav-bar").style.width = "40%";
}

//hamburger navbar close
function closeNav() {
  document.getElementById("nav-bar").style.width = "0%";
}

/* change menuBtn to menuBtn.open to navbar */
const menuBtn = document.querySelector(".menu-btn");
const navBar = document.querySelector(".nav-bar");
const mainContent = document.querySelector(".main-content");

//menuOpen default to closed
let menuOpen = false;

//event listener that opens or closes onclick based on current state
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuOpen = true;
    menuBtn.classList.add("open");
    mainContent.classList.add("open");
    navBar.classList.add("open");
    openNav();
  } else {
    menuOpen = false;
    menuBtn.classList.remove("open");
    navBar.classList.remove("open");
    mainContent.classList.remove("open");
    closeNav();
  }
});

//swiper init
const swiper = new Swiper(".swiper", {
  loop: true,

  // pagination init
  pagination: {
    el: ".swiper-pagination",   
    clickable: true,
  },

  // nav arrows init
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // autoplay init
  autoplay: {
    delay: 5000,
  },
});

// button declaration
let mybutton = document.getElementById("topBtn");


//scrolling down the page causes the button to appear
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// function to return to top of page on button click
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
