// let sectionOffsets = {};

// document.addEventListener("DOMContentLoaded", () => {
//     const sections = document.querySelectorAll('.text-content, .skills-content, .head-container');

//     window.addEventListener("wheel", e => {
//         e.preventDefault();

//         const deltaY = e.deltaY;

//         if (deltaY !== 0) {
//             const direction = deltaY > 0 ? 1 : -1;
//             window.scrollTo({
//                 top: window.scrollY + direction * window.innerHeight,
//                 behavior: 'smooth'
//             });
//         }
//     }, { passive: false });
// });

// function customScrollTo(to, duration, easingFunction) {
//     let start = window.scrollY || window.pageYOffset;

//     let time = Date.now();
//     let timeElapsed = 0;

//     let speed = (to - start) / duration;

//     (function move() {
//         if (timeElapsed > duration) {
//             return;
//         }

//         timeElapsed = Date.now() - time;

//         let dy = speed * timeElapsed;
//         let y = start + dy;

//         let _y = (y - start) / (to - start);
//         _y = easingFunction(_y);
//         y = start + (to - start) * _y;

//         window.scrollTo(0, y);
//         window.requestAnimationFrame(move);
//     })();
// }

function scrollDown() {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
}

// function isInViewport(elem) {
//     var bounding = elem.getBoundingClientRect();
//     return (
//         bounding.top >= 0 &&
//         bounding.left >= 0 &&
//         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// var page1 = document.querySelector('.head-container');
// var page2 = document.querySelector('.text-content');
// var page3 = document.querySelector('.skills-content');
// var dot1 = document.querySelector('.dot1');
// var dot2 = document.querySelector('.dot2');
// var dot3 = document.querySelector('.dot3');

// var dots = [dot1, dot2, dot3];
// var pages = [page1, page2, page3];

// function updateActiveDot() {
//     var scrollY = window.scrollY || window.pageYOffset;

//     var activeDotIndex = Math.floor(scrollY / window.innerHeight);

//     dots.forEach(function (dot, index) {
//         if (index === activeDotIndex) {
//             dot.classList.add('dots-active');
//         } else {
//             dot.classList.remove('dots-active');
//         }
//     });
// }

// document.addEventListener('scroll', updateActiveDot);


const positionInfo = document.getElementById('position-info');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    positionInfo.innerHTML = `<span class="x">X</span> ${mouseX} <br>
                              <span class="y">Y</span> ${mouseY}`;
});


// window.addEventListener('devtoolschange', function (e) {
//     if (e.detail.open) {
//         alert('Narzędzia deweloperskie są niedozwolone!');
//     }
// });

// document.addEventListener('keydown', function (e) {
//     if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
//         alert('Narzędzia deweloperskie są niedozwolone!');
//     }
// });

// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });


document.addEventListener('DOMContentLoaded', function () {
    const cntButton = document.getElementById('cntButton');
    const clickedIcon = document.querySelector('#cntButton .clicked');
    const normalIcon = document.querySelector('#cntButton .normal');
    const cntDiv = document.getElementById('cnt');

    // Funkcja obsługująca kliknięcie na przycisk
    function handleClick(event) {
        event.preventDefault();
        cntDiv.classList.toggle('hidden'); // Ukryj/pokaż div
        clickedIcon.classList.toggle('hidden'); // Ukryj/pokaż ikonę klikniętą
        normalIcon.classList.toggle('hidden'); // Ukryj/pokaż ikonę normalną
    }

    // Dodaj obsługę kliknięcia dla przycisku
    cntButton.addEventListener('click', handleClick);
});


const contentDiv = document.getElementById('cnt');
const toggleButton = document.getElementById('cntButton');

toggleButton.addEventListener('click', function () {
    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'block';
    } else {
        contentDiv.style.display = 'none';
    }
});
