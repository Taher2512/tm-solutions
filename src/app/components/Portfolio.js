import React from "react";
import PortfolioCard from "./PortfolioCard";
import HeaderText from "./HeaderText";

const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col justify-center px-24">
      <HeaderText text={"Our Portfolio"} />
      <div className="grid grid-cols-12 gap-x-8 gap-y-16">
        <PortfolioCard
          project={"works"}
          ext={"jpg"}
          title={"Works Management App"}
        />
        <PortfolioCard
          project={"inventory"}
          ext={"jpg"}
          title={"Inventory Management App"}
        />
        <PortfolioCard
          project={"hackathon"}
          ext={"jpeg"}
          title={"Hackathon Project"}
        />
        <PortfolioCard
          project={"works"}
          ext={"jpg"}
          title={"Works Management Project"}
        />
        <PortfolioCard
          project={"inventory"}
          ext={"jpg"}
          title={"Inventory Management App"}
        />
        <PortfolioCard
          project={"hackathon"}
          ext={"jpeg"}
          title={"Hackathon Project"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
