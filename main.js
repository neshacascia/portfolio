const mobileNav = document.querySelector('#mobile-menu');

const mobileMenuNavLinks = document.querySelectorAll('#nav-item');
mobileMenuNavLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

function openMobileMenu() {
  mobileNav.classList.remove('hidden');
}

function closeMobileMenu() {
  mobileNav.classList.add('hidden');
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
    .then(() => {
      const messageModal = document.querySelector('.message-modal');
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
