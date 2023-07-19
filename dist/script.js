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
