window.addEventListener('load', () => {
    AOS.refreshHard();
});

AOS.init({ once: true, duration: 500, offset: 200 });

const lenis = new Lenis({
  lerp: 0.05, 
  wheelMultiplier: 1, 
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.registerPlugin(ScrollTrigger) ;

ScrollTrigger.create({
    trigger: ".intro-image-scroll",
    start: "top top",
    end: "+=300px",
    pinSpacing: false,
    pin: true
})

gsap.utils.toArray(".reveal").forEach((item) => {
  const block = item.querySelector(".block");
  const title = item.querySelector(".title");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      once: true
    }
  });

  tl.to(block, {
    scaleX: 1,
    duration: 0.5
  })
  .to(title, {
    opacity: 1,
    y: 0,
    duration: 0.4
  }, "-=0.2")
  .to(block, {
    scaleX: 0,
    transformOrigin: "right center",
    duration: 0.5
  });
});

gsap.from(".device-photo", {
  y: 400,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".device-showcase",
    start: "top 70%",
    once: true
  }
});

gsap.to(".marquee-track", {
  xPercent: -50,
  duration: 20,
  ease: "none",
  repeat: 1
});


const items = document.querySelectorAll('.service-item');

const isMobile = window.innerWidth <= 768;

items.forEach(item => {
    item.addEventListener("click", () => {

        items.forEach(el => {
            el.classList.remove("active");

            if (isMobile) {
                gsap.to(el, {
                    height: 80,
                    duration: .5
                });
            } else {
                gsap.to(el, {
                    flex: 1,
                    duration: .5
                });
            }
        });

        item.classList.add("active");

        if (isMobile) {
            gsap.to(item, {
                height: 280,
                duration: .6
            });
        } else {
            gsap.to(item, {
                flex: 5,
                duration: .6
            });
        }
    });
});

const tween = gsap.to(".banquet-track", {
    xPercent: -50,
    duration: 30,
    ease: "none",
    repeat: -1
});

const slider = document.querySelector(".banquet-slider");

slider.addEventListener("mouseenter", () => tween.pause());
slider.addEventListener("mouseleave", () => tween.resume());

gsap.matchMedia().add({
  isDesktop: "(min-width: 769px)",
  isMobile: "(max-width: 768px)"
}, (context) => {

  const { isDesktop, isMobile } = context.conditions;

  gsap.timeline({
    scrollTrigger: {
      trigger: ".space",
      start: isMobile ? "top 90%" : "top 70%",
      once: true
    }
  })
  .to(".space-title-top", {
    width: "100%",
    duration: 1.5,
    ease: "power2.out"
  })
  .to(".space-title-bottom", {
    width: "100%",
    duration: 1.5,
    ease: "power2.out"
  }, "-=0.5");

});

const promoNumber = document.getElementById("promo-number");
const promoSection = document.querySelector(".promotion-section");

let isInsidePromotion = false;

/* ==========================
   SWIPER
========================== */

const swiper = new Swiper(".promotionSwiper", {
    direction: "vertical",
    slidesPerView: 1,
    speed: 1000,
    allowTouchMove: false
});

/* ==========================
   UPDATE NUMBER
========================== */

swiper.on("slideChange", () => {

    const number = String(swiper.realIndex + 1)
        .padStart(2, "0");

    promoNumber.classList.add("change");

    setTimeout(() => {
        promoNumber.textContent = number;
        promoNumber.classList.remove("change");
    }, 200);

});

/* ==========================
   CHECK SECTION IN VIEWPORT
========================== */

function updatePromotionState() {

    const rect = promoSection.getBoundingClientRect();

    isInsidePromotion =
        rect.top <= 80 &&
        rect.bottom > 80;
}

updatePromotionState();

window.addEventListener(
    "scroll",
    updatePromotionState
);

/* ==========================
   WHEEL CONTROL
========================== */

window.addEventListener(
    "wheel",
    (e) => {

        if (!isInsidePromotion) return;

        const isLast =
            swiper.activeIndex === swiper.slides.length - 1;

        const isFirst =
            swiper.activeIndex === 0;

        /* SCROLL DOWN */

        if (e.deltaY > 0) {

            if (!isLast) {

                e.preventDefault();

                lenis.stop();

                swiper.slideNext();

                setTimeout(() => {
                    lenis.start();
                }, 1000);
            }
        }

        /* SCROLL UP */

        else {

            if (!isFirst) {

                e.preventDefault();

                lenis.stop();

                swiper.slidePrev();

                setTimeout(() => {
                    lenis.start();
                }, 1000);
            }
        }
    },
    { passive: false }
);

document.addEventListener('DOMContentLoaded', () => {

    const checkboxes = document.querySelectorAll(
    '.checkbox-list input[type="checkbox"]'
    );

    checkboxes.forEach(current => {
        current.addEventListener('change', () => {

            checkboxes.forEach(item => {
                if (item !== current) {
                    item.checked = false;
                }
            });

        });
    });

    const form = document.querySelector('.register-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value;

        console.log('Submit:', name);

        // xử lý gửi form ở đây
    });

});

