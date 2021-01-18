import React, { useState, useEffect } from 'react';
import ApiService from '../../services/apiService';
import WeatherTile from './WeatherTile/WeatherTile';
import './Weather.css';
import Progress from './Progress/Progress';

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(async () => {
    await ApiService.getLondonWeather().then((res) => setWeather(res));
    // setInterval(() => {
    //   ApiService.getLondonWeather().then((res) => setWeather(res));
    // }, 60000);
  }, []);

  const timeNow = () => {
    const today = new Date();
    let minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    const time = `${today.getHours()}:${minutes} GMT`;
    return time;
  };

  return (
    <>
      {weather.daily && (
        <>
          <div className="weather_header">
            <div className="weather_header_text">
              <p className="time_now">London</p>

              <p className="time_now one">{timeNow()}</p>
              <p className="time_now ">
                {`${Math.ceil(weather.daily[0].temp.day)}°`}
              </p>
            </div>
            <div className="loading_bar">
              <Progress />
            </div>
          </div>

          <div className="weather_wrapper">
            {weather.daily &&
              weather.daily.map((day) => (
                <WeatherTile day={day} key={day.dt} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Weather;
