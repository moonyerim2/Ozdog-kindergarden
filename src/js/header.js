const toggleBtn = document.querySelector('.navbar-toggle');
const menu = document.querySelector(".navbar-list");

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('nav-active');
});

function goToScroll(name) {
  const location = document.querySelector("." + name).offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
    menu.classList.toggle("nav-active");
}
