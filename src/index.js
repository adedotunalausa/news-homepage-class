const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbarOverlay = document.querySelector(".navbar-overlay");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbarOverlay.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");

// ["<a class="nav-link" href="#">Categories</a>", "<a class="nav-link" href="#">Categories</a>"]

navLinks.forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navbarOverlay.classList.remove("active");
}));
