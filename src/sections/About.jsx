"use client";

import {
  aboutMeDescription,
  aboutMeTitle,
  collaborationTitle,
  locationDescription,
  locationTitle,
  skillsDescription,
  skillsTitle,
  techPrinciplesCards,
  techPrinciplesTitle,
} from "../constants/index.js";
import Card from "../components/Card.jsx";
import { useRef } from "react";
import { Globe } from "../components/Globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import Frameworks from "../components/Frameworks.jsx";
import DownloadCVButton from "../components/DownloadPdfButton.jsx";

const About = () => {
  const grid2Container = useRef(null);

  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="/assets/coding-pov.png"
            alt="Coding Pov"
            className="absolute scale-[1.75] left-[5rem] bottom-[1rem] md:scale-[3] md:left-[50] md:inset-y-10 lg:scale-[3.5] brightness-80"
          />
          <div className="z-10">
            <p className="headtext">{aboutMeTitle}</p>
            <p className="subtext">{aboutMeDescription}</p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none bottom-0 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex justify-center items-center text-3xl text-gray-500">
              {techPrinciplesTitle}
            </p>
            {techPrinciplesCards.map(({ style, text, image }, index) => (
              <Card
                key={index}
                classes={style}
                text={text}
                image={image}
                containerRef={grid2Container}
              />
            ))}
          </div>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">{locationTitle}</p>
            <p className="subtext">{locationDescription}</p>
          </div>
          <figure className="absolute left-[30%] top-[0%]">
            <Globe />
          </figure>
        </div>
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtest">{collaborationTitle}</p>
            <CopyEmailButton />
          </div>
        </div>
        <div className="grid-default-color grid-5">
          <div className="relative z-10 sm:w-[50%]">
            <p className="headtext text-shadow-lg text-shadow-indigo">
              {skillsTitle}
            </p>
            <p className="subtext text-shadow-lg text-shadow-indigo">
              {skillsDescription}
            </p>
            <DownloadCVButton />
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[60%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
