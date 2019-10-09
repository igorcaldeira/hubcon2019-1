import React from "react";
import logo from "../logo.svg";
import galaxy from "./galaxy.gif";
import "./Hero.css";

const Hero = () => (
  <section id="inicio">
    <div className="container hero-container">
      <div className="hero-columns">
        <div className="logo-content">
          <img alt='logo' src={logo} />
          <div>
            <h6>2019 _ EDIÇÃO 2</h6>
          </div>
        </div>
        <div className="geom-content">
          <div className="formats">
            <div className="geometric-formats-big">
              <img alt='galaxia' src={galaxy} />
            </div>
            <div className="geometric-formats-small" />
            <div id="date-hubcon" />
            <div id="schedule-hubcon">
              <h6>DEZ 07, 2019</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
