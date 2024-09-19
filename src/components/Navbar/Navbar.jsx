import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar_main">
      <div className="navbar_container">
        <div className="navbar_title">
          <h1>HomeLify</h1>
          <p>Design For High-quality living</p>
        </div>
        <ul className="nav-link">
          <Link to="/" className="Link">
            Home
          </Link>
          <Link to="livingroom" className="Link">
            Living Room
          </Link>
          <Link to="/bedroom" className="Link">
            bedrooms
          </Link>
          <Link to="/bathroom" className="Link">
            Bathrooms
          </Link>
          <Link to="/closet" className="Link">
            Closets
          </Link>
          <Link to="/kitchen" className="Link">
            Kitchens
          </Link>
        </ul>
      </div>
    </div>
  );
};
