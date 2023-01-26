import React from "react";
import { useWeather } from "../contexts/WeatherContext";

const WeatherForecast = () => {
  const { forecast, days } = useWeather();
  
  if (forecast) {
  const weekDays = forecast.slice(0, 6);
  const currentDay = new Date().getDay();
  const forecastDays = days.slice(currentDay + 1, days.length).concat(days.slice(0, currentDay));

  return (
    <div className="mt-4 mb-3">
      <div className="card rounded-3 weather-data py-2 text-center">
        <ul className="list-inline d-xs-inline-block text-white">
        {weekDays.map((item, index) => (
          <li className="list-inline-item px-3 py-xs-4" key={index}>
            <p className="text-uppercase">{forecastDays[index]}</p>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className="py-2" alt="weather" />
            <h6 className="fw-bold">{Math.round(item.main.temp)}<sup>o</sup>C</h6>
          </li>
         ))}
        </ul> 
      </div>
    </div>
  );
}

}

export default WeatherForecast;
