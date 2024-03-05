const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='
const apiKey = 'c4c48b814245706f7f2ed4703bf23030';
let weatherImgEl = document.querySelector('#weather-img');
const userSelectdCity = document.querySelector('#userCity');
const checkWeatherBtn = document.querySelector('#checkWeather');
const historyBtn = document.querySelector('#weather-hamburger');
const cityHistoryContainer = document.querySelector('#history-container')
const historyMenu = document.querySelector('#history-container-menu')


let historyOfCity = []
userSelectdCity.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        let userCity = userSelectdCity.value.trim();
        historyOfCity.push(userCity)
        checkWeather(userCity)
        userSelectdCity.value = ''
    }

})

checkWeatherBtn.addEventListener('click', () => {
    let userCity = userSelectdCity.value;
    historyOfCity.push(userCity)
    checkWeather(userCity)
    userSelectdCity.value = ''
})

historyBtn.addEventListener('click', () => {
    cityHistoryContainer.classList.toggle('show-history')

    displayHistory(historyOfCity)
})

function displayHistory(arr) {
    console.log(arr);
    historyMenu.innerHTML = ''
    arr.forEach((item) => {
        historyMenu.insertAdjacentHTML('beforeend',
            `<li class="text-white text-lg font-bold">${item}</li>`
        );
    });
}


async function checkWeather(city = 'tehran') {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404)
        alert('Someting went Wrong')
    else {
        let data = await response.json();
        console.log(data);
        document.querySelector('#city').textContent = data.name;
        document.querySelector('#temp').textContent = data.main.temp + '°C';
        document.querySelector('.humidity').textContent = Math.round(data.main.humidity) + '%';
        document.querySelector('#wind').textContent = Math.round(data.wind.speed) + ' Km/h';

        if (data.weather[0].main === 'Clear')
            weatherImgEl.src = '../images/sun.png'
        else if (data.weather[0].main == 'Snow')
            weatherImgEl.src = '../images/snowy.png'
        else if (data.weather[0].main == 'Rain')
            weatherImgEl.src = '../images/rainy.png'
        else if (data.weather[0].main == 'Clouds')
            weatherImgEl.src = '../images/Cloudy.png'
        else if (data.weather[0].main == 'Mist')
            weatherImgEl.src = '../images/storm.png';
    }
}

checkWeather()

// hadnle save user Email 
let usersEmailArr = []

let usersEmaillEl = document.querySelector('.user-email')
let userNewsFormContainer = document.querySelector('#newsletter-form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let userEamilValue = usersEmaillEl.value;
        if (usersEmailArr.includes(userEamilValue, 0))
            alert('You have already registered')
        else {
            usersEmailArr.push(userEamilValue);
            usersEmaillEl.value = '';
        }
    })

