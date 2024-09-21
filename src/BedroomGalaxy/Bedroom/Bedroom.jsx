import React from "react";
import "./Bedroom.css";
import Bedroomshow from "../bedroom";

export default function Bedroom() {
  return (
    <div className="BedroomTitle">
      <div className="BedroomMain">
        {Bedroomshow.map((image, index) => (
          <div key={index} className="BedroomContainer">
            <img src={image.photo} alt="Bedroom" />
          </div>
        ))}
      </div>
    </div>
  );
}
