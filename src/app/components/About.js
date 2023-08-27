"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import HeaderText from "./HeaderText";

const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center mb-24">
      <HeaderText text={"About Us"} />
      <div className="px-0 md:px-52 py-16">
        <div className="grid justify-items-center md:justify-items-stretch grid-cols-12 gap-4">
          <div className="relative col-span-12 md:col-span-3 w-64 h-64">
            <Image
              src={"/profile/taher.jpg"}
              alt="team_photo"
              fill
              className="rounded-full shadow-xl cursor-pointer border-4 border-[#002D62]"
            />
          </div>
          <div className="col-span-12 md:col-span-9 flex items-center">
            <span className="text-3xl md:text-4xl font-bold text-[#002D62]">
              Taher Khasamwala
            </span>
          </div>
          {/* Arrow Right */}
          <div className="hidden md:block col-span-4">
            <div className="relative w-full h-full">
              <Image src={"/images/arrow-right.png"} alt="arrow-right" fill />
            </div>
          </div>
          {/* Arrow Right Mobile */}
          <div className="block md:hidden col-span-12">
            <div className="relative w-16 h-36">
              <Image
                src={"/images/mobile-arrow-right.png"}
                alt="mobile-arrow-right"
                fill
              />
            </div>
          </div>
          <span className="col-span-12 md:col-span-8 mx-6 md:mx-0 text-justify border-4 border-[#002D62] rounded-md p-8 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt velit nunc, sed ultricies tellus interdum vitae.
            Suspendisse potenti. Sed efficitur magna nisl, at varius mauris
            ultricies non. Morbi feugiat risus sed ex varius dapibus. Maecenas
            faucibus blandit ipsum nec maximus. Nulla sodales aliquet elit.
            Fusce aliquam massa quam, eu venenatis augue ultricies in. Morbi sit
            amet mollis nulla, eu sollicitudin sem. Quisque sed tellus non ex
            aliquet malesuada.
          </span>
        </div>

        {/* <hr className="w- border-b-2 block md:hidden mt-12 border-[#002D62]" /> */}
        <hr class="block md:hidden h-px mx-6 my-16 bg-[#002e629a] border-0 rounded"></hr>

        <div className="grid justify-items-center md:justify-items-stretch grid-cols-12 gap-4 mt-0 md:mt-16">
          {/* Name For PC Screen */}
          <div className="col-span-12 md:col-span-9 hidden md:flex items-center justify-end">
            <span className="text-3xl md:text-4xl font-bold text-[#002D62]">
              Mustafa Chaiwala
            </span>
          </div>
          <div className="col-span-12 md:col-span-3 relative w-64 h-64 flex justify-end">
            <Image
              src={"/profile/mustafa.jpeg"}
              alt="team_photo"
              fill
              className="rounded-full shadow-xl cursor-pointer border-4 border-[#002D62]"
            />
          </div>
          {/* Name For Mobile */}
          <div className="col-span-12 md:col-span-9 flex items-center justify-end md:hidden">
            <span className="text-4xl font-bold text-[#002D62]">
              Mustafa Chaiwala
            </span>
          </div>
          {/* Arrow Left Mobile */}
          <div className="block md:hidden col-span-12">
            <div className="relative w-16 h-36">
              <Image
                src={"/images/mobile-arrow-left.png"}
                alt="mobile-arrow-left"
                fill
              />
            </div>
          </div>
          <span className="col-span-12 md:col-span-8 mx-6 md:mx-0 text-justify border-4 border-[#002D62] rounded-md p-8 font-semibold">
          Enthusiastic and skilled Android and Backend Developer with a passion for crafting dynamic digital solutions that seamlessly integrate frontend elegance with backend functionality. With a strong foundation in mobile application development and server-side architecture, I bring to the table a wealth of technical expertise that drives the creation of innovative and user-centric software experiences.
          </span>
          {/* Arrow Left */}
          <div className="hidden md:block col-span-4">
            <div className="relative w-full h-full">
              <Image src={"/images/arrow-left.png"} alt="arrow-left" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
