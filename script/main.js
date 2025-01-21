// designation swiper
const swiper = new Swiper('.designation', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'vertical',
    loop: true,
    // Autoplay configuration
    autoplay: {
        delay: 0, // No delay between transitions
        disableOnInteraction: false, // Keep autoplay active after user interaction
    },

    speed: 3000, // Speed of the transition (in ms)
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

