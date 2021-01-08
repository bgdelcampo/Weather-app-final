let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let dayWeek = days[now.getDay()];
let currentHour = now.getHours();
let currentMin = now.getMinutes();

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${dayWeek} ${currentHour}:${currentMin}`;


// Temp per city
function goCity(event) {
  event.preventDefault();
  let currentLocation = document.querySelector("#location");
  let inputCity = document.querySelector("#city-name");
  let city = `${inputCity.value}`;
  currentLocation.innerHTML = `${inputCity.value}`;
  let apiKey = `38c9293a2365a91b362e3d61894095ed`;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;


  axios.get(apiUrl).then(showTemperature);
}


function showTemperature (response) {
  let temp = Math.round(response.data.main.temp);
  let currentCity = document.querySelector("#current-weather");
  currentCity.innerHTML = `${temp}°C`;
}

let searchCity = document.querySelector("#button-submit");
searchCity.addEventListener("click", goCity);

// Add a Current Location button

// function fetchPosition (position){
//   let apiKey = `38c9293a2365a91b362e3d61894095ed`;
//   let units = "metric";
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//   axios.get(url).then(showTemperature);
  
// }


// let locationButton = document.querySelector ("#search-location");
// locationButton.addEventListener("click", fetchPosition);
// navigator.geolocation.getCurrentPosition(fetchPosition);



// --°C and °F--

// function convertCelsius(event) {
//   event.preventDefault();
//   let tempCelsius = document.querySelector("#current-weather");
//   tempCelsius.innerHTML = "12°C";
// }

// let celsiusUnits = document.querySelector("#celsius");
// celsiusUnits.addEventListener("click", convertCelsius);

// function convertFarenheit(event) {
//   event.preventDefault();
//   let tempFarenheit = document.querySelector("#current-weather");

//   tempFarenheit.innerHTML = "53.6°F";
// }

// let farenheitUnits = document.querySelector("#farenheit");
// farenheitUnits.addEventListener("click", convertFarenheit);

// API