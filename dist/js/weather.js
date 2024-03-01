const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='
const apiKey = 'c4c48b814245706f7f2ed4703bf23030';
let weatherImgEl = document.querySelector('#weather-img');
const userSelectdCity = document.querySelector('#userCity');
const checkWeatherBtn = document.querySelector('#checkWeather')

userSelectdCity.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        let userCity = userSelectdCity.value.trim();
        checkWeather(userCity)
        userSelectdCity.value = ''
    }

})

checkWeatherBtn.addEventListener('click', () => {
    let userCity = userSelectdCity.value;
    checkWeather(userCity)
    userSelectdCity.value = ''
})

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


// const getuserLocation = () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//     });
// }
