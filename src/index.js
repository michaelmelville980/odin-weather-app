const locationInputRef = document.querySelector('#location');
const weatherDivRef = document.querySelector('#weather');
const formRef = document.querySelector('#form');

async function getWeather(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=DCTFXU2LCMS8HUPLSW9LD42MS`
  );
  const weatherData = await response.json();
  return weatherData;
}

function returnRelevantData(weatherData) {
  return {
    temp: weatherData.currentConditions.temp,
    feelsLike: weatherData.currentConditions.feelslike,
    humidity: weatherData.currentConditions.humidity,
  };
}

async function displayWeatherData(relevantWeatherData) {
  weatherDivRef.innerHTML = '';

  const tempChild = document.createElement('p');
  tempChild.textContent = 'Current Temperature: ' + relevantWeatherData.temp;

  const feelsLikeChild = document.createElement('p');
  feelsLikeChild.textContent =
    'Feels Like Temperature: ' + relevantWeatherData.feelsLike;

  const humidityChild = document.createElement('p');
  humidityChild.textContent = 'Humidiy: ' + relevantWeatherData.humidity;

  weatherDivRef.append(tempChild, feelsLikeChild, humidityChild);
}

async function handleEverything(location) {
  const weatherData = await getWeather(location);
  const relevantData = returnRelevantData(weatherData);
  displayWeatherData(relevantData);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  handleEverything(locationInputRef.value);
});
