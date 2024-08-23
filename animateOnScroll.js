const animateElements = document.querySelectorAll('.animate-text, .animate-card');

function animateOnScroll() {
    animateElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight * 1 && !element.classList.contains('show')) {
            element.classList.add('show');
        } else if (elementPosition > windowHeight * 1 && element.classList.contains('show')) {
            element.classList.remove('show');
        }
    });
}

// Wywołanie animateOnScroll() po załadowaniu strony
window.addEventListener('load', animateOnScroll);

// Nasłuchiwanie zdarzenia scroll
window.addEventListener('scroll', animateOnScroll);