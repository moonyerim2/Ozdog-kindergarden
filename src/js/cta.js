const aboutTitle = document.querySelector(".about-container .section-title");
const cta = document.querySelector(".cta");

const left = aboutTitle.getBoundingClientRect().left;

if (left > "20") {
  cta.style.transform = `translate(${left}px, 405px)`;
}

window.addEventListener("resize", () => {
  const left = aboutTitle.getBoundingClientRect().left;

  if (left <= "20") {
    cta.style.transform = `translateX(0px)`;
    return;
  }

  cta.style.transform = `translate(${left}px, 405px)`;
});
