"use client";

import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#002D62",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  // No height peviously
  height: "93vh",
};

const ProjectModal = ({
  modalIsOpen,
  setModalIsOpen,
  project,
  ext,
  customTexts,
}) => {
  const [slides, setSlides] = useState(0);

  const handleOpen = () => setModalIsOpen(true);
  const handleClose = () => setModalIsOpen(false);

  useEffect(() => {
    if (project == "works") {
      setSlides(9);
    } else if (project == "inventory") {
      setSlides(5);
    } else if (project == "hackathon") {
      setSlides(6);
    }
  }, [project]);

  const slideElements = new Array(slides).fill(null).map((_, index) => (
    // previously className="h-full"
    <div style={{ height: "77%" }} key={index}>
      <img
        src={`/portfolio/${project}/${index + 2}.${ext}`} // Adjust the image source based on your file naming convention
        alt={`project_image_${index}`}
        className="h-full object-contain p-2 rounded-lg"
      />
      {/* <p className="legend">{customTexts[index + 1]}</p> */}
    </div>
  ));

  // function CustomSlide() {
  //   <div className="h-full relative border-4">
  //     {/* <img
  //           src="/portfolio/hackathon/main.jpeg"
  //           alt="project_image"
  //           className="hidden"
  //         /> */}
  //     <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] w-[300px]">
  //       <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
  //       <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
  //       <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
  //       <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
  //       <div className="rounded-[2rem] overflow-hidden w-[272px] h-3/4 bg-white">
  //         <img src="/portfolio/hackathon/2.jpeg" className="h-full" alt="" />
  //         {/* <img
  //                   src="/portfolio/hackathon/2.jpeg"
  //                   className="h-full"
  //                   alt=""
  //                 /> */}
  //       </div>
  //     </div>
  //     <p className="legend">Legend 1</p>
  //   </div>;
  // }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modalIsOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={modalIsOpen}>
        <Box sx={style}>
          <div className="h-4/5 w-full">
            <Carousel
              infiniteLoop
              dynamicHeight
              emulateTouch
              // showThumbs={false}
              thumbWidth={35}
            >
              <div style={{ height: "77%" }}>
                <img
                  src={`/portfolio/${project}/main.${ext}`} // Adjust the image source based on your file naming convention
                  alt={`project_image_main`}
                  className="h-full object-contain p-2 rounded-lg"
                />
                {/* <p className="legend"></p> */}
              </div>
              {slideElements}
              {/* <div className="h-4/5">
                <img
                  src={`/portfolio/${project}/main.${ext}`}
                  alt="project_image"
                  className="h-full object-contain p-2 rounded-lg"
                />
                <p className="legend">Legend 2</p>
              </div>
              <div className="h-4/5">
                <img
                  src={`/portfolio/${project}/2.${ext}`}
                  alt="project_image"
                  className="h-full object-contain p-2 rounded-lg"
                />
                <p className="legend">Legend 3</p>
              </div>
              <div className="h-4/5">
                <img
                  src={`/portfolio/${project}/3.${ext}`}
                  alt="project_image"
                  className="h-full object-contain p-2 rounded-lg"
                />
                <p className="legend">Legend 3</p>
              </div> */}
            </Carousel>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ProjectModal;
