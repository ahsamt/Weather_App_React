import React from "react";
import "./DetailsToday.css";
import TempToday from "./TempToday";

export default function DetailsToday(props) {
  return (
    <div className="DetailsToday">
      <TempToday celsius={props.weather.temperature} />
      <div id="humidity">Humidity: {props.weather.humidity}%</div>
      <div id="windSpeed">Wind speed: {props.weather.wind} m/s</div>
    </div>
  );
}
