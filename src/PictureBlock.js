import React from "react";
import "./PictureBlock.css";

export default function PictureBlock(props) {
  const pictureMapping = {
    "01d": "/sunny.jpeg",
    "01n": "/sunny.jpeg",
    "02d": "/sunny_int.jpeg",
    "02n": "/sunny_int.jpeg",
    "03d": "/cloudy.jpeg",
    "03n": "/cloudy.jpeg",
    "04d": "/cloudy.jpeg",
    "04n": "/cloudy.jpeg",
    "09d": "/rain.jpeg",
    "09n": "/rain.jpeg",
    "10d": "/rain.jpeg",
    "10n": "/rain.jpeg",
    "11d": "/thunder.jpeg",
    "11n": "/thunder.jpeg",
    "13d": "/snow.jpeg",
    "13n": "/snow.jpeg",
    "50d": "/mist.jpeg",
    "50n": "/mist.jpeg",
  };
  console.log(props.code);
  return (
    <div className="PictureBlock">
      <img
        src={pictureMapping[props.weather.iconID]}
        alt="props.weather.description"
        className="img-fluid"
        id="weatherPic"
      />
    </div>
  );
}
