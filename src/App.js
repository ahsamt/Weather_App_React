import React from "react";
import "./App.css";
import IconToday from "./IconToday";
import DetailsToday from "./DetailsToday";
import ForecastElt from "./ForecastElt";
import PictureBlock from "./PictureBlock";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <div id="todayIs">Tuesday, 19:00</div>
          <span id="welcomeStatement"> Check the weather here</span>
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
        <form>
          <input
            id="searchCity"
            type="text"
            placeholder="City name"
            autoComplete="on"
            autoFocus="on"
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
