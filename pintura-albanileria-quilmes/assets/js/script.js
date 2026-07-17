// ======================= Header =======================
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar_header");
  const body = document.body;
  const overlay = document.createElement("div");
  overlay.classList.add("body-overlay");
  body.appendChild(overlay);
  document.addEventListener("click", (e) => {
    const dropdowns = document.querySelectorAll(".dropdown");
    if (e.target.closest(".demo_txt")) {
      e.preventDefault();
      const clickedDropdown = e.target.closest(".dropdown");
      dropdowns.forEach((d) => {
        if (d !== clickedDropdown) d.classList.remove("active");
      });
      clickedDropdown.classList.toggle("active");
      return;
    }
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((d) => d.classList.remove("active"));
    }
  });
  document.addEventListener("click", (e) => {
    const hamburger = e.target.closest(".hamburger");
    const overlayClicked = e.target.closest(".body-overlay");
    if (hamburger) {
      e.stopPropagation();
      navbar.classList.toggle("active");
      body.classList.toggle("sidebar-open");
      overlay.classList.toggle("active");
    }
    if (overlayClicked) {
      navbar.classList.remove("active");
      body.classList.remove("sidebar-open");
      overlay.classList.remove("active");
    }
  });
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".dropdown_menu a, .nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
      const parentDropdown = link.closest(".dropdown");
      if (parentDropdown) {
        const mainLink = parentDropdown.querySelector(".demo_txt");
        if (mainLink) mainLink.classList.add("active");
      }
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1199) {
      navbar.classList.remove("active");
      body.classList.remove("sidebar-open");
      overlay.classList.remove("active");
    }
  });
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 0);
  });
});
// ======================= Hero slider =======================
var swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  slidesPerView: 1,
  speed: 1200,
  effect: "slide",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
// ======================= Animation =======================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    target.classList.toggle("show", isIntersecting);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(
      ".fade_up, .fade_down, .fade_right, .fade_left, .zoom_in, .zoom_out, .flip_left, .flip_right"
    )
    .forEach((el) => {
      if (!el.closest(".mySwiper")) {
        observer.observe(el);
      }
    });
});
// ======================= Counter =======================
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = { root: null, rootMargin: "0px", threshold: 0.5 };
  const setupCounter = (counter) => {
    const targetValue = counter.dataset.target || "";
    counter.innerHTML = "";
    targetValue.split("").forEach((_, index) => {
      const container = document.createElement("div");
      container.classList.add("digit-container");
      counter.appendChild(container);
    });
    const containers = counter.querySelectorAll(".digit-container");
    containers.forEach((container, index) => {
      container.innerHTML = "";
      const digits = Array.from({ length: 10 }, (_, i) => i);
      const orderedDigits = index % 2 === 0 ? digits : digits.slice().reverse();
      orderedDigits.forEach((digit) => {
        const span = document.createElement("span");
        span.classList.add("digit");
        span.textContent = digit;
        container.appendChild(span);
      });
      if (index % 2 !== 0) container.style.transform = "translateY(-9em)";
    });
  };
  const rollCounter = (counter) => {
    if (counter.classList.contains("counted")) return;
    const targetValue = counter.dataset.target;
    const plus = counter.dataset.plus;
    const containers = counter.querySelectorAll(".digit-container");
    targetValue.split("").forEach((digitChar, index) => {
      const targetDigit = parseInt(digitChar, 10);
      const offset = index % 2 === 0 ? -targetDigit : -(9 - targetDigit);
      containers[index].style.transform = `translateY(${offset}em)`;
    });
    if (plus) {
      const plusElem = document.createElement("span");
      plusElem.textContent = plus;
      plusElem.classList.add("plus-sign");
      counter.appendChild(plusElem);
      setTimeout(() => plusElem.classList.add("plus-show"), 500);
    }
    counter.classList.add("counted");
  };
  const initCounters = () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(setupCounter);
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          rollCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
    counters.forEach((counter) => observer.observe(counter));
  };
  initCounters();
});
// ======================= Image Animation =======================
document.addEventListener("DOMContentLoaded", () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 100;
  const handleReveal = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    const inView = elementTop < windowHeight - elementVisible;
    if (inView) {
      el.classList.add("active");
    } else if (!el.classList.contains("no-animation")) {
      el.classList.remove("active");
    }
  };
  const initRevealElements = () => {
    document.querySelectorAll(".reveal").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < windowHeight) {
        el.classList.add("active", "no-animation");
      }
    });
  };
  const revealOnScroll = () => {
    document.querySelectorAll(".reveal").forEach(handleReveal);
  };
  initRevealElements();
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll, { passive: true });
});
// ======================= Testimonial_Slider =======================
var swiper = new Swiper(".mySwiper1", {
  loop: true,
  speed: 5000,
  spaceBetween: 40,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    1399: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".Testimonial_slider", {
  loop: true,
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },
});
// ======================= Work_Slider =======================
var workSwiper = new Swiper(".work_slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 2, spaceBetween: 12 },
    575: { slidesPerView: 2, spaceBetween: 20 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
});
// ======================= Work_Slider_revers =======================
var workSwiper = new Swiper(".work_slider1", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 2, spaceBetween: 12 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4, spaceBetween: 20 },
  },
});
// ======================= Drop_Down =======================
document.addEventListener("DOMContentLoaded", () => {
  const dreamInputContainer = document.querySelector(".dream_inp");
  const dreamInput = document.querySelector(".dream_input1");
  const dropdown = document.querySelector(".custom_dropdown");
  const dropdownIcon = document.querySelector(".dropdown_icon");
  if (!dreamInputContainer || !dreamInput || !dropdown || !dropdownIcon) return;
  const toggleDropdown = (show) => {
    const isOpen = dropdown.classList.contains("open");
    const shouldOpen = show ?? !isOpen;
    dropdown.style.display = shouldOpen ? "block" : "none";
    dreamInputContainer.classList.toggle("open", shouldOpen);
    dropdown.classList.toggle("open", shouldOpen);
  };
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".dream_input1") || target.closest(".dropdown_icon")) {
      toggleDropdown();
      return;
    }
    const option = target.closest(".custom_dropdown li");
    if (option) {
      dreamInput.value = option.textContent.trim();
      toggleDropdown(false);
      return;
    }
    if (!target.closest(".dream_inp")) {
      toggleDropdown(false);
    }
  });
});
// ======================= Background_animation =======================
document.addEventListener("DOMContentLoaded", () => {
  const paintBg = document.getElementById("paint-bg");
  if (paintBg) {
    particlesJS("paint-bg", {
      particles: {
        number: { value: 10, density: { enable: true, value_area: 900 } },
        color: { value: ["#4a0000", "#7f0000", "#FF5733", "#ffffff"] },
        shape: { type: "circle" },
        opacity: { value: 0.6, random: true },
        size: {
          value: 70,
          random: true,
          anim: { enable: true, speed: 1, size_min: 40, sync: false },
        },
        move: {
          enable: true,
          speed: 0.7,
          random: true,
          straight: false,
          out_mode: "bounce",
          bounce: true,
        },
        line_linked: {
          enable: true,
          distance: 200,
          color: "#8B0000",
          opacity: 0.1,
          width: 2,
        },
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 200, line_linked: { opacity: 0.3 } } },
      },
      retina_detect: true,
    });
  }
});

// ======================= ScrollMagic =======================
var controller = new ScrollMagic.Controller();
var slides = $(".image");
for (var i = 0; i < slides.length; i++) {
  var image = $("img", slides[i]);
  var tween = TweenMax.to(image, 1, { scale: 1.6, ease: Power0.easeNone });
  var scene = new ScrollMagic.Scene({
    triggerElement: slides[i],
    duration: "150%",
    triggerHook: "onEnter",
  })
    .setTween(tween)
    .addTo(controller);
}
// ======================= Preloader =======================
setTimeout(() => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");
  preloader.style.transition = "opacity 0.8s";
  preloader.style.opacity = 0;
  setTimeout(() => {
    preloader.style.display = "none";
    mainContent.style.display = "block";
  }, 800);
}, 1000);
// ======================= Bottom To Top =======================
document.addEventListener("scroll", () => {
  const btn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});
document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// ======================= Custom Cursor =======================
(function () {
  if (typeof TweenMax === "undefined") {
    console.error("GSAP (TweenMax) not loaded.");
    return;
  }
  const outer = document.querySelector(".circle-cursor--outer");
  const inner = document.querySelector(".circle-cursor--inner");
  if (!outer || !inner) return;
  const outerBox = outer.getBoundingClientRect();
  let x = -100,
    y = -100;
  const speed = 0.25;
  document.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
  });
  (function render() {
    TweenMax.set(inner, { x, y });
    TweenMax.to(outer, speed, {
      x: x - outerBox.width / 2,
      y: y - outerBox.height / 2,
      overwrite: true,
    });
    requestAnimationFrame(render);
  })();
  const HOVER_SELECTOR =
    'a, button, .btn, .nav-link, [role="button"], input[type="button"], input[type="submit"]';
  function grow() {
    TweenMax.to(outer, 0.25, { scale: 1.2, borderWidth: 2 });
    TweenMax.to(inner, 0.2, { scale: 1.1, opacity: 0.8 });
  }
  function shrink() {
    TweenMax.to(outer, 0.25, { scale: 1, borderWidth: 1 });
    TweenMax.to(inner, 0.2, { scale: 1, opacity: 1 });
  }
  document.querySelectorAll(HOVER_SELECTOR).forEach((el) => {
    el.addEventListener("mouseenter", grow);
    el.addEventListener("mouseleave", shrink);
  });
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(HOVER_SELECTOR)) grow();
  });
  document.addEventListener("mouseout", (e) => {
    if (
      e.relatedTarget &&
      e.relatedTarget.closest &&
      e.relatedTarget.closest(HOVER_SELECTOR)
    )
      return;
    if (!e.target.closest(HOVER_SELECTOR)) shrink();
  });
})();
// ======================= Image_hero_slider =======================
var swiper1 = new Swiper(".home_second_slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
// ======================= Video_hero_slider =======================
var swiper1 = new Swiper(".home_video_slider", {
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
var swiper1 = new Swiper(".home_video_slider1", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: { crossFade: true },
  on: {
    slideChangeTransitionStart: function () {
      this.slides.forEach((slide) => {
        const video = slide.querySelector("video");
        if (video) video.pause();
      });
    },
    slideChangeTransitionEnd: function () {
      const activeSlide = this.slides[this.activeIndex];
      const video = activeSlide.querySelector("video");
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    },
  },
});
// ======================= Building_slider =======================
var swiper = new Swiper(".mySwiper_custom", {
  slidesPerView: 3.3,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    991: {
      slidesPerView: 3.3,
    },
    540: {
      slidesPerView: 2.8,
    },
    450: {
      slidesPerView: 2.3,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
// ======================= Progress_bar =======================
jQuery(document).ready(function () {
  jQuery(document).on("scroll", function () {
    if (jQuery("html,body").scrollTop() > jQuery("#first-sec").height()) {
      jQuery(".progress-bar").each(function () {
        jQuery(this)
          .find(".progress-content")
          .animate(
            {
              width: jQuery(this).attr("data-percentage"),
            },
            2000
          );

        jQuery(this)
          .find(".progress-number-mark")
          .animate(
            {
              left: jQuery(this).attr("data-percentage"),
            },
            {
              duration: 2000,
              step: function (now, fx) {
                var data = Math.round(now);
                jQuery(this)
                  .find(".percent")
                  .html(data + "%");
              },
            }
          );
      });
    }
  });
});
// ======================= Open_teamdetail =======================
document.addEventListener("DOMContentLoaded", () => {
  const teamBoxes = document.querySelectorAll(".team_box");
  if (!teamBoxes.length) return;
  teamBoxes.forEach((box) => {
    box.style.cursor = "pointer";
    box.addEventListener("click", (event) => {
      if (event.target.closest(".social-icons a")) return;
      window.location.href = "team_details.html";
    });
  });
});
// ======================= Open_teamdetail_page =======================
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".redirect_link");
  if (!links.length) return;
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});
// ======================= Service_paly =======================
document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const coverImage = document.getElementById("coverImage");
  const videoPlayer = document.getElementById("videoPlayer");
  if (!playButton || !coverImage || !videoPlayer) return;
  playButton.addEventListener("click", () => {
    coverImage.style.opacity = "0";
    playButton.style.opacity = "0";
    videoPlayer.style.opacity = "1";
    videoPlayer.style.pointerEvents = "auto";
    videoPlayer.play();
  });
});
// ======================= Youtub_video =======================
document.addEventListener("DOMContentLoaded", () => {
  const videoBox = document.getElementById("videoBox");
  if (!videoBox) return;
  const videoId = "HxqqP05TS9I";
  videoBox.addEventListener("click", () => {
    videoBox.classList.add("video-loaded");
    videoBox.innerHTML = `
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1"
        title="Simple Wall Texture Tutorial"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    `;
  });
});
// ======================= Custome_date =======================
$(function () {
  if ($.fn.datepicker) {
    const $input = $("#datepicker");
    const $trigger = $("#datepicker-trigger");
    $input.datepicker({
      dateFormat: "dd/mm/yy",
      showOn: "focus",
    });
    $trigger.on("click", function () {
      $input.datepicker("show");
    });
  }
});
// ======================= Pricing_plan =======================
$(function () {
  const $toggle = $("#priceToggle");
  const $monthly = $(".monthly-plans");
  const $yearly = $(".yearly-plans");
  const $labelMonthly = $(".toggle-label1");
  const $labelYearly = $(".toggle-label2");
  if (!$toggle.length || !$monthly.length || !$yearly.length) return;
  $yearly.hide();
  $labelMonthly.css("color", "#FF2424");
  $labelYearly.css("color", "#000");

  $toggle.on("change", function () {
    const isYearly = this.checked;
    $labelMonthly.css("color", isYearly ? "#000" : "#FF2424");
    $labelYearly.css("color", isYearly ? "#FF2424" : "#000");
    const $hide = isYearly ? $monthly : $yearly;
    const $show = isYearly ? $yearly : $monthly;
    $hide.addClass("hide-animate");
    setTimeout(() => {
      $hide.hide().removeClass("show-animate hide-animate");
      $show.show().addClass("show-animate");
    }, 400);
  });
});
// ======================= Detail_slider =======================
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".serviceSwiper", {
    loop: true,
    speed: 1200,
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });
});
// ======================= Input_Number =======================
const numberInput = document.getElementById("onlyNumber");
if (numberInput) {
  numberInput.addEventListener("keydown", function (e) {
    if (
      [
        "Backspace",
        "Delete",
        "Tab",
        "Escape",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
      ].includes(e.key)
    ) {
      return;
    }
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  });
}
// ======================= Product_Filter =======================
var $mediaElements = $(".cd-item");
var $filterLinks = $(".filter_link");
var $loadMoreBtn = $("#showMoreBtn");
var $extraTeams = $(".extra-team");
let currentFilter = "all";
let isShownLoadMore = false;
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("showMoreBtn");
  if (!button) return;
  const textEl = button.querySelector(".text");
  function toggleTeams() {
    isShownLoadMore = !isShownLoadMore;
    const targetSelector =
      currentFilter === "all" ? ".extra-team" : `.extra-team.${currentFilter}`;
    const $targetTeams = $extraTeams.filter(targetSelector);
    if (isShownLoadMore) {
      $extraTeams.each(function () {
        $(this).removeClass("show force-hide").removeAttr("style");
        $(this).css("display", "none");
      });
      $targetTeams.each(function (index) {
        const team = this;
        team.style.display = "block";
        setTimeout(() => team.classList.add("show"), index * 100);
      });
    } else {
      $targetTeams.each(function (index) {
        const team = this;
        team.classList.remove("show");
        setTimeout(() => {
          $(team).addClass("force-hide").removeAttr("style");
        }, 400);
      });
    }
    if (textEl)
      textEl.textContent = isShownLoadMore ? "Show Less" : "Load More";
  }
  button.addEventListener("click", toggleTeams);
});
$filterLinks.on("click", function (e) {
  e.preventDefault();
  var filterVal = $(this).data("filter");
  currentFilter = filterVal;
  $mediaElements.stop(true, true).css("display", "none").removeClass("show");
  $filterLinks.removeClass("active");
  $(this).addClass("active");
  if (filterVal === "all") {
    $mediaElements.not(".extra-team").slideDown("slow");
    if (isShownLoadMore) {
      $extraTeams.each(function (index) {
        const team = this;
        team.style.display = "block";
        setTimeout(() => team.classList.add("show"), index * 100);
      });
    } else {
      $extraTeams.hide().removeClass("show");
    }
    $loadMoreBtn.show();
    $loadMoreBtn
      .find(".text")
      .text(isShownLoadMore ? "Show Less" : "Load More");
  } else {
    $mediaElements.filter("." + filterVal).slideDown("slow");
    if (isShownLoadMore) {
      const $visibleExtra = $extraTeams.filter("." + filterVal);
      $extraTeams.hide().removeClass("show");
      $visibleExtra.each(function (index) {
        const team = this;
        team.style.display = "block";
        setTimeout(() => team.classList.add("show"), index * 100);
      });
    } else {
      $extraTeams.hide().removeClass("show");
    }
    $loadMoreBtn.show();
    $loadMoreBtn
      .find(".text")
      .text(isShownLoadMore ? "Show Less" : "Load More");
  }
});
