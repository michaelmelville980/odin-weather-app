const locationInputRef = document.querySelector("#location");
const weatherDivRef = document.querySelector("#weather");

async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=DCTFXU2LCMS8HUPLSW9LD42MS`);
    const weatherData = await response.json();
    return weatherData;
}

async function returnRelevantData(weatherData){
    return {
        temp: weatherData.currentConditions.temp,
        feelsLike: weatherData.currentConditions.feelsLike,
        humidity: weatherData.currentConditions.humidity,
    };
}





getWeather("Sylvania");