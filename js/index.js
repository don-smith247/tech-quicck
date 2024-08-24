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
  
  const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false 
  });

 
  sr.reveal('.buy h2', { origin: 'top', delay: 200 });
  sr.reveal('.buy p', { origin: 'left', delay: 400 });
  sr.reveal('.all-btn button', { origin: 'bottom', interval: 100 });
  sr.reveal('.boxx', { origin: 'right', interval: 200 });
  sr.reveal('.view-btn', { origin: 'bottom', delay: 600 });

ScrollReveal().reveal('.we h2', {
   origin: 'top',
   distance: '50px',
   duration: 1000,
   delay: 200,
   reset: true
});

ScrollReveal().reveal('.offers', {
   origin: 'bottom',
   distance: '50px',
   duration: 1000,
   delay: 300,
   interval: 200,
   reset: true
});

ScrollReveal().reveal('.off', {
   origin: 'right',
   distance: '50px',
   duration: 1000,
   delay: 400,
   interval: 200,
   reset: true
});
document.addEventListener('DOMContentLoaded', function () {
   
   ScrollReveal().reveal('.about-up h2', {
       duration: 1000,
       origin: 'left',
       distance: '50px',
       delay: 200
   });

   
   ScrollReveal().reveal('.about-up p', {
       duration: 1000,
       origin: 'right',
       distance: '50px',
       delay: 400
   });

   
   ScrollReveal().reveal('.about-title', {
       duration: 1200,
       origin: 'bottom',
       distance: '70px',
       delay: 600
   });
});

ScrollReveal().reveal('.our-team h2', {
   origin: 'top',
   distance: '20px',
   duration: 1000,
   delay: 300
});

ScrollReveal().reveal('.developer', {
   origin: 'bottom',
   distance: '50px',
   duration: 1000,
   delay: 200,
   interval: 200
});

ScrollReveal().reveal('.dev', {
   origin: 'bottom',
   distance: '50px',
   duration: 1000,
   delay: 400
});

ScrollReveal().reveal('.devv', {
   origin: 'bottom',
   distance: '50px',
   duration: 1000,
   delay: 600
});

ScrollReveal().reveal('.devvy', {
   origin: 'bottom',
   distance: '50px',
   duration: 1000,
   delay: 400
});

ScrollReveal().reveal('.devy', {
   origin: 'bottom',
   distance: '50px',
   duration: 1000,
   delay: 600
});

ScrollReveal().reveal('.deevy', {
   origin: 'bottom',
   distance: '50px',
   duration: 1000,
   delay: 600
});

ScrollReveal().reveal('footer h2', {
   origin: 'left',
   distance: '50px',
   duration: 1000,
   delay: 200,
});

ScrollReveal().reveal('footer p', {
   origin: 'right',
   distance: '50px',
   duration: 1000,
   delay: 400,
});

ScrollReveal().reveal('footer a', {
   origin: 'bottom',
   distance: '30px',
   duration: 800,
   delay: 600,
   interval: 200, 
});

ScrollReveal().reveal('.footer-first-ul', {
   origin: 'left',
   distance: '50px',
   duration: 1000,
   delay: 800,
});

ScrollReveal().reveal('.footer-second-ul', {
   origin: 'right',
   distance: '50px',
   duration: 1000,
   delay: 1000,
});

ScrollReveal().reveal('.containerr h2', {
   duration: 1000,
   origin: 'top',
   distance: '50px'
});

ScrollReveal().reveal('.slide', {
   duration: 1000,
   origin: 'bottom',
   distance: '50px',
   interval: 200
});
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe-container').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(5, 50, 50);
const texture = new THREE.TextureLoader().load('https://www.solarsystemscope.com/textures/download/8k_earth_daymap.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

camera.position.z = 15;

function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.005; 
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
