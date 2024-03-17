const search = document.querySelector('.search-box button');
const cityInput = document.querySelector('.search-box input');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = 'ce6b769be267a9a826b400fedaf79dfe';
    const city = cityInput.value;

    if (city == '') 
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {

        if (json.cod =='404') {
            error404.style.height = '';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
              
        
        }
        error404.style.height = '';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');
      
        
        const image = weatherBox.querySelector('img');
        const temperature = weatherBox.querySelector('.temperature');
        const description = weatherBox.querySelector('.description');
        const humidity = weatherDetails.querySelector('.humidity span');
        const wind = weatherDetails.querySelector('.wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = './clear.png';
                break;
            case 'Rain':
                image.src = './rain.png';
                break;
            case 'Snow':
                image.src = './snow.png';
                break;
            case 'Clouds':
                image.src = './cloud.png';
                break;
            case 'Mist':
                image.src = './mist.png';
                break;
            case 'Haze':
                image.src = './mist.png';
                break;
            default:
                image.src ='./cloud.png';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML =`${parseInt(json.main.humidity)}%`;
        wind.innerHTML =`${parseInt(json.wind.speed)}km/h`;
    });
});