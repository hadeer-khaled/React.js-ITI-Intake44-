import React from "react";
import "./Portfolio.css";
import MyCard from "../MyCard/MyCard";
const Portfolio = () => {
  return (
    <section className="w-100 mt-5 px-5">
      <h2 className="section-title mb-4">Portifolio</h2>
      <div className="w-100 card-container d-flex flex-wrap justify-content-evenly align-items-center">
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
        <MyCard cardTitle={"WEB DESIGN"}></MyCard>
      </div>
    </section>
  );
};

export default Portfolio;
