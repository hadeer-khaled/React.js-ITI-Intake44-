import React from "react";
import BasicButton from "../Button/BasicButton";
import landingImage from "./../assets/landingImg_3.png";

import "./Hero.css";
const Hero = () => {
  return (
    <section className="w-100 px-5 d-flex justify-content-between align-items-center hero-section">
      <div claclassNamess="left-part">
        <h1 className="">Hadeer Khaled Nabil</h1>
        <p>Web Developer & Designer.</p>
        <BasicButton buttonContent={"Contact Me"} claclassName="contact-btn" />
      </div>
      <div claclassNamess="right-part">
        <img src={landingImage} alt="Logo" className="main-img" />;
      </div>
    </section>
  );
};

export default Hero;
