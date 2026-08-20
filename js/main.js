document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Menu Toggle ---
    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            // Toggle visibility classes
            mobileMenu.classList.toggle("hidden");
            mobileMenu.classList.toggle("flex");

            // Update accessibility attribute
            menuButton.setAttribute(
                "aria-expanded",
                !mobileMenu.classList.contains("hidden")
            );
        });
    }

    // --- 2. Mobile Semester Dropdown Toggle ---
    const semesterButton = document.getElementById("semesterButton");
    const semesterMenu = document.getElementById("semesterMenu");
    const semesterArrow = document.getElementById("semesterArrow");

    if (semesterButton && semesterMenu) {
        semesterButton.addEventListener("click", () => {
            semesterMenu.classList.toggle("hidden");
            semesterMenu.classList.toggle("flex");

            if (semesterArrow) {
                semesterArrow.classList.toggle("rotate-180");
            }
        });
    }

    // --- 3. Active Link Auto-Highlighting ---
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // If the href matches the current page URL, highlight it
        if (link.getAttribute('href') === currentPath) {
            link.classList.remove('text-gray-600', 'text-gray-700');
            link.classList.add('text-indigo-600', 'bg-indigo-50');
        }
    });

    // --- 4. Back to Top Button Logic ---
    const topBtn = document.getElementById('backToTop');

    if (topBtn) {
        window.addEventListener('scroll', () => {
            // Show button after scrolling down 400 pixels
            if (window.scrollY > 400) {
                topBtn.classList.remove('opacity-0', 'invisible');
                topBtn.classList.add('opacity-100', 'visible');
            } else {
                topBtn.classList.add('opacity-0', 'invisible');
                topBtn.classList.remove('opacity-100', 'visible');
            }
        });

        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// --- Slideshow Functionality ---
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    if (index >= slides.length) { currentSlide = 0; }
    if (index < 0) { currentSlide = slides.length - 1; }

    slides.forEach((slide, i) => {
        slide.style.opacity = (i === currentSlide) ? '1' : '0';
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}