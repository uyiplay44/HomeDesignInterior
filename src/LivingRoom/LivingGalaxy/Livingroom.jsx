import React from "react";
import "./LivingRoom.css";
import Showcase from "../Index";

export default function Livingroom() {
  return (
    <div className="LivingMain">
      <h1>Living Room Galaxy</h1>
      <div className="LivingContainer">
        {Showcase.map((image, index) => (
          <div key={index} className="LivingImg">
            <img src={image.Img} alt="source" />
          </div>
        ))}
      </div>
    </div>
  );
}
