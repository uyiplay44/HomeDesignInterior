import React from "react";
import "./Vision.css";
import { TfiCup } from "react-icons/tfi";
import { PiGlobeStandLight } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GoTelescope } from "react-icons/go";

export default function Vision() {
  return (
    <div className="visionMain">
      <div className="visionContainer">
        <div>
          <img
            src="https://olivehausinteriors.com/wp-content/uploads/2021/09/OH-Mbora-4-300x200.jpeg"
            alt=""
          />
        </div>
        <div className="visionGrid">
          <div className="visionTitle">
            <GoTelescope className="visionIcon" />
            <h1>Our Vision</h1>
            <p>
              To be a global brand known for creating personalized interior
              environments that increase productivity and overall quality of
              life.
            </p>
          </div>
          <div className="visionTitle">
            <TfiCup className="visionIcon" />
            <h1>Our Mission</h1>
            <p>
              To create and implement personalized designs for our clients using
              materials that will give the best user experience.
            </p>
          </div>
          <div className="visionTitle">
            <PiGlobeStandLight className="visionIcon" />
            <h1>YEARS OF EXPERTISE</h1>
            <p>
              Our rich expertise has built us a nationwide reputation, enabling
              us to execute over 200 projects with more still in the works.
            </p>
          </div>
          <div className="visionTitle">
            <IoChatbubblesOutline className="visionIcon" />
            <h1>PROFESSIONAL CONSULTATION</h1>
            <p>
              At OliveHaus Interiors, we guarantee you professional
              consultations you cannot get anywhere else in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
