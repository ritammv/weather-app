import React, { useContext } from 'react';
// import moment from 'moment';
// import ApiService from '../../services/apiService';
import WeatherTile from './WeatherTile/WeatherTile';
import './Weather.css';
import { WeatherContext } from '../../services/context';

const Weather = () => {
  const weather = useContext(WeatherContext);

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
            <div className="loading_bar" />
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
