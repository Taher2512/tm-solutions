"use client";

import Image from "next/image";
import React, { useState } from "react";

const Nav = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    //bg-[#B9D9EB] bg-opacity-50
    <nav className="bg-opacity-25 backdrop-blur-md fixed w-screen z-20 top-0 left-0 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <div className="relative h-10 w-10 mr-3">
            <Image src="/logos/logo2.png" alt="Logo" fill />
          </div>
          <span className="self-center font-bold text-3xl whitespace-nowrap text-[#002D62]">
            TM Solutions
          </span>
        </a>
        <div className="flex">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#002D62] rounded-lg md:hidden hover:bg-[#002D62] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#002D62]"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setCollapsed(!collapsed)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLineCap="round"
                strokeLineJoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
          hidden={collapsed}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-md bg-[#0066b2] md:bg-transparent font-medium border md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li onClick={() => setCollapsed(true)}>
              <a
                href="#about"
                className="block py-2 pl-3 pr-4 text-lg text-white md:text-[#002D62] font-semibold hover:bg-[#88f1ff] hover:text-[#0066b2] rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                About
              </a>
            </li>
            <li onClick={() => setCollapsed(true)}>
              <a
                href="#portfolio"
                className="block py-2 pl-3 pr-4 text-lg text-white md:text-[#002D62] font-semibold hover:bg-[#88f1ff] hover:text-[#0066b2] rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Portfolio
              </a>
            </li>
            <li onClick={() => setCollapsed(true)}>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 text-lg text-white md:text-[#002D62] font-semibold hover:bg-[#88f1ff] hover:text-[#0066b2] md:bg-transparent rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
