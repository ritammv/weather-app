import React, { useEffect, useState } from 'react';
// import moment from 'moment';
import ApiService from '../../services/apiService';
import WeatherTile from './WeatherTile/WeatherTile';
import './Weather.css';

const Weather = () => {
  const [londonWeather, setLondonWeather] = useState({});
  const [loading, isLoading] = useState(true);

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
    await ApiService.getLondonWeather().then((res) => setLondonWeather(res));
    isLoading(false);
  }, []);

  return (
    <>
      {!loading && (
        <>
          <div className="weather_header">
            <div className="weather_header_text">
              <p className="time_now">London</p>
              {console.log(londonWeather)}
              <p className="time_now one">{timeNow()}</p>
              <p className="time_now ">
                {`${Math.ceil(londonWeather.daily[0].temp.day)}°`}
              </p>
            </div>
            <div className="loading_bar" />
          </div>

          <div className="weather_wrapper">
            {londonWeather.daily &&
              londonWeather.daily.map((day) => (
                <WeatherTile day={day} key={day.dt} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Weather;
