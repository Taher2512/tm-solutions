import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center align-middle justify-between px-10 min-h-screen">
      <div className="mx-10">
        <h1 className="text-[#0066b2] text-6xl text-bol font-extrabold leading-snug">
          Unleashing Digital Potential By Crafting High-Converting Apps
        </h1>
        <div className="flex items-center justify-center mt-10 h-16">
          <Button
            variant="contained"
            startIcon={<CallIcon className="w-7 h-7" />}
            className="w-1/2 h-12 bg-[#0066b2] border-[#0066b2] border-2 mx-4 rounded-md text-base font-semibold text-[#fff] transition-all  hover:shadow-2xl hover:shadow-[#0066b2] hover:-mt-2"
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            startIcon={<RemoveRedEyeIcon className="w-7 h-7" />}
            className="w-1/2 h-12 border-[#0066b2] border-2 mx-4 rounded-md text-base font-semibold text-[#0066b2] transition-all hover:bg-[#c9e8ff] hover:shadow-2xl hover:shadow-[#0066b2] hover:border-[#0066b2] hover:border-2 hover:-mt-2"
          >
            View Our Projects
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center transition-all hover:z-10 hover:scale-110">
          <div className="flex flex-col relative w-72 h-72">
            <Image
              src={"/profile/taher.jpg"}
              alt="team_photo"
              fill
              className="rounded-full shadow-xl cursor-pointer border-4 border-[#0066b2]"
            />
          </div>
          <span className="mt-4 font-bold text-xl">Taher</span>
        </div>
        <div className="flex flex-col items-center transition-all hover:z-10 hover:scale-110">
          <div className="flex flex-col relative w-72 h-72">
            <Image
              src={"/profile/mustafa.jpeg"}
              alt="team_photo"
              fill
              className="rounded-full shadow-xl cursor-pointer -ml-8 border-4 border-[#0066b2]"
            />
          </div>
          <span className="-ml-8 mt-4 font-bold text-xl">Mustafa</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
