import React from "react";
import "./Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photo from "../../assets/Bathrooms-14.jpeg";
import Photo1 from "../../assets/Bathrooms-15.jpeg";
import Photo2 from "../../assets/Bathrooms-16.jpeg";

function Banner() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card">
          <img src={Photo} alt="" className="slideImg" />
        </div>
        <div>
          <img src={Photo1} alt="" className="slideImg" />
        </div>
        <div>
          <img src={Photo2} alt="" className="slideImg" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
