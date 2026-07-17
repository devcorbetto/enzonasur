document.addEventListener("DOMContentLoaded", function () {
  if (window.lucide) {
    lucide.createIcons();
  }

  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  function updateHeader() {
    if (window.scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
    mobileMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i data-lucide="menu" size="22"></i>';
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function openMenu() {
    document.body.classList.add("menu-open");
    mobileMenu.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.innerHTML = '<i data-lucide="x" size="22"></i>';
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  menuToggle.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (window.gsap && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".city-hero .reveal", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out"
    });

    gsap.utils.toArray(".section .reveal, .cta-box.reveal").forEach(function (element) {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          once: true
        }
      });
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (element) {
      element.style.opacity = "1";
      element.style.transform = "none";
    });
  }
});
