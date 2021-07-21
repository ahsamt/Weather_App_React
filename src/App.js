import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import IconToday from "./IconToday";
import DetailsToday from "./DetailsToday";
import ForecastElt from "./ForecastElt";
import PictureBlock from "./PictureBlock";

export default function App() {
  let apiKey = "545e2ed5d446d0667b1abac42d152f0d";

  function getResponseData() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(generateWeatherInfo);
    console.log("api request sent");
  }

  function generateWeatherInfo(response) {
    console.log(response);
    setWeather({
      searchCity: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getResponseData();
  }

  let [city, setCity] = useState("London");
  let [weather, setWeather] = useState({
    searchCity: "",
    temperature: "",
    description: "",
    humidity: "",
    wind: "",
    icon: `http://openweathermap.org/img/wn/02a@2x.png`,
  });

  return (
    <div className="App">
      <div className="container">
        <header>
          <div id="todayIs">Tuesday, 19:00</div>
          <span id="welcomeStatement"> Scattered clouds today in {city}</span>
          <span id="city"></span>
        </header>

        <div className="row">
          <div className="col-md-3">
            <IconToday />
          </div>
          <div className="col-md-6">
            <DetailsToday />
          </div>
          <div className="col-md-3 d-none d-md-block">
            <IconToday />
          </div>
        </div>
        <header id="changeCity">Change city?</header>
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
        <button type="text" id="local" value="local">
          Local weather
        </button>
        <br />

        <div className="row">
          <div className="col-sm-7" id="forecast">
            <ul>
              <ForecastElt />
              <ForecastElt />
              <ForecastElt />
              <ForecastElt />
              <ForecastElt />
            </ul>
          </div>
          <div className="col-sm-5">
            <PictureBlock />
          </div>
        </div>

        <footer>
          coded by{" "}
          <a
            href="https://upbeat-sinoussi-6cb3f6.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Maryia Tarpachova{" "}
          </a>
          |{" "}
          <a
            href="https://github.com/ahsamt/Weather_App_React"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>
        </footer>
      </div>
    </div>
  );
}
