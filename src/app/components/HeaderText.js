"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

const HeaderText = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  //   const scaleX = useSpring(scrollYProgress);
  // const width = useTransform(scaleX, [0, 0.8], ["0%", "100%"]);
  const width = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <div ref={ref} className="flex flex-col self-center justify-center w-max">
      {/* h1 - Border Bottom Will change width from 0-50% then shrink 50-100% with framer */}
      <h1 className="text-5xl font-extrabold pb-5">{text}</h1>
      <motion.div
        className="border-2 border-[#0066b2] rounded-lg"
        style={{ width }}
      ></motion.div>
    </div>
  );
};

export default HeaderText;
