function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours<10) {
        hours = `0${hours}`
    }
    let minutes = date.getMinutes();
    if (minutes< 10) {
         minutes=`0${minutes}`
        }
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
   let day = days[date.getDay()];
    return `${day} ${hours}: ${minutes}`;
}


function displayTemperature(response){
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElement=querySelector("#description");
    let humidityElement=querySelector("#humidity");
    let windElement=querySelector("#wind");
    let dateElement=querySelector("#date");
    let iconElement=querySelector("#icon");

    celsiusTemperature = response.data.main.temp;

    
    temperatureElement.innerHTML= Math.round (celsiusTemperature);
    temperatureElement.innerHTML= Math.round (response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description;
    humidityElement.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round (response.data.wind.speed);
    dateElement.innerHTML=formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
        "src",
         `htpp://openweather.org/img/wn/${response.data.weather[0].icon}@2x.png`
         );
         iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city){
let apiKey="2fo93e0a609f937f3f21da4b74t23b58"
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
axios.get(url).then(displyTemperature);
}

function search(event) {
    event.preventDefault();
    let cityinputElement= document.querySelector("#city-input");
    search(cityinputElement.value);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit",handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let celsiusTemperature = null;



search("New York");