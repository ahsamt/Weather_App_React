import React from "react";

export default function ForecastDay(props) {
  let day = props.forecast.dt;
  let temp_max = Math.round(props.forecast.temp.max);
  let temp_min = Math.round(props.forecast.temp.min);
  let icon = `https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`;
  let icon_descr = props.forecast.weather[0].desciption;

  function dayFormat(timestamp) {
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(timestamp * 1000);
    return week[date.getDay()];
  }

  return (
    <li>
      <div className="row">
        <span className="col">{dayFormat(day)}</span>
        <span className="forecast_temp_max col">{temp_max}°C</span>
        <span className="forecast_temp_min col">{temp_min}°C</span>
        <img src={icon} alt={icon_descr} class="forecast-icon col" />
      </div>
    </li>
  );
}
