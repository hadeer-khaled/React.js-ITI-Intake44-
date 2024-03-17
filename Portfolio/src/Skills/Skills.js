// import React from "react";
import React, { useState } from "react";

import "./Skills.css";
import MyProgressBar from "./../MyProgressBar/MyProgressBar";
const Skills = () => {
  const [skillsList, setSkillsList] = useState([
    {
      id: 0,
      name: "Node.js",
      progress: 70,
    },
    {
      id: 1,
      name: "JavaScript",
      progress: 90,
    },
    {
      id: 2,
      name: "Angular",
      progress: 80,
    },
    {
      id: 3,
      name: "React",
      progress: 60,
    },
  ]);
  return (
    <section className="skills-section  w-100 px-5 py-5 d-flex flex-column justify-content-between align-items-center">
      <div className="top-part d-flex flex-column justify-content-between align-items-center">
        <h2 className="section-title-skills mb-5">Skills</h2>
        <p className="w-75 text-center mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          assumenda porro suscipit tenetur dolorem numquam nemo? Dolor aut
          ratione rem magnam laborum inventore soluta magni voluptates
          aspernatur corporis. Laudantium, dolore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Amet id, nemo facere animi fuga quas
          similique velit dignissimos distinctio iusto consequatur error
          doloremque? Ratione dolore voluptatem excepturi quam itaque adipisci.
        </p>
      </div>
      <div className="w-100 bottom-part d-flex justify-content-evenly align-items-center">
        <div className="my-focus-div">
          <p className="my-focus-p">My Focus</p>
          <ul>
            <li>Web Design.</li>
            <li>Front End.</li>
            <li>Back End.</li>
          </ul>
        </div>
        <div className="w-50">
          {/* ------------- Lab 1 ------------- */}
          {/* <MyProgressBar progress={"70"} skillName={"Node.js"} />
          <MyProgressBar progress={"90"} skillName={"JavaScript"} />
          <MyProgressBar progress={"80"} skillName={"Angular"} />
          <MyProgressBar progress={"60"} skillName={"React"} /> */}

          {/* -------------  For Lab 2 ------------- */}
          {skillsList.map((skill, index) => {
            return (
              <div key={`skill-${index}`}>
                <MyProgressBar
                  progress={skill.progress}
                  skillName={skill.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
