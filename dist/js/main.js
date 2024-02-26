// handle mobile menu
const hamburgerBtn = document.querySelector('#hamburger-btn')
const mobileMenuEl = document.querySelector('#mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenuEl.classList.toggle('open-menu');
})

// swiper 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});