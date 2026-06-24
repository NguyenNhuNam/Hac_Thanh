gsap.registerPlugin(ScrollTrigger);

AOS.init({ 
    once: true, 
    duration: 800 
});

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

const lenis = new Lenis({
    lerp: 0.05,
    wheelMultiplier: 1,
});


function resetScroll() {
    lenis.scrollTo(0, {
        immediate: true, 
        force: true     
    });

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
            AOS.refreshHard(); 
        });
    });
}

window.addEventListener("load", resetScroll);
window.addEventListener("pageshow", resetScroll);

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update(); 
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

ScrollTrigger.create({
    trigger: ".intro-image-scroll",
    start: "top 80px",
    end: "+=300px",
    pinSpacing: false,
    pin: true
});

gsap.to(".marquee-track, .marquee-track-1", {
    xPercent: -50,
    duration: 20,
    ease: "none",
    repeat: -1, 
    modifiers: {
        xPercent: gsap.utils.unitize(x => parseFloat(x) % 50)
    }
});

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
    opacity: 1,
    duration: 1,
    stagger: 0.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".device-showcase",
        start: "top 70%",
        once: true
    }
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

const banquetSwiper = new Swiper(".banquet-slider", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    observer: true,      
    observeParents: true, 
    freeMode: {
        enabled: true,
        momentumRatio: 0.8,
        momentumVelocityRatio: 0.8,
        sticky: false,
    },
    grabCursor: true,
});

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


let isAboutAosFired = false; 

const aboutSwiper = new Swiper('.about-swiper', {
    effect: 'slide',
    fadeEffect: { crossFade: true },
    loop: true,
    speed: 1000,
    autoHeight: true,
    pagination: {
        el: '.about-pagination',
        clickable: true,
    },
    on: {
        slideChangeTransitionStart: function () {
            if (isAboutAosFired) return;

            const swiperEl = this.el;
            swiperEl.querySelectorAll('.aos-animate').forEach(function (el) {
                el.classList.remove('aos-animate');
            });
        },
        slideChangeTransitionEnd: function () {
            if (isAboutAosFired) return;

            setTimeout(function () {
                AOS.refreshHard();
                isAboutAosFired = true; 
            }, 50);
        }
    }
});


/* ==========================
   ELEMENTS
========================== */
const promoNumber = document.getElementById("promo-number");
const promoSection = document.querySelector(".promotion-section");

/* ==========================
   CONFIG
========================== */
const HEADER_HEIGHT = 200;

/* ==========================
   Chỉ chạy logic nếu là Desktop (> 991px)
========================== */
if (window.innerWidth > 991) {

    /* ==========================
       STATE
    ========================== */
    let isAnimating = false;
    let canSlideDown = false;
    let canSlideUp = false;

    /* ==========================
       SWIPER
    ========================== */
    const swiper = new Swiper(".promotionSwiper", {
        direction: "vertical",
        slidesPerView: 1,
        speed: 1000,
        allowTouchMove: false,
        resistanceRatio: 0
    });

    /* ==========================
       UPDATE NUMBER
    ========================== */
    function updateSlideNumber() {
        if (!promoNumber) return;
        const number = String(swiper.realIndex + 1).padStart(2, "0");
        
        promoNumber.classList.add("change");
        setTimeout(() => {
            promoNumber.textContent = number;
            promoNumber.classList.remove("change");
        }, 200);
    }

    updateSlideNumber();
    swiper.on("slideChange", updateSlideNumber);

    /* ==========================
       SWIPER EVENTS
    ========================== */
    swiper.on("transitionEnd", () => {
        isAnimating = false;
        if (typeof lenis !== "undefined") {
            lenis.start();
        }
        updatePromotionState();
    });

    /* ==========================
       SECTION STATE
    ========================== */
    function updatePromotionState() {
        const rect = promoSection.getBoundingClientRect();

        canSlideDown = rect.top <= HEADER_HEIGHT && rect.bottom > HEADER_HEIGHT;
        canSlideUp = rect.bottom >= window.innerHeight && rect.top < window.innerHeight;
    }

    updatePromotionState();

    window.addEventListener("scroll", updatePromotionState, { passive: true });
    window.addEventListener("resize", updatePromotionState, { passive: true });

    /* ==========================
       WHEEL CONTROL
    ========================== */
    window.addEventListener("wheel", (e) => {
        const isFirst = swiper.activeIndex === 0;
        const isLast = swiper.activeIndex === swiper.slides.length - 1;

        if (isAnimating) {
            e.preventDefault();
            return;
        }

        if (e.deltaY > 0) {
            if (!canSlideDown) return;
            if (!isLast) {
                e.preventDefault();
                isAnimating = true;
                if (typeof lenis !== "undefined") lenis.stop();
                swiper.slideNext();
            }
        } else if (e.deltaY < 0) {
            if (!canSlideUp) return;
            if (!isFirst) {
                e.preventDefault();
                isAnimating = true;
                if (typeof lenis !== "undefined") lenis.stop();
                swiper.slidePrev();
            }
        }
    }, { passive: false });

} // Kết thúc điều kiện Desktop

const phoneBtn = document.querySelector('.phone-button');
const targetSection = document.querySelector('.hall-marquee');

if (phoneBtn && targetSection) {
    
    function handlePhoneButtonVisibility() {
        const rect = targetSection.getBoundingClientRect();

        if (rect.bottom <= window.innerHeight) {
            phoneBtn.classList.add('is-visible');
        } else {
            phoneBtn.classList.remove('is-visible');
        }
    }

    handlePhoneButtonVisibility();

    window.addEventListener('scroll', handlePhoneButtonVisibility, { passive: true });
}