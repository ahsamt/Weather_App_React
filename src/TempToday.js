import React from "react";
import "./TempToday.css";

export default function TempToday(props) {
  return (
    <div className="TempToday">
      <span className="temperature">{props.celsius}</span>{" "}
      <span className="unit">°C </span>
    </div>
  );
}
