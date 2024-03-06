const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log("Scroll!");
    if (window.scrollY > 550) {
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      gsap.to("#to-top", 0.2, {
        x: -180,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      gsap.to("#to-top", 0.2, {
        x: -0,
      });
    }
  }, 300)
);

const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const fadeElements = document.querySelectorAll(".visual .fade-in");

fadeElements.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

const testSwiper = new Swiper(".notice .inner .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  direction: "horizontal",
  autoplay: { delay: 5000 },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,

  // effect: "coverflow",
  // coverflowEffect: {
  //   // added
  //   rotate: 0, // added (Rotate of the prev and next slides)
  //   depth: 200, // added (Depth of the prev and next slides)
  //   stretch: 30, // added (Space between the slides)
  //   modifier: 1, // added (Multiply the values of rotate, depth, and stretch)
  //   scale: 1, // added (Size ratio of the prev and next slides)
  //   slideShadows: false, // added (Presence of shadow on the surfaces of the prev and next slides)
  // },

  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
  a11y: {
    prevSlideMessage: "이전요소로 슬라이드",
    nextSlideMessage: "다음요소로 슬라이드",
    slideLabelMessage:
      "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
    paginationBulletMessage: "{{index}} 번째 슬라이드로 이동하기",
  },
  // breakpoints: {
  //   1500: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //   },
  // },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

function random(min, max) {
  return parseFloat(Math.random() * (max - min) + min).toFixed(2);
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, {
    delay: delay,
    duration: 2.5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    y: 100,
  });
}

floatingObject(".floating1", random(1, 2), 100);
floatingObject(".floating2", random(1, 2.5), 50);
floatingObject(".floating3", random(1, 2), 30);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,

  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
