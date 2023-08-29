"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ProjectModal from "./ProjectModal";

const PortfolioCard = ({ project, ext, title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [customTexts, setCustomTexts] = useState([]);

  useEffect(() => {
    if (project == "works") {
      setCustomTexts([
        "Works Screen",
        "Add Screen",
        "Work Categories Screen",
        "Work Category Clients Screen",
        "Work Category Clients Screen - 2",
        "All Works Screen",
        "Profile Screen",
        "Work Status In Profile Screen",
        "Update Work Status Modal",
        "Remarks Screen",
      ]);
    } else if (project == "inventory") {
      setCustomTexts([
        "Dashboard Screen",
        "Drawer Navigation",
        "Add Product Form",
        "Pickup Slips Screen",
        "Login Screen",
        "Brand Filters",
      ]);
    } else if (project == "hackathon") {
      setCustomTexts([
        "Articles Screen",
        "Recycle Screen",
        "Recycle Bag Screen",
        "Recycle Item Screen",
        "Pickup Confirmation",
        "Login Screen",
        "Registration Screen",
      ]);
    }
  }, [project]);

  return (
    <>
      <ProjectModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        project={project}
        ext={ext}
        customTexts={customTexts}
      />
      <div className="relative group h-112 md:h-128 col-span-4 mt-12 flex items-center justify-center cursor-pointer">
        <div className="flex justify-center h-full">
          {/* md:group-hover:-rotate-12 */}
          <div className="w-52 h-112 md:w-64 md:h-128 transform transition-all group-hover:delay-200 delay-100 absolute  group-hover:-rotate-12 md:group-hover:rotate-0 group-hover:mr-20 md:group-hover:mr-0 md:group-hover:-ml-56 md:group-hover:mt-10 group-hover:-mt-4 rounded-lg">
            <Image
              src={`/portfolio/${project}/3.${ext}`}
              alt="portfolio_image"
              fill
              className="rounded-lg shadow-2xl"
            />
          </div>
          {/* md:group-hover:-rotate-6 */}
          <div className="w-52 h-112 md:w-64 md:h-128 transform transition-all group-hover:delay-100 delay-300 absolute group-hover:rotate-12 md:group-hover:rotate-0 group-hover:ml-20 md:group-hover:-ml-28 md:group-hover:mt-5 group-hover:-mt-4 rounded-lg">
            <Image
              src={`/portfolio/${project}/2.${ext}`}
              alt="portfolio_image"
              fill
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-52 h-112 md:w-64 md:h-128 flex justify-center items-center border-2 border-[#002D62] transform transition-all absolute rounded-lg">
            <div className="flex items-center justify-center w-52 h-112 md:w-64 md:h-128 bg-black z-10 transform rounded-lg bg-opacity-0 group-hover:bg-opacity-40 ease-in-out duration-300">
              <div className="hidden group-hover:block">
                <Button
                  variant="outlined"
                  startIcon={<RemoveRedEyeIcon className="w-6 h-6" />}
                  onClick={() => setModalIsOpen(true)}
                  className="opacity-0 border-[#fff] border-2 mx-4 rounded-md text-base font-semibold text-[#fff] transition-all group-hover:opacity-100 hover:shadow-2xl hover:shadow-[#002D62] hover:border-[#fff] hover:border-2 hover:-mt-2"
                >
                  View
                </Button>
              </div>
            </div>
            <Image
              src={`/portfolio/${project}/main.${ext}`}
              alt="portfolio_image"
              fill
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div class="h-96 md:h-112 flex justify-end items-end transform transition-all my-24 md:my-12 text-center md:group-hover:mt-20 group-hover:delay-75 delay-300 -z-10">
            <span className="font-bold text-lg text-[#002D62]">{title}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
