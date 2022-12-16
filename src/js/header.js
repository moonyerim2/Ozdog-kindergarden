const toggleBtn = document.querySelector('.navbar-toggle');
const menu = document.querySelector(".navbar-list");

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});