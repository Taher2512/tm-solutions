"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import HeaderText from "./HeaderText";

const About = () => {
  return (
    <section className="flex flex-col justify-center">
      <HeaderText text={"About Us"} />
      <div className="px-52 py-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="relative col-span-3 w-64 h-64">
            <Image
              src={"/profile/taher.jpg"}
              alt="team_photo"
              fill
              className="rounded-full shadow-xl cursor-pointer border-4 border-[#0066b2]"
            />
          </div>
          <div className="col-span-9 flex items-center">
            <span className="text-4xl font-bold">Taher Khasamwala</span>
          </div>
          <div className="col-span-4">
            <div className="relative w-full h-full">
              <Image src={"/images/arrow-right.png"} alt="arrow-right" fill />
            </div>
          </div>
          <span className="col-span-8 text-justify border-4 border-[#0066b2] rounded-md p-8 font-semibold">
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

        <div className="grid grid-cols-12 gap-4 mt-16">
          <div className="col-span-9 flex items-center justify-end">
            <span className="text-4xl font-bold">Mustafa Chaiwala</span>
          </div>
          <div className="col-span-3 relative w-64 h-64 flex justify-end">
            <Image
              src={"/profile/mustafa.jpeg"}
              alt="team_photo"
              fill
              className="rounded-full shadow-xl cursor-pointer border-4 border-[#0066b2]"
            />
          </div>
          <span className="col-span-8 text-justify border-4 border-[#0066b2] rounded-md p-8 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            tincidunt velit nunc, sed ultricies tellus interdum vitae.
            Suspendisse potenti. Sed efficitur magna nisl, at varius mauris
            ultricies non. Morbi feugiat risus sed ex varius dapibus. Maecenas
            faucibus blandit ipsum nec maximus. Nulla sodales aliquet elit.
            Fusce aliquam massa quam, eu venenatis augue ultricies in. Morbi sit
            amet mollis nulla, eu sollicitudin sem. Quisque sed tellus non ex
            aliquet malesuada.
          </span>
          <div className="col-span-4">
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
