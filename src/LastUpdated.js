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

    let date = new Date(props.date * 1000);
    let day = week[date.getDay()];
    let hours = timeFormat(date.getHours());
    let minutes = timeFormat(date.getMinutes());
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
