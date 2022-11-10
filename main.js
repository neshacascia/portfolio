//Mobile Hamburger Menu:
const hamburgerBtn = document.querySelector('.nav-mobile');
const mobileNav = document.querySelector('.hamburger-menu');

hamburgerBtn.addEventListener('click', displayNavMenu);

function displayNavMenu() {
  hamburgerBtn.style.display = 'none';
  mobileNav.classList.toggle('active');

  const closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', closeNavMenu);

  const mobileNavLinks = document.querySelectorAll('.hm-nav-item');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeNavMenu);
  });
}

function closeNavMenu() {
  mobileNav.classList.remove('active');
  hamburgerBtn.style.display = 'block';
}

//Form Submission:
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('click', e => {
  e.preventDefault();

  const contactFormData = new FormData(contactForm);
  console.log(contactFormData); // FormData {}
});
