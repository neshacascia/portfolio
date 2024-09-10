const mobileNav = document.querySelector('#mobile-menu');
const toggleButton = document.querySelector('.slider');

const mobileMenuNavLinks = document.querySelectorAll('#nav-item');
mobileMenuNavLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

let isDarkMode = true;
document.documentElement.classList.add('dark');

function openMobileMenu() {
  mobileNav.classList.remove('hidden');
}

function closeMobileMenu() {
  mobileNav.classList.add('hidden');
}

// toggle theme
function toggleTheme() {
  if (isDarkMode) {
    isDarkMode = false;
    toggleButton.classList.remove('before:right-[4px]', 'rightSlider');
    toggleButton.classList.add('before:left-[4px]', 'leftSlider');
    document.documentElement.classList.remove('dark');
  } else {
    isDarkMode = true;
    toggleButton.classList.remove('before:left-[4px]', 'leftSlider');
    toggleButton.classList.add('before:right-[4px]', 'rightSlider');
    document.documentElement.classList.add('dark');
  }
}

// form submission:
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
    .then(() => {
      const messageModal = document.querySelector('#message-modal');
      messageModal.classList.remove('hidden');
      messageModal.classList.add('flex');
      setTimeout(() => {
        messageModal.classList.add('hidden');
      }, 2500);
      myForm.reset();
      console.log('Form successfully submitted');
    })
    .catch(error => alert(error));
}
