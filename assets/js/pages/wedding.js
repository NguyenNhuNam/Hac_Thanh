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

gsap.matchMedia().add({
    isDesktop: "(min-width: 769px)",
    isMobile: "(max-width: 768px)"
}, (context) => {

    const { isDesktop, isMobile } = context.conditions;

    gsap.timeline({
        scrollTrigger: {
            trigger: ".concept-center",
            start: isMobile ? "top 90%" : "top 70%",
            once: true
        }
    })
        .to(".concept-center-text", {
            width: "100%",
            duration: 1.5,
            ease: "power2.out"
        });

});

document.querySelectorAll('.concept-swiper').forEach((el) => {
    const nextButton = el.querySelector('.custom-swiper-next');

    new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 8,
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
        navigation: {
            nextEl: nextButton,
        }
    });
});