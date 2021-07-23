import React from "react";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function dayFormat() {
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.forecast.dt * 1000);
    return week[date.getDay()];
  }

  return (
    <li className="ForecastElt">
      <div className="row">
        <span className="col">{dayFormat()}</span>
        <span className="forecast_temp_max col">25°C</span>
        <span className="forecast_temp_min col">15°C</span>
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt=""
          class="forecast-icon col"
        />
      </div>
    </li>
  );
}
