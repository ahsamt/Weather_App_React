import React, { useState } from "react";
import "./ForecastElt.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function ForecastElt(props) {
  const apiKey = "545e2ed5d446d0667b1abac42d152f0d";
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function generateForecastInfo(response) {
    console.log(response);
    setForecast(response.data.daily);
    console.log("forecast data ready");

    // setForecast({
    //   day: dayFormat(forecastData.dt),
    //   temp_max: forecastData.temp.max,
    //   temp_min: forecastData.temp.min,
    //   iconImage: `https://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`,
    //   iconDescr: forecastData.weather[0].desciption,
    // });
    setLoaded(true);
  }

  function getResponseDataForecast() {
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.weather.lat}&lon=${props.weather.lon}&appid=${apiKey}&units=metric`;
    console.log(apiURL);
    axios.get(apiURL).then(generateForecastInfo);
  }

  if (loaded) {
    console.log(`Forecast is ${forecast}`);
    return (
      <ul className="ForecastElt">
        <ForecastDay forecast={forecast} />
        <ForecastDay forecast={forecast} />
        <ForecastDay forecast={forecast} />
        <ForecastDay forecast={forecast} />
        <ForecastDay forecast={forecast} />
      </ul>
    );
  } else {
    getResponseDataForecast();
    return "loading";
  }
}
