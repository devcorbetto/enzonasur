const header = document.querySelector("[data-header]");

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll("details[open]").forEach((openDetail) => {
      if (openDetail !== detail) openDetail.open = false;
    });
  });
});

const heroSlides = [...document.querySelectorAll(".hero-slide")];
const heroDots = [...document.querySelectorAll("[data-hero-dot]")];
let heroIndex = 0;

function setHeroSlide(nextIndex) {
  if (!heroSlides.length) return;
  heroIndex = (nextIndex + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === heroIndex);
  });
  heroDots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === heroIndex);
  });
}

heroDots.forEach((dot, index) => {
  dot.addEventListener("click", () => setHeroSlide(index));
});

if (heroSlides.length > 1) {
  window.setInterval(() => setHeroSlide(heroIndex + 1), 5200);
}

document.querySelectorAll("[data-card-slider]").forEach((slider) => {
  const track = slider.querySelector("[data-slider-track]");
  const previous = slider.querySelector("[data-slider-prev]");
  const next = slider.querySelector("[data-slider-next]");
  if (!track || !previous || !next) return;

  const scrollByCard = (direction) => {
    const firstCard = track.querySelector(".showcase-card");
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;
    track.scrollBy({
      left: direction * (cardWidth + 18),
      behavior: "smooth",
    });
  };

  previous.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));
});

const testimonials = [...document.querySelectorAll(".testimonial")];
let testimonialIndex = 0;

function setTestimonial(nextIndex) {
  if (!testimonials.length) return;
  testimonialIndex = (nextIndex + testimonials.length) % testimonials.length;
  testimonials.forEach((item, index) => {
    item.classList.toggle("is-active", index === testimonialIndex);
  });
}

if (testimonials.length > 1) {
  window.setInterval(() => setTestimonial(testimonialIndex + 1), 4600);
}
