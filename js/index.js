var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}


if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}
const $tabBtns = document.querySelectorAll("[data-tab-btn]");
let LastActiveTab = document.querySelector("[data-tab-content].active");
let LastActiveTabBtn = document.querySelector("[data-tab-btn].active");

$tabBtns.forEach(item => {
item.addEventListener("click", function() {
LastActiveTab.classList.remove("active");
LastActiveTabBtn.classList.remove("active");

const tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
tabContent.classList.add("active");
this.classList.add("active");

LastActiveTab = tabContent;
LastActiveTabBtn = this;
});
});
ScrollReveal().reveal('.heroo p', {
   delay: 200,
   duration: 1000,
   origin: 'left',
   distance: '50px',
   easing: 'ease-in-out'
});

ScrollReveal().reveal('.heroo h2', {
   delay: 400,
   duration: 1000,
   origin: 'right',
   distance: '50px',
   easing: 'ease-in-out'
});

ScrollReveal().reveal('.heroo button', {
   delay: 600,
   duration: 1000,
   origin: 'bottom',
   distance: '50px',
   easing: 'ease-in-out'
});

const sr = ScrollReveal({
   distance: '50px',
   duration: 1000,
   easing: 'ease-in-out',
   opacity: 0,
   reset: false 
});
document.addEventListener("DOMContentLoaded", function() {
   ScrollReveal().reveal('.off', {
       distance: '50px',
       origin: 'bottom',
       opacity: 0,
       duration: 1000,
       delay: 200,
       easing: 'ease-in-out',
       interval: 200,
   });
});
sr.reveal('.about-up', { origin: 'top', delay: 200 });
sr.reveal('.about-info', { origin: 'bottom', delay: 400 });

