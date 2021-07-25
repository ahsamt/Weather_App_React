import React from "react";
import "./IconToday.css";

export default function IconToday(props) {
  return (
    <img
      className="IconToday"
      src={props.weather.iconImage}
      alt={props.weather.description}
    />
  );
}
