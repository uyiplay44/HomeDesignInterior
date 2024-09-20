import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="AboutMain">
      <div className="AboutContainer">
        <div className="AboutTitle">
          <h1>About Us</h1>
          <div className="AboutContent">
            <p>
              In 2009, we embarked on our journey in the vibrant heart of Lagos,
              Nigeria, igniting the world of bedding and soft-furnishings with
              our unwavering passion. Our mission was simple: to bring exquisite
              beddings to those with a discerning taste and offer soft
              furnishing services to those seeking comfort and style. As time
              flowed, our horizons expanded far beyond our initial vision. By
              2013, we unlocked the doors to a realm of design that would
              forever change the landscape of interiors. This marked the birth
              of Olivehaus Interiors, a name synonymous with innovation and a
              profound commitment to enhancing the quality of life for everyone
              we encounter. At the helm of this venture stands our visionary
              founder, Anita Azuike, whose qualifications form the bedrock of
              our excellence. With a BSc in Microbiology from Obafemi Awolowo
              University, Anita embodies a commitment to precision and knowledge
              that underpins our every endeavor. She further honed her passion
              for interior design through dedicated study at the Interior Design
              Institute in the USA.
            </p>
          </div>
        </div>

        <img
          src="https://olivehausinteriors.com/wp-content/uploads/2015/07/Surulere-15.jpg"
          alt=""
          className="AboutImg"
        />
      </div>
    </div>
  );
}
