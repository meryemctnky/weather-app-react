import React, { useState } from 'react'
import { useWeather } from "../contexts/WeatherContext";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import WeatherDetail from "./WeatherDetail";
import WeatherForecast from "./WeatherForecast";
import Map from './Map';

const MyContainer = () => {
    const { weather } = useWeather();
    const  [showMap, setShowMap ] = useState(false)


  return (
    <div className="container">
    <header className="header p-4 text-center">
      <h2 className="text-uppercase text-white" style={{ letterSpacing: 3 }}>
        weather <span className="fw-bold">forecast</span>
      </h2>
    </header>
    <Search setShowMap={setShowMap}/>
     {weather && !showMap && (
      <section className="section">
        <div className="row">
          <div className="col-6 d-flex justify-content-end align-items-center">
            <CurrentWeather />
          </div>
          <div className="col-6 d-flex justify-content-start align-items-center">
            <WeatherDetail />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <WeatherForecast />
          </div>
        </div>
      </section>
    )}
    { showMap && <Map />}
  </div>

  )
}

export default MyContainer