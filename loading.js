// document.addEventListener("DOMContentLoaded", function () {
//     var loadingScreen = document.getElementById("loading-screen");
//     var main = document.getElementById("main");

//     setTimeout(function () {
//         // Dodaj klasę z animacją
//         loadingScreen.classList.add("fade-out");
//         // Ukryj ekran ładowania po zakończeniu animacji
//         setTimeout(function () {
//             loadingScreen.style.display = "none";
//             // Pokaż kontener Three.js
//             main.style.display = "block";
//         }, 4000); // Czas trwania animacji w milisekundach
//     }, 3000); // Tutaj możesz dostosować czas opóźnienia
// });

window.onload = function () {
    var loadingScreen = document.getElementById("loading-screen");
    var main = document.getElementById("main");

    // Dodaj klasę z animacją fade-out po załadowaniu strony
    loadingScreen.classList.add("fade-out");

    // Ukryj ekran ładowania po zakończeniu animacji
    setTimeout(function () {
        loadingScreen.style.display = "none";  // Ukrywa loading screen
        main.style.display = "block";  // Pokazuje główną treść
    }, 3000); // Czas trwania animacji fade-out (dopasuj według potrzeby)
};