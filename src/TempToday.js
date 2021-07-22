import React, { useState } from "react";
import "./TempToday.css";

export default function TempToday(props) {
  const [unit, setUnit] = useState("celsius");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <span className="TempToday">
        {props.celsius}
        <a href="/" className="active">
          {" "}
          °C
        </a>{" "}
        |
        <a href="/" className="inactive" onClick={showFahrenheit}>
          {" "}
          °F
        </a>
      </span>
    );
  } else {
    return (
      <span className="TempToday">
        {Math.round((props.celsius * 9) / 5 + 32)}
        <a href="/" className="inactive" onClick={showCelsius}>
          {" "}
          °C
        </a>{" "}
        |
        <a href="/" className="active">
          {" "}
          °F
        </a>
      </span>
    );
  }
}
