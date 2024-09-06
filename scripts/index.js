const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');

});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
  

    const targetId = this.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth' 
    });
  });
});
