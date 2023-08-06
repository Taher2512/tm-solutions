import Image from "next/image";
import React from "react";

const PortfolioCard = ({ project, ext, title }) => {
  return (
    // <div className="col-span-4 mt-12 flex items-center justify-center">
    //   <div className="relative w-64 h-128 cursor-pointer transform transition duration-500 hover:scale-110">
    //     <Image
    //       src={src}
    //       alt="portfolio_image"
    //       fill
    //       className="rounded-lg shadow-2xl"
    //     />
    //   </div>
    // </div>
    <div className="relative h-128 col-span-4 mt-12 flex items-center justify-center cursor-pointer">
      <div class="flex justify-center group h-full">
        <div class="w-64 h-128 transform transition-all group-hover:delay-200 delay-100 absolute group-hover:mt-10 group-hover:-ml-56 rounded-lg">
          <Image
            src={`/portfolio/${project}/3.${ext}`}
            alt="portfolio_image"
            fill
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div class="w-64 h-128 transform transition-all group-hover:delay-100 delay-300 absolute group-hover:mt-5 group-hover:-ml-28 rounded-lg">
          <Image
            src={`/portfolio/${project}/2.${ext}`}
            alt="portfolio_image"
            fill
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div class="w-64 h-128 flex justify-center items-center border-2 border-black transform transition-all absolute rounded-lg">
          <Image
            src={`/portfolio/${project}/main.${ext}`}
            alt="portfolio_image"
            fill
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div class="h-128 flex justify-end items-end transform transition-all my-12 text-center group-hover:mt-20 group-hover:delay-75 delay-300">
          <span className="font-bold text-lg">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
