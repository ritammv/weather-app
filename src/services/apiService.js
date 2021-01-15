const BASE_URL =
  'https://api.openweathermap.org/data/2.5/onecall?lat=51.5074&lon=0.1278&exclude=current,minutely,alerts,hourly&appid=b8ec4ab89938e674885e0dedf1175cc3&units=metric';

async function getLondonWeather() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const weather = await response.json();
    return weather;
  } catch (err) {
    return console.error(err);
  }
}

export default {
  getLondonWeather,
};
