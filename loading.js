
document.addEventListener("DOMContentLoaded", function () {
    var loadingScreen = document.getElementById("loading-screen");
    var main = document.getElementById("main");

    setTimeout(function () {
        // Dodaj klasę z animacją
        loadingScreen.classList.add("fade-out");
        // Ukryj ekran ładowania po zakończeniu animacji
        setTimeout(function () {
            loadingScreen.style.display = "none";
            // Pokaż kontener Three.js
            main.style.display = "block";
        }, 4000); // Czas trwania animacji w milisekundach
    }, 2000); // Tutaj możesz dostosować czas opóźnienia
});