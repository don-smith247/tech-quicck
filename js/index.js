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
function closeIntro() {
   document.getElementById('videoOverlay').style.display = 'none';
   document.getElementById('landingPageContent').style.display = 'block';
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
ScrollReveal().reveal('.about-section h2', {
   origin: 'left',
   distance: '100px',
   duration: 1000,
   easing: 'ease-in-out',
   delay: 200
});

ScrollReveal().reveal('.intro-text', {
   origin: 'right',
   distance: '100px',
   duration: 1000,
   easing: 'ease-in-out',
   delay: 400
});

ScrollReveal().reveal('.about-item', {
   origin: 'bottom',
   distance: '50px',
   duration: 1000,
   easing: 'ease-in-out',
   interval: 200 
});
ScrollReveal().reveal('.service-card', {
   origin: 'bottom',         
   distance: '50px',         
   duration: 1000,           
   delay: 200,               
   easing: 'ease-in-out',    
   reset: false,             
   interval: 200             
 });
 ScrollReveal().reveal('.team-member', {
   origin: 'bottom',        
   distance: '50px',         
   duration: 1000,           
   delay: 200,               
   easing: 'ease-in-out',   
   reset: false,            
   interval: 200            
 });