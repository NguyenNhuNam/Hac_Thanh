window.addEventListener('load', () => {
    AOS.refreshHard();
});

AOS.init({ once: true, duration: 500, offset: 200 });

gsap.to(".marquee-track", {
    xPercent: -50,
    duration: 20,
    ease: "none",
    repeat: 1
});

document.querySelectorAll('.category-swiper').forEach((el) => {
    new Swiper(el, {
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        },

        allowTouchMove: true,
        grabCursor: true,
        speed: 3000,
        slidesPerView: 'auto',
        spaceBetween: 8,
    });
});