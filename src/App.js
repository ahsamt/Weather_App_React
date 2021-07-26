import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import LastUpdated from "./LastUpdated";
import IconToday from "./IconToday";
import DetailsToday from "./DetailsToday";
import ForecastElt from "./ForecastElt";
import PictureBlock from "./PictureBlock";
import Footer from "./Footer";

export default function App() {
  const apiKey = "545e2ed5d446d0667b1abac42d152f0d";
  const axios = require("axios");
  function getResponseDataToday() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(generateWeatherInfo)
      .catch(function (error) {
        alert(`Sorry, we do not have weather details for ${city}`);
      });
  }

  function generateWeatherInfo(response) {
    let descriptionLower = response.data.weather[0].description;
    setWeather({
      searchCity: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description:
        descriptionLower[0].toUpperCase() + descriptionLower.substring(1),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      iconID: response.data.weather[0].icon,
      iconImage: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function getLocalCoords(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(generateWeatherInfo);
  }

  function checkLocalCoords() {
    navigator.geolocation.getCurrentPosition(getLocalCoords);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getResponseDataToday();
    event.target.reset();
  }

  let [city, setCity] = useState("London");
  let [weather, setWeather] = useState(null);

  if (weather) {
    return (
      <div className="App">
        <div className="container">
          <header className="main-header">
            <LastUpdated date={weather.date} />
            {weather.description} in {weather.searchCity} today
            <span id="city"></span>
          </header>

          <div className="row">
            <div className="col-md-3">
              <IconToday weather={weather} />
            </div>
            <div className="col-md-6">
              <DetailsToday weather={weather} />
            </div>
            <div className="col-md-3 d-none d-md-block">
              <IconToday weather={weather} />
            </div>
          </div>
          <header className="mt-1">Change city?</header>
          <form onSubmit={handleSubmit}>
            <input
              id="searchCity"
              type="search"
              placeholder="City name"
              autoComplete="off"
              autoFocus="on"
              onChange={updateCity}
            />
            <button type="submit" id="specified" value="search">
              Search
            </button>
          </form>
          <button
            type="text"
            id="local"
            value="local"
            onClick={checkLocalCoords}
          >
            Local weather
          </button>
          <br />
          <div className="row">
            <div className="col-sm-7">
              <ForecastElt coordinates={weather.coordinates} />
            </div>
            <div className="col-sm-5">
              <PictureBlock weather={weather} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    getResponseDataToday();
    return "Loading...";
  }
}
