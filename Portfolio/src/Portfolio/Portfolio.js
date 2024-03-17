import React, { useState } from "react";
import "./Portfolio.css";
import MyCard from "../MyCard/MyCard";
const Portfolio = () => {
  const [categoriesList, setCategoriesList] = useState([
    {
      id: 0,
      name: "Web Design",
    },
    {
      id: 1,
      name: "Mobile Design",
    },
    {
      id: 2,
      name: "Logo Design",
    },
    {
      id: 3,
      name: "Web Application Development",
    },
    {
      id: 4,
      name: "Mobile Application Development",
    },
    {
      id: 5,
      name: "PWA Application Development",
    },
  ]);
  return (
    <section className="w-100 mt-5 px-5">
      <h2 className="section-title mb-4">Portifolio</h2>
      <div className="w-100 card-container d-flex flex-wrap justify-content-evenly align-items-center">
        {/* -------------------  Lab 1 ------------------- */}
        {/* <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard> */}

        {/* -------------------  Lab 2 ------------------- */}
        {categoriesList.map((category, index) => {
          const backGroundColorClass =
            index % 2 === 0 ? "even-card" : "odd-card";
          return (
            <MyCard
              key={`category-${index}`}
              cardTitle={category.name}
              backGroundColorClass={backGroundColorClass}></MyCard>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
