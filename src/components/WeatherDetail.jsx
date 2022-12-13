import React from "react";
import { WiHumidity, WiDirectionDownRight, WiSandstorm, WiCloudy } from "react-icons/wi";
import { useWeather } from "../contexts/WeatherContext";

const WeatherDetail = () => {
  const { weather } = useWeather();
  return (
    <>
      <div className="card rounded-3 weather-data text-white" style={{ width: "365px", height: "300px" }}>
        <ul className="ps-4 pt-3">
          <li className="d-flex py-2">
          <WiHumidity className="weather-icon"/>
            <div className="me-auto">
                <h6 className="mb-0 fw-bold">Humidity</h6>
                <p className="mb-0">{weather.humidity}%</p>
            </div>
          </li>
          <li className="d-flex py-2">
          <WiDirectionDownRight className="weather-icon"/>
            <div className="me-auto">
                <h6 className="mb-0 fw-bold pt-2">Pressure</h6>
                <p className="mb-0">{weather.pressure} hPa</p>
            </div>
          </li>
          <li className="d-flex py-2">
          <WiSandstorm className="weather-icon pe-2"/>
            <div className="me-auto">
                <h6 className="mb-0 fw-bold pt-2">Wind</h6>
                <p className="mb-0">{weather.speed} km/h</p>
            </div>
          </li>
          <li className="d-flex">
          <WiCloudy className="weather-icon pe-2"/>
            <div className="me-auto">
                <h6 className="mb-0 fw-bold pt-2">Cloudiness</h6>
                <p className="mb-0">{weather.cloudiness}%</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WeatherDetail;
