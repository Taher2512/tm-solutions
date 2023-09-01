"use client";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  const text = "Unleashing Digital Potential By Crafting High-Converting Apps";

  const ctrls = useAnimation();

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  useEffect(() => {
    setLoading(false);
    ctrls.start("visible");
  }, []);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center align-middle justify-center md:justify-between mb-12 px-0 md:px-10 pt-24 md:pt-0 min-h-screen">
      {loading && (
        <div className="absolute h-full w-full flex items-center justify-center">
          <div className="relative h-20 w-20">
            <Image src="/images/loading.svg" alt="Loading..." fill />
          </div>
        </div>
      )}
      <motion.div className="mx-10 mt-7 pb-10 md:pb-0 text-center md:text-left">
        {text.split(" ").map((word, wordIndex) => {
          return (
            <motion.span
              aria-hidden="true"
              key={wordIndex}
              initial="hidden"
              animate={ctrls}
              variants={wordAnimation}
              transition={{
                delayChildren: wordIndex * 0.25,
                staggerChildren: 0.05,
              }}
              className="text-[#002D62] text-3xl md:text-6xl font-extrabold leading-snug text-center md:text-left md:mt-0 inline-block whitespace-pre-wrap"
            >
              {word.split("").map((character, charIndex) => {
                return (
                  <motion.span
                    aria-hidden="true"
                    key={charIndex}
                    variants={characterAnimation}
                    className="inline-block"
                  >
                    {character}
                  </motion.span>
                );
              })}
              {wordIndex < text.split(" ").length - 1 && " "}
            </motion.span>
          );
        })}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center mt-12 md:mt-10 h-16"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
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
        </motion.div>
      </motion.div>
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
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
                src={"/profile/mustafa2.jpeg"}
                alt="team_photo"
                fill
                className="rounded-full shadow-xl cursor-pointer -ml-4 border-4 border-[#002D62]"
              />
            </Link>
          </div>
          <span className="-ml-8 mt-4 font-bold text-xl">Mustafa</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
