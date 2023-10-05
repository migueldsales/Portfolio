const headerNav = document.querySelector('.header__nav');
const toggleMenu = document.querySelector('.toggle__menu');
toggleMenu.addEventListener('click', ()=>{
    headerNav.classList.toggle('open');
    toggleMenu.classList.toggle('open');
});

const nav = document.querySelectorAll(".header__nav ul li");
nav.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// function animateElements() {
//   var item1 = document.getElementById('item1');
//   var item2 = document.getElementById('item2');
//   var item3 = document.getElementById('item3');

//   window.addEventListener('scroll', function() {
//       var yOffset = window.pageYOffset;
//       console.log(window.pageYOffset);
//       if (yOffset >= 1200) {
//           item1.style.opacity = "1";
//       }
//       if (yOffset >= 2300) {
//           item2.style.opacity = "1";
//       }
//       if (yOffset >= 3200) {
//           item3.style.opacity = "1";
//       }
//   });
// }

// animateElements();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.project__list');
hiddenElements.forEach((el) => observer.observe(el));