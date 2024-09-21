import React from "react";
import "./Closet.css";
import ClosetShow from "../ClosetItem";

export default function Closet() {
  return (
    <div>
      <div>
        {ClosetShow.map((image, index) => (
          <div>
            <img src={image.Img} alt="closet" />
          </div>
        ))}
      </div>
    </div>
  );
}
