import React from "react";
import "./ForecastElt.css";

export default function ForecastElt() {
  return (
    <li className="ForecastElt">
      <div className="row">
        <span className="col">Mon</span>
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
