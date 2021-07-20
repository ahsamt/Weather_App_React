import React from "react";
import "./PictureBlock.css";

export default function PictureBlock() {
  return (
    <div className="PictureBlock">
      <img
        src="/palms.jpeg"
        alt="palm tree"
        className="img-fluid"
        id="weatherPic"
      />
    </div>
  );
}
