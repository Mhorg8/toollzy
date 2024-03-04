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

// handle flip timer


const timer = document.querySelector('.timer');

let minCount = 25;
let count = 60;

const appendZero = (val) => {
    return val < 10 ? `0${val} ` : val
};

setInterval(() => {

    if (minCount > 0) {
        if (count !== 0) {
            count--;
        } else {
            minCount--;
            count = 60;
        }
        minCount < 3 ? timer.classList.add('opacity') : timer.classList.remove('opacity');
    }

    timer.textContent = `${appendZero(minCount)} : ${appendZero(count)}`;
}, 1000);

// login handler
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const submitFormBtn = document.querySelector('#submit-btn');
const loginForm = document.querySelector('#login-form');
const loginBtn = document.querySelector('#login-btn');
const loginContainer = document.querySelector('#login-page')
const users = [];

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
});

loginBtn.addEventListener('click', () => {
    loginContainer.classList.toggle('show')
})

submitFormBtn.addEventListener('click', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const userObj = {};
    checkValidation(emailRegex, passwordRegex, userObj);
});

function setLocal(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function checkValidation(emailRegex, passwordRegex, userObj) {
    if (emailInput.value && passwordInput.value) {
        if (emailRegex.test(emailInput.value) && passwordRegex.test(passwordInput.value)) {
            userObj.userEmail = emailInput.value;
            userObj.userPassword = passwordInput.value;

            users.push(userObj);
            setLocal(users);
            loginContainer.classList.remove('show')
        } else {
            alert('Email or password format is incorrect.');
        }
    } else {
        alert('Please fill in all fields.');
    }
}
