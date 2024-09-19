import React from "react";
import "./Advert.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export const Advert = () => {
  return (
    <div className="advert__main">
      <div className="advert_container">
        <div></div>
        <p>✨ INCREDIBLE DEALS! | SAVE UP TO 40% OFF SELECTED ITEMS!</p>
        <div className="advert__icon">
          <FaFacebook className="iconTag" />
          <FaInstagramSquare className="iconTag" />
          <FaPinterest className="iconTag" />
        </div>
      </div>
    </div>
  );
};
