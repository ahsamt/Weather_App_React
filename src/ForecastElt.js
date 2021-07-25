import React, { useState, useEffect } from "react";
import "./ForecastElt.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function ForecastElt(props) {
  const apiKey = "545e2ed5d446d0667b1abac42d152f0d";
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function generateForecastInfo(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function getResponseDataForecast() {
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(generateForecastInfo);
  }

  if (loaded) {
    return (
      <ul className="ForecastElt">
        {forecast.map(function (day, index) {
          if (index < 5) {
            return (
              <span key={index}>
                <ForecastDay forecast={day} />
              </span>
            );
          } else {
            return null;
          }
        })}
      </ul>
    );
  } else {
    getResponseDataForecast();
    return null;
  }
}
