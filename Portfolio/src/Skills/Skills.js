import React from "react";
import "./Skills.css";
import MyProgressBar from "./../MyProgressBar/MyProgressBar";
const Skills = () => {
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
          <MyProgressBar progress={"70"} skillName={"Node.js"} />
          <MyProgressBar progress={"90"} skillName={"JavaScript"} />
          <MyProgressBar progress={"80"} skillName={"Angular"} />
          <MyProgressBar progress={"60"} skillName={"React"} />
          {/* <MyProgressBar progress={"70"} />
          <MyProgressBar progress={"90"} />
          <MyProgressBar progress={"80"} />
          <MyProgressBar progress={"60"} /> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
