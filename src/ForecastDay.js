import React from "react";

export default function ForecastDay(props) {
  function dayFormat(timestamp) {
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(timestamp * 1000);
    return week[date.getDay()];
  }

  return (
    <li>
      <div className="row">
        <span className="col">{dayFormat(props.forecast[0].dt)}</span>
        <span className="forecast_temp_max col">
          {Math.round(props.forecast[0].temp.max)}°C
        </span>
        <span className="forecast_temp_min col">
          {Math.round(props.forecast[0].temp.min)}°C
        </span>
        <img
          src={`https://openweathermap.org/img/wn/${props.forecast[0].weather[0].icon}@2x.png`}
          alt={props.forecast[0].weather[0].desciption}
          class="forecast-icon col"
        />
      </div>
    </li>
  );
}
