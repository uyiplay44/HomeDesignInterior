import React from "react";
import "./Section.css";
import { FaArrowRight } from "react-icons/fa6";
import { BiCloset } from "react-icons/bi";
import { FaKitchenSet } from "react-icons/fa6";
import { SiMaterialdesignicons } from "react-icons/si";

export default function Section() {
  return (
    <div className="SectionMain">
      <div className="SectionContainer">
        <div className="SectionTag">
          <FaKitchenSet className="SectionIcon" />
          <h1>Kitchen & Bath Design</h1>
          <p>
            Our secret to great bathrooms and kitchens lie in functional
            layouts. Your needs come first.
          </p>
          <button className="SectionBtn">
            Hire Us Now <FaArrowRight />
          </button>
        </div>
        <div className="SectiionTitle">
          <SiMaterialdesignicons className="SectionTitleIcon" />
          <h1>Interior Design & Decoration</h1>
          <p>
            Our design solutions are tailored made for each client/project. It
            is never a one size fits all. Whatever the style or preference.
          </p>
          <button className="SectionTitleBtn">
            Discover <FaArrowRight />
          </button>
        </div>
        <div className="SectionTag">
          <BiCloset className="SectionIcon" />
          <h1>Closets & Wardrobes</h1>
          <p>
            We major in creating highly personalized closets and wardrobes. We
            think of a place for everything and everything in its place.
          </p>
          <button className="SectionBtn">
            View Our Projects <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
