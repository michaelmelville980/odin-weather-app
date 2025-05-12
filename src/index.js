async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=DCTFXU2LCMS8HUPLSW9LD42MS`);
    return response.json();
}

getWeather("Sylvania");