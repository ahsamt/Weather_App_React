import React, { useState } from "react";
import "./ForecastElt.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function ForecastElt(props) {
  const apiKey = "545e2ed5d446d0667b1abac42d152f0d";
  const [forecast, setForecast] = useState(null);

  function generateForecastInfo(response) {
    setForecast(response.data.daily);
    console.log(response);
  }
  function getResponseDataForecast() {
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(generateForecastInfo);
    console.log(apiURL);
  }

  if (forecast) {
    return (
      <ul>
        <ForecastDay forecast={forecast[0]} />
        <ForecastDay forecast={forecast[1]} />
        <ForecastDay forecast={forecast[2]} />
        <ForecastDay forecast={forecast[3]} />
        <ForecastDay forecast={forecast[4]} />
      </ul>
    );
  } else {
    getResponseDataForecast();
    return "loading";
  }
}
