"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleX = useSpring(scrollYProgress);
  const width = useTransform(scaleX, [0, 0.8], ["0%", "100%"]);

  return (
    <section className="flex flex-col justify-center">
      <div ref={ref} className="flex flex-col self-center justify-center w-max">
        {/* h1 - Border Bottom Will change width from 0-50% then shrink 50-100% with framer */}
        <h1 className="text-5xl font-extrabold pb-5">About Us</h1>
        <motion.div
          className="border-2 border-[#0066b2] rounded-lg"
          style={{ width }}
        ></motion.div>
      </div>

      <div className="px-44 py-16">
        <div className="flex flex-col relative w-52 h-52">
          <Image
            src={"/taher.jpg"}
            alt="team_photo"
            fill
            className="rounded-full shadow-xl cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
