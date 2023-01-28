function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round (response.data.wind.speed);
}

let apiKey = "0td6fef782e8b046o3c9bf5a39fbbf05";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=tehran&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
