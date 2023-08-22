import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center align-middle justify-center md:justify-between px-0 md:px-10 pt-24 md:pt-0 min-h-screen">
      <div className="mx-10 pb-16 md:pb-0">
        <h1 className="text-[#002D62] text-3xl md:text-6xl font-extrabold leading-snug text-center md:text-left mt-8 md:mt-0">
          Unleashing Digital Potential By Crafting High-Converting Apps
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center mt-16 md:mt-10 h-16">
          <Button
            variant="contained"
            startIcon={<CallIcon className="w-7 h-7" />}
            href="#contact"
            className="w-full h-12 md:w-1/2 bg-[#002D62] border-[#002D62] hover:bg-[#002D62] border-2 md:mr-4 rounded-md text-base font-semibold text-[#fff] transition-all  hover:shadow-2xl hover:shadow-[#002D62] md:hover:-mt-2"
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            startIcon={<RemoveRedEyeIcon className="w-7 h-7" />}
            href="#portfolio"
            className="w-full h-12 md:w-1/2 mt-4 md:mt-0 border-[#002D62] border-2 md:ml-4 rounded-md text-base font-semibold text-[#002D62] transition-all hover:bg-[#002e6220] hover:shadow-2xl hover:shadow-[#002D62] hover:border-[#002D62] hover:border-2 md:hover:-mt-2"
          >
            View Our Projects
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center transition-all hover:z-10 hover:scale-110">
          <div className="flex flex-col relative w-44 h-44 md:w-72 md:h-72">
            <Link href={"https://www.linkedin.com/in/taherk18"} target="_blank">
              <Image
                src={"/profile/taher.jpg"}
                alt="team_photo"
                fill
                className="rounded-full shadow-xl cursor-pointer ml-4 border-4 border-[#002D62]"
              />
            </Link>
          </div>
          <span className="mt-4 font-bold text-xl">Taher</span>
        </div>
        <div className="flex flex-col items-center transition-all hover:z-10 hover:scale-110">
          <div className="flex flex-col relative w-44 h-44 md:w-72 md:h-72">
            <Link
              href={"https://www.linkedin.com/in/mustafa-chaiwala-7a3890226"}
              target="_blank"
            >
              <Image
                src={"/profile/mustafa.jpeg"}
                alt="team_photo"
                fill
                className="rounded-full shadow-xl cursor-pointer -ml-4 border-4 border-[#002D62]"
              />
            </Link>
          </div>
          <span className="-ml-8 mt-4 font-bold text-xl">Mustafa</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
