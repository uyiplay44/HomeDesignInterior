import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const nagviate = useNavigate();

  const handleNagivate = () => {
    return nagviate("/contact");
  };

  return (
    <div className="SliderMain">
      <div className="slider-container">
        <button onClick={handleNagivate} className="SlideBtn">
          Our Portfolio
        </button>
      </div>
    </div>
  );
}
