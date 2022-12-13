import { createContext, useContext, useEffect, useState, } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../services/api";

export const WeatherContext = createContext();
export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = (props) => {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const getCurrentWeather = async (location) => {
    try {
      let response = await fetch(
      `${WEATHER_API_URL}/weather?q=${location}&appid=${WEATHER_API_KEY}&units=metric`
    )
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    let data = await response.json();  
    const { temp, humidity, pressure } = data.main;
    const { description: weatherType } = data.weather[0];
    const { icon: weatherIcon } = data.weather[0];
    const { name } = data;
    const { speed } = data.wind;
    const { country } = data.sys;
    const { all: cloudiness } = data.clouds;
    const { coord: coord } = data; 

    const myNewWeather = {
      temp,
      humidity,
      pressure,
      weatherType,
      weatherIcon,
      name,
      speed,
      country,
      cloudiness,
      coord
    };  
    // Update state with weather data
    setWeather(myNewWeather);
  } catch (error) {
    return console.log(error)
  }
  };

  const forecastFetch = async () => {
    // Fetch weather data from API
    try {
      let resForecast = await fetch(
      `${WEATHER_API_URL}/forecast?lat=${weather.coord.lat ? weather.coord.lat : null }&lon=${weather.coord.lon ? weather.coord.lon : null}&appid=${WEATHER_API_KEY}&units=metric`
    );

    let dataForecast = await resForecast.json();
    setForecast(dataForecast.list);
  } catch (error) {
    return error.response;
  }
  };

  useEffect(() => {
    forecastFetch()
  }, [weather])

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        forecast,
        setForecast,
        getCurrentWeather,
        forecastFetch,
        days
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};






// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {});
//   } else { 
//    console.log("Geolocation is not supported by this browser.")
//   }
// }



