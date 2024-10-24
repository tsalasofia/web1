<script src="https://kit.fontawesome.com/63f39cf0a1.js" crossorigin="anonymous"></script>
function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
let slideIndex = 1;

function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex - 1) ? 'block' : 'none';
    });
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex - 1].classList.add('active');
}

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});
