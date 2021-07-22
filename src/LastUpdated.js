import React from "react";
import "./LastUpdated.css";
export default function LastUpdated(props) {
  function timeFormat(time) {
    //takes in hours/second/minutes as 1- or 2-digit number and converts it to a 2-digit number
    return ("0" + time).slice(-2);
  }

  function appDate() {
    let week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = week[props.date.getDay()];
    let hours = timeFormat(props.date.getHours());
    let minutes = timeFormat(props.date.getMinutes());
    return `${day}, ${hours}:${minutes}`;
  }

  let updateTime = appDate();
  return (
    <div className="LastUpdated">
      Last update
      <div id="updateTime"> {updateTime}</div>
    </div>
  );
}
