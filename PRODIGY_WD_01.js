const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Add scroll shadow
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Scroll Spy (highlight active section link)
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
