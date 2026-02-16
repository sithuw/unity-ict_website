const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.navbar-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

navList.addEventListener('click', () => {
    navList.classList.toggle('active');
});


let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll Down
        header.style.top = "-120px"; // Hide the header
    } else {
        // Scroll Up
        header.style.top = "0"; // Show the header
    }
    lastScrollTop = scrollTop;
});
