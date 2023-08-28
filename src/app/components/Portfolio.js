import React from "react";
import PortfolioCard from "./PortfolioCard";
import HeaderText from "./HeaderText";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col justify-center px-24 mb-28"
    >
      <HeaderText text={"Our Portfolio"} />
      <div className="flex flex-col md:grid md:grid-cols-12 md:gap-x-8 gap-y-16">
        <PortfolioCard
          project={"works"}
          ext={"jpg"}
          title={"Works Management App"}
        />
        <PortfolioCard
          project={"food"}
          ext={"jpg"}
          title={"Food Delivery App"}
        />
        <PortfolioCard
          project={"inventory"}
          ext={"jpg"}
          title={"Inventory Management App"}
        />
        <PortfolioCard
          project={"jobs"}
          ext={"jpeg"}
          title={"Jobs Search App"}
        />
        <PortfolioCard
          project={"hackathon"}
          ext={"jpeg"}
          title={"Hackathon Project"}
        />
        {/* <PortfolioCard
          project={"hackathon"}
          ext={"jpeg"}
          title={"Hackathon Project"}
        /> */}
      </div>
    </section>
  );
};

export default Portfolio;
