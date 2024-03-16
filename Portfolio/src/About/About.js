import React from "react";
import BasicButton from "../Button/BasicButton";
import "./About.css";
const About = () => {
  return (
    <section className="w-100 mt-5 px-5 d-flex justify-content-between">
      <div className="left-part">
        <h2 className="section-title-about">About Me</h2>
      </div>
      <div className="right-part w-75">
        <p className="lh-base about-p">
          Currently, I am an open-source applications developer at Information
          Technology Institute, where I am acquiring valuable technical and soft
          skills. I graduated from the Faculty of Engineering at Cairo
          University in 2023 with a very good overall grade, and an A+ for my
          graduation project. During my time at university, I participated with
          my team in the NLP Competition at Nile University AI Hackathon to
          solve a Named Entity Recognition problem, and we achieved fourth place
          out of ten teams. Moreover, I participated in the _VOIS Vantage 2022
          Competition - Egypt Track with two of my friends to solve real-life
          strategy case studies and achieved first place 🥇.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1XQU977MM1-MQPzYOeCBikdTDZLVceH-D"
          download="hadeer_khaled_cv.pdf">
          <BasicButton
            buttonContent={"Download Resume"}
            className="resume-btn mt-4"
          />
        </a>
      </div>
    </section>
  );
};

export default About;
