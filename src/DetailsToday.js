import React from "react";
import "./DetailsToday.css";

export default function DetailsToday(props) {
  return (
    <div className="DetailsToday">
      <span id="todayTemp">{props.weather.temperature}</span> °C | °F
      <br />
      <div id="humidity">Humidity: {props.weather.humidity}%</div>
      <div id="windSpeed">Wind speed: {props.weather.wind} m/s</div>
    </div>
  );
}
