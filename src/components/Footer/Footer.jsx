import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="FooterMain">
      <div className="FooterContainer">
        <div className="FooterTitle">
          <p>©2022</p>
          <span>-</span>
          <p>Powered by DevSue Tecknology Company </p>
        </div>
        <ul className="FooterList">
          <li>|Home|</li>
          <li>|About|</li>
          <li>|Portfolio|</li>
          <li>|Our Service|</li>
          <li>|Contact|</li>
        </ul>
        <div className="FooterIcon">
          <FaFacebook className="FooterIcon" />
          <FaInstagramSquare className="FooterIcon" />
          <FaPinterest className="FooterIcon" />
        </div>
      </div>
    </div>
  );
}
