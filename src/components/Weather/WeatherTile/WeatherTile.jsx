import React from 'react';
import './WeatherTile.css';
import dayjs from 'dayjs';

const WeatherTile = ({ day }) => {
  return (
    <>
      {day.dt && (
        <div className="weather_tile_wrapper">
          <div className="weather_tile_text">
            <h2 className="weather_text">
              {dayjs(day.dt.toString()).format('ddd').toUpperCase()}
            </h2>
            {console.log(
              `day${day.dt}${dayjs(day.dt.toString())
                .format('ddd')
                .toUpperCase()}`
            )}
            <h2 className="weather_temp">{`${Math.ceil(day.temp.day)}°`}</h2>
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
      )}
    </>
  );
};

export default WeatherTile;
