import React from "react";
import { useWeather } from "../contexts/WeatherContext";

const CurrentWeather = () => {
  const { weather } = useWeather();

  return (
    <div className="card rounded-3 weather-detail text-white text-center" style={{ width: "365px", height: "300px" }}>
      <div className="card-content">
        <h2 className="location mb-3">{weather.name}</h2>
        <h2 className="degree fw-bold">{Math.round(weather.temp)}<sup>o</sup>C</h2>
        <h5 className="weather-status text-capitalize lead mt-3">{weather.weatherType}</h5>
        <img className="current-weather-img" src={`http://openweathermap.org/img/wn/${weather.weatherIcon}@2x.png`} alt={weather.name} />
      </div>
    </div>
  );
};

export default CurrentWeather;
