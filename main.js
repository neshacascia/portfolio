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

// copy email:
function copyEmail() {
  const email = 'neshacascia@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const messageModal = document.querySelector('#copy-message');
    messageModal.classList.remove('hidden');
    messageModal.classList.add('flex');
    setTimeout(() => {
      messageModal.classList.add('hidden');
    }, 2500);

    console.log('Email copied to clipboard!');
  });
}
