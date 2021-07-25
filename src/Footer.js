import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
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
  );
}
