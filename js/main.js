const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            !mobileMenu.classList.contains("hidden")
        );
    });
}

const semesterButton = document.getElementById("semesterButton");
const semesterMenu = document.getElementById("semesterMenu");
const semesterArrow = document.getElementById("semesterArrow");

if (semesterButton && semesterMenu) {
    semesterButton.addEventListener("click", () => {
        semesterMenu.classList.toggle("hidden");

        if (semesterArrow) {
            semesterArrow.classList.toggle("rotate-180");
        }
    });
}