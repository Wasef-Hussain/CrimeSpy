import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import HeroSectionTwo from "./HeroSectionTwo";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div>
        <div className="background_header">
          <img src={img} className="home_hero-img" />

          <div className="col" style={{ position: "absolute", top: "14%" }}>
            <div className="home_hero-text-wrapper">
              <div className="topLine">{topLine}</div>
              <h1 className={lightText ? "heading" : "heading dark"}>
                {headline}
              </h1>
              <p
                className={
                  lightTextDesc
                    ? "home_hero-subtitle"
                    : "home_hero-subtitle dark"
                }
              >
                {description}
              </p>
              <Link to="/map">
                <Button buttonSize="btn--wide" buttonColor="blue">
                  {buttonLabel}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
