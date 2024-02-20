let city="Bangkok";
const apiKey="37013f1abfae5ece9259881e171a7e62";

const form=document.getElementById('form');
const search=document.getElementById('search');

function  setData() {
    showWeather()
}
async function showWeather() {
    try {
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        const response = await fetch(api)
        const data = await response.json()
        showDataToUi(data)
    } catch (error) {
        console.log(error)
    }
}

function showDataToUi(data) {
    const city=document.getElementById('city');
    const state=document.getElementById('state');
    const weather=document.getElementById('weather');
    const status=document.getElementById('status');
    const humidity=document.getElementById('humidity');
    const wind=document.getElementById('wind');

    city.innerText = data.name
    state.innerText = data.sys.country
    weather.children[0].innerHTML = calculate(parseInt(data.main.temp))+"C&deg;"
    weather.children[1].innerHTML = "max : "+calculate(parseInt(data.main.temp_max))+"C&deg;"+" min : "+calculate(parseInt(data.main.temp_min))+"C&deg;"
    
    // status
    status.innerText=data.weather[0].main;
    humidity.innerText="Humidity:"+data.main.humidity;
    wind.innerText="Wind :"+data.wind.speed;
}

function calculate(k) {
    return k-273
}
function callDataAPI(e) {
    e.preventDefault()
    city = search.value
    showWeather()
}

form.addEventListener('submit',callDataAPI);
setData()