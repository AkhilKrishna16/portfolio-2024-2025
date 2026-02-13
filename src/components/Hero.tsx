import React from "react";

import * as constants from "@/constants";

import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between h-max text-white">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="max-w-2xl lg:max-w-[420px] w-full px-4">
          <div className="flex flex-col gap-3 items-start w-full text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold">
              {constants.NAME.toLowerCase()
                .split("")
                .map((char, charIndex) => {
                  return (
                    <span
                      key={charIndex}
                      className="hover:text-red-400 transition duration-300 cursor-default"
                    >
                      {char}
                    </span>
                  );
                })}
            </h1>

            <h3 className="text-xl font-medium">{constants.JOB_TITLE}</h3>

            <div className="mt-7 w-full text-gray-400 text-[15px]">
              I build software and ML projects at{" "}
              <span className="text-white text-[15px] underline hover:text-orange-400 hover:font-semibold transition duration-300">
                UT Austin
              </span>{" "}
              and explore HPC (high-performance computing). Currently, I&#8217;m
              working on ways to improve my{" "}
              <span className="text-white text-[15px] underline hover:text-red-400 hover:font-semibold transition duration-300">
                Mandelbrot Set Generator
              </span>
              {"."}
              <br />
              <br />
              In my free time, I like playing poker, going to the gym, and
              watching the New England Patriots.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
