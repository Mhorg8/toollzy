const timer = document.querySelector('#timer');
const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');
const shortBreakBtn = document.querySelector('#short-break-btn');
const resetBtn = document.querySelector('#reset-btn');

let set;
let count = 59;
let paused = true;
let minCount = 24;

timer.textContent = `${minCount + 1} : 00`;

resetBtn.addEventListener('click', resetFunc);
shortBreakBtn.addEventListener('click', shortBreakFunc);
pauseBtn.addEventListener('click', pauseFunc);
startBtn.addEventListener('click', startFunc);

const appendZero = (value) => {
    return value < 10 ? `0${value}` : value;
};

function shortBreakFunc() {
    count = 59;
    minCount = 4;
    timer.textContent = `${appendZero(minCount + 1)}:00`;
}

function resetFunc() {
    pauseFunc()
    count = 59;
    minCount = 24;
    timer.textContent = `${appendZero(minCount + 1)}:00`;
}

function pauseFunc() {
    paused = true;
    clearInterval(set);
}

function startFunc() {
    if (paused) {
        timer.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
        set = setInterval(() => {
            count--;
            timer.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
            if (count == 0) {
                if (minCount != 0) {
                    minCount--;
                    count = 60;
                } else {
                    clearInterval(set);
                }
            }
        }, 1000);
    }
}
