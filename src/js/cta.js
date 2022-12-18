const aboutTitle = document.querySelector(".about-container .section-title");
const cta = document.querySelector(".cta");

const left = aboutTitle.getBoundingClientRect().left;

if (left > "20") {
  cta.style.top = `405px`;
  cta.style.left = `${left}px`;
}

window.addEventListener("resize", () => {
  const left = aboutTitle.getBoundingClientRect().left;

  if (left <= "20") {
    cta.style.top = `auto`;
    cta.style.left = `${left}px`;
    cta.classList.remove("cta-scroll");
    return;
  }

  if (this.scrollY === 0) {
    cta.style.top = `405px`;
    cta.style.left = `${left}px`;
  }
});

window.addEventListener("scroll", () => {
  cta.classList.add("cta-scroll");

  if (this.scrollY === 0) {
    const left = aboutTitle.getBoundingClientRect().left;
    if (left <= 20) return;
    cta.classList.remove("cta-scroll");
    cta.style.top = `405px`;
    cta.style.left = `${left}px`;
    return;
  }

  cta.style.top = `auto`;
  cta.style.left = `50%`;
});

function goToContact(name) {
  const location = document.querySelector("." + name).offsetTop;
  window.scrollTo({ top: location, behavior: "smooth" });
}

cta.addEventListener("click", () => {
  console.log(123);
  goToContact("contact");
});
