const apiKey = "7c084968ea8a23e3ae4e39ff93b396c5";
const fetchWeatherBtn = document.getElementById("fetchWeatherBtn");
const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");

fetchWeatherBtn.addEventListener("click", () => {
  const location = document.getElementById("locationInput").value;
  if (location) {
    getWeather(location);
  }
});

function getWeather(location) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch((error) => console.log("Error:", error));
}

function displayWeather(data) {
  if (data.cod === 200) {
    weatherInfo.style.display = "block";
    cityName.textContent = `Weather in ${data.name}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Condition: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
  } else {
    weatherInfo.style.display = "none";
    alert("City not found. Please try again.");
  }
}
