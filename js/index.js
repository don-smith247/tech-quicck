const sr = ScrollReveal({
   origin: "top",
   distance: "80px",
   duration: 2000,
   reset: true,
});

// About Us section animations
sr.reveal(".about-container h2", { delay: 100 });
sr.reveal(".intro-text", { delay: 200 });
sr.reveal(".about-item", { interval: 200 });

// Our Services section animations
sr.reveal(".section-subtitle", { delay: 100 });
sr.reveal(".section-title", { delay: 200 });
sr.reveal(".service-card", { interval: 200 });

// Existing animations
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 100 });
sr.reveal(".text-btn", { delay: 100 });
sr.reveal(".socials_icons", { delay: 100 });
sr.reveal(".featured-image", { delay: 320 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

// Left animations
const srLeft = ScrollReveal({
   origin: "left",
   distance: "80px",
   duration: 2000,
   reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

// Right animations
const srRight = ScrollReveal({
   origin: "right",
   distance: "80px",
   duration: 2000,
   reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

// Active link update on scroll
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
   const scrollY = window.pageYOffset;

   sections.forEach((current) => {
       const sectionHeight = current.offsetHeight;
       const sectionTop = current.offsetTop - 50;
       const sectionId = current.getAttribute("id");

       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
           document
               .querySelector(".nav-menu a[href*=" + sectionId + "]")
               .classList.add("active-link");
       } else {
           document
               .querySelector(".nav-menu a[href*=" + sectionId + "]")
               .classList.remove("active-link");
       }
   });
}

window.addEventListener("scroll", scrollActive);
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