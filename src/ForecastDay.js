import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function dayFormat() {
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.forecast.dt * 1000);
    return week[date.getDay()];
  }

  let iconImage = `https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`;
  let iconDescr = props.forecast.weather[0].desciption;

  return (
    <li className="ForecastElt">
      <div className="row">
        <span className="col">{dayFormat()}</span>
        <span className="forecast_temp_max col">
          {Math.round(props.forecast.temp.max)}°C
        </span>
        <span className="forecast_temp_min col">
          {Math.round(props.forecast.temp.min)}°C
        </span>
        <img src={iconImage} alt={iconDescr} class="forecast-icon col" />
      </div>
    </li>
  );
}
