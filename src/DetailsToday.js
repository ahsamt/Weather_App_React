import React from "react";
import "./DetailsToday.css";

export default function DetailsToday() {
  return (
    <div className="DetailsToday">
      <span id="todayTemp">25</span>
      °C | °F
      <br />
      <div id="humidity">Humidity: 80%</div>
      <div id="windSpeed">Wind speed: 5m/s</div>
    </div>
  );
}
