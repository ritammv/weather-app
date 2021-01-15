import React, { useEffect, useState } from 'react';
// import moment from 'moment';
import ApiService from '../../services/apiService';
import WeatherTile from './WeatherTile/WeatherTile';
import './Weather.css';

const Weather = () => {
  const [londonWeather, setLondonWeather] = useState({});
  const [forecast, setForecast] = useState({});

  const timeNow = () => {
    const today = new Date();
    let minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    const time = `${today.getHours()}:${minutes} GMT`;
    return time;
  };

  useEffect(async () => {
    ApiService.getLondonWeather().then((res) => setLondonWeather(res));
    ApiService.getForecast().then((res) => setForecast(res));
    const interval = setInterval(async () => {
      const london = await ApiService.getLondonWeather();
      setLondonWeather(london);

      const dayforecast = await ApiService.getForecast();
      setForecast(dayforecast);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {londonWeather && (
        <div className="weather_header">
          <div className="weather_header_text">
            <p className="time_now">{londonWeather.name}</p>

            <p className="time_now one">{timeNow()}</p>

            <p className="time_now ">
              {/* {`${Math.ceil(londonWeather.main.temp)}°`} */}
            </p>
          </div>
          <div className="loading_bar" />
        </div>
      )}
      <div className="weather_wrapper">
        {forecast.list &&
          forecast.list.map((day) => <WeatherTile day={day} key={day.dt} />)}
      </div>
    </>
  );
};

export default Weather;
