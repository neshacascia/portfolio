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

// Particles:
particlesJS('particles-js', {
  particles: {
    number: {
      value: 30,
      density: { enable: false, value_area: 3206.8241217310456 },
    },
    color: { value: '#ffffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 },
      image: { src: 'img/github.svg', width: 100, height: 100 },
    },
    opacity: {
      value: 0.13629002517356945,
      random: false,
      anim: {
        enable: false,
        speed: 1.380452788514634,
        opacity_min: 0.2842108682236011,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 0,
        size_min: 29.23311787442754,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 188.44356791251798, //208.44356791251798
      color: '#ffffff',
      opacity: 0.1683582663908799,
      width: 0,
    },
    move: {
      enable: true,
      speed: 2.206824121731046, //3.206824121731046
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
