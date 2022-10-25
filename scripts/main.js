function openNav() {
  document.getElementById("nav-bar").style.width = "25%";
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
