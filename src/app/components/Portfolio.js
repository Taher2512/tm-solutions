import Image from "next/image";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import HeaderText from "./HeaderText";

const Portfolio = () => {
  return (
    <section className="flex flex-col justify-center px-24 pt-24">
      <HeaderText text={"Our Portfolio"} />
      <div className="grid grid-cols-12 gap-x-8 gap-y-16">
        <PortfolioCard
          project={"dcs"}
          ext={"jpg"}
          title={"Works Management App"}
        />
        <PortfolioCard
          project={"hicf"}
          ext={"jpg"}
          title={"Inventory Management App"}
        />
        <PortfolioCard
          project={"scrapify"}
          ext={"jpeg"}
          title={"Hackathon Project"}
        />
        <PortfolioCard
          project={"dcs"}
          ext={"jpg"}
          title={"Works Management Project"}
        />
        <PortfolioCard
          project={"hicf"}
          ext={"jpg"}
          title={"Inventory Management App"}
        />
        <PortfolioCard
          project={"scrapify"}
          ext={"jpeg"}
          title={"Hackathon Project"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
