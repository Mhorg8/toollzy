// handle mobile menu
const hamburgerBtn = document.querySelector('#hamburger-btn')
const mobileMenuEl = document.querySelector('#mobile-menu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenuEl.classList.toggle('open-menu');
})

<<<<<<< HEAD
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
=======
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