const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const queries = '?q=london&appid=b8ec4ab89938e674885e0dedf1175cc3&units=metric';

const getLondonWeather = () => {
  return fetch(`${BASE_URL}/weather${queries}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const getForecast = () => {
  return fetch(`${BASE_URL}/forecast${queries}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export default {
  getLondonWeather,
  getForecast,
};
