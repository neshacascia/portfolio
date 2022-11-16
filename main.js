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
document
  .querySelector('#contact-form')
  .addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const myForm = e.target;
  const contactFormData = new FormData(myForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(contactFormData).toString(),
  })
    .then(() => console.log('Form successfully submitted'))
    .catch(error => alert(error));
}
