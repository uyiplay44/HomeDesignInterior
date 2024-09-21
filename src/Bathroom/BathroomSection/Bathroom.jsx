import React from "react";
import Showroom from "../Showroom";
import "./Bathroom.css";

export default function Bathroom() {
  return (
    <div className="ShowroomMain">
      <h1>Bathroom</h1>
      <div className="ShowroomContainer">
        {Showroom.map((image, index) => (
          <div className="ShowroomImg" key={index}>
            <img src={image.Img} alt="showroom" />
          </div>
        ))}
      </div>
    </div>
  );
}
