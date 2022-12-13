import React, { useState, useEffect } from "react";
import TurkeyMap from "turkey-map-react";
import CurrentWeather from "./CurrentWeather";
import { useWeather } from "../contexts/WeatherContext";
import Modal from "react-bootstrap/Modal";

const Map = () => {
  const { weather, getCurrentWeather } = useWeather();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClose();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [weather]);

  return (
    <div>
        <TurkeyMap
          hoverable={true}
          onClick={({name}) => {
            getCurrentWeather(name);
            handleShow();
          }}
          customStyle={{ idleColor: "#eceeec", hoverColor: "#54d3aa" }}
        />

      <Modal show={show} centered>
        <Modal.Body className="text-center">
            <h2 className="mb-3">{weather.name}</h2>
            <h2 className="fw-bold">{Math.round(weather.temp)}<sup>o</sup>C</h2>
            <h5 className="text-capitalize lead mt-3">{weather.weatherType}</h5>
            <img className="current-weather-img" src={`http://openweathermap.org/img/wn/${weather.weatherIcon ? weather.weatherIcon : "04d"}@2x.png`} alt={weather.name} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Map;
