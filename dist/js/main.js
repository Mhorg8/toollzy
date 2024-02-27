// handle mobile menu
const hamburgerBtn = document.querySelector('#hamburger-btn')
const mobileMenuEl = document.querySelector('#mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenuEl.classList.toggle('open-menu');
})

// fixed header 

const header = document.querySelector('#header');
console.log(header);

document.addEventListener('scroll', () => {
    let scroll = scrollY;
    console.log(scroll);
    if (scroll > 150) {
        header.classList.add('fixed')
    }
    if (scroll < 150) {
        header.classList.remove('fixed')

    }
})