import React from "react";
import Marquee from "react-fast-marquee";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss, SiPostman } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiNpmjsFill, RiReactjsLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const MarqueeSection = () => {
  return (
    <>
      <Marquee gradient={true} gradientColor="black" speed={30}>
        <div className="flex items-center gap-6 px-4 mt-12   text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem]">
          <TiHtml5 className="text-orange-600" />
          <IoLogoCss3 className="text-blue-400" />
          <SiTailwindcss className="text-purple-400" />
          <FaJs className="text-yellow-300" />
          <FaNodeJs className="text-green-500" />
          <RiNpmjsFill className="text-red-600" />
          <RiReactjsLine className="text-blue-400" />
          <FaGitAlt className="text-orange-700" />
          <SiPostman className="text-orange-600" />
          <VscVscode className="text-indigo-500" />
        </div>
      </Marquee>

      <Marquee
        gradient={true}
        direction="right"
        gradientColor="black"
        speed={30}
      >
        <div className="flex items-center gap-6 px-4 mt-6 text-[2.6rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem]">
          <VscVscode className="text-indigo-500" />
          <SiPostman className="text-orange-600" />
          <FaGitAlt className="text-orange-700" />
          <RiReactjsLine className="text-blue-400" />
          <RiNpmjsFill className="text-red-600" />
          <FaNodeJs className="text-green-500" />
          <SiTailwindcss className="text-purple-400" />
          <FaJs className="text-yellow-300" />
          <TiHtml5 className="text-orange-600" />
          <IoLogoCss3 className="text-blue-400" />
        </div>
      </Marquee>
    </>
  );
};

export default MarqueeSection;
