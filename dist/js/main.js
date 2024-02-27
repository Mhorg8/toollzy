// handle mobile menu
const hamburgerBtn = document.querySelector('#hamburger-btn')
const mobileMenuEl = document.querySelector('#mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenuEl.classList.toggle('open-menu');
})

// handle header to fixed
const headerEl = document.querySelector('header');

document.addEventListener('scroll', () => {

    if (window.scrollY > 10) {
        headerEl.classList.add('fixed')
    } else {
        headerEl.classList.remove('fixed')
    }
})


// handle hover effect on toolboxes

const toolBoxesEl = document.querySelectorAll('.tool-box');
const toolDescribtionEl = document.querySelectorAll('.tool-describtion');


toolBoxesEl.forEach((box, i) => {
    box.addEventListener('mouseover', () => {
        toolDescribtionEl[i].classList.add('show-description')
    })

    box.addEventListener('mouseleave', () => {
        toolDescribtionEl[i].classList.remove('show-description')
    })
})