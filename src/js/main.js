

//hamburger navbar
function openNav() {
  document.getElementById("nav-bar").style.width = '25%';
}

function closeNav() {
  document.getElementById("nav-bar").style.width = '0%';
}

/* change menuBtn to menuBtn.open */
const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('.nav-bar');
const mainContent = document.querySelector('.main-content');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
      menuOpen = true;
      menuBtn.classList.add('open');
      mainContent.classList.add('open');
      openNav();

  } else {
      menuOpen = false;
      menuBtn.classList.remove('open');
      navBar.classList.remove('open');
      mainContent.classList.remove('open');
      closeNav();
  }
})

//swiper init & autoplay
const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
  },

});