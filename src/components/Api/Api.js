const API_KEY = '423902ac960c87a014e337cb95985c1c';
const CORS = 'https://cors-anywhere.herokuapp.com/';
const lat = '55.8263';
const lon = '49.1195';

function getWeatherInfo() {
    return fetch(`${CORS}https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={daily}&units=metric&lang=ru&appid=${API_KEY}`, {
                method: 'GET',
                headers : { 
                'Content-Type': 'application/json',
                }
                }).then((res) => { if(res.ok) {
                    return res.json()}
                }).catch(error =>console.log(error.massage));
}

export default getWeatherInfo;