// Creations Carousel:
const slides = document.querySelectorAll('.carousel-item')
let slidePosition = 0
const totalSlides = slides.length

const nextButton = document.querySelector('.carousel-button-next')
const prevButton = document.querySelector('.carousel-button-prev')

nextButton.addEventListener("click", moveNextSlide)
prevButton.addEventListener('click', movePrevSlide)


function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-current')
        slide.classList.add('carousel-item')
    }
}

function moveNextSlide() {
    hideAllSlides()
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }

    slides[slidePosition].classList.add('carousel-item-current')
}

function movePrevSlide() {
    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }

    slides[slidePosition].classList.add('carousel-item-current')
}