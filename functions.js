function selectButton(buttonType) {
    const ownBtn = document.getElementById("own");
    const commercialBtn = document.getElementById("commercial");

    // Resetowanie przycisków
    ownBtn.classList.remove("btn-custom-active");
    commercialBtn.classList.remove("btn-custom-active");

    // Aktywowanie wybranego przycisku
    if (buttonType === 'own') {
        ownBtn.classList.add("btn-custom-active");

        // Pokazuje karuzelę Własne z animacją
        const ownCarousel = document.getElementById("own-carousel");
        ownCarousel.classList.remove("hidden");
        ownCarousel.classList.add("carousel-slide-top"); // Dodajemy animację

        // Ukrywa karuzelę commercial
        const commercialCarousel = document.getElementById("commercial-carousel");
        commercialCarousel.classList.add("hidden");
    } else {
        commercialBtn.classList.add("btn-custom-active");

        // Pokazuje karuzelę commercial z animacją
        const commercialCarousel = document.getElementById("commercial-carousel");
        commercialCarousel.classList.remove("hidden");
        commercialCarousel.classList.add("carousel-slide-top"); // Dodajemy animację

        // Ukrywa karuzelę Własne
        const ownCarousel = document.getElementById("own-carousel");
        ownCarousel.classList.add("hidden");
    }
}

// Domyślnie wybierz opcję "Własne"
window.addEventListener('DOMContentLoaded', (event) => {
    selectButton('own');
});


document.querySelectorAll('.btn-slider').forEach(function(button) {
    button.addEventListener('click', function(e) {

        // Usuwamy klasę 'active' ze wszystkich przycisków
        document.querySelectorAll('.btn-slider').forEach(function(btn) {
            btn.classList.remove('btn-slider-active');
        });

        // Dodajemy klasę 'active' do klikniętego przycisku
        button.classList.add('btn-slider-active');
    });
});