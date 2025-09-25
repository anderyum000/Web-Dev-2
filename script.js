const burgermenu = document.querySelector('.burger-menu')
const nav = document.querySelector('nav')
let menuOpen = false;

burgermenu .addEventListener('click', () => {
    if (menuOpen == false) {
        nav.style.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        nav.style.display = "none";
        menuOpen = false;
    }
});