import React from 'react';
import './WeatherTile.css';
import moment from 'moment';

const WeatherTile = ({ day }) => {
  return (
    <div className="weather_tile_wrapper">
      <div className="weather_tile_text">
        <h2 className="weather_text">
          {moment(day.dt).format('ddd').toUpperCase()}
        </h2>
        <h2 className="weather_temp">{`${Math.ceil(day.main.temp)}°`}</h2>
      </div>

      <div className="weather_tile_image">
        <img
          className="weather_img"
          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
          alt=""
        />
        <p>{day.weather[0].description}</p>
      </div>
    </div>
  );
};

export default WeatherTile;
