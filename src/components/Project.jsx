import React from "react";
import ShinyText from "../gsap/ShinyText";
import GlareHover from "./GlareHover";
import p1 from "../../public/p1.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";
import TiltedCard from "../Framer/TiltedCard";

const projectList = [
  {
    id: 1,
    title: <ShinyText text="Bands" disabled={false} speed={3} className="custom-class" />,
    img: (
      <TiltedCard
        imageSrc={p1}
        altText=""
        captionText="Bands"
        containerHeight="200px"
        containerWidth="200px"
        imageHeight="200px"
        imageWidth="380px"
        rotateAmplitude={12}
        scaleOnHover={0.9}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      />
    ),
    description:
      "Designed and developed a full-stack web application for booking concert tickets and purchasing band merchandise.",
    github: (
      <a href="https://github.com/Vishal-sharmak7/Bands" target="_blank" rel="noopener noreferrer">
        <ShinyText text="Github" disabled={false} speed={3} className="custom-class" />
      </a>
    ),
    website: (
      <a href="https://bands-u4a2.vercel.app/" target="_blank" rel="noopener noreferrer">
        <ShinyText text="Website" disabled={false} speed={3} className="custom-class" />
      </a>
    ),
  },
  {
    id: 2,
    title: <ShinyText text="Promptly" disabled={false} speed={3} className="custom-class" />,
    img: (
      <TiltedCard
        imageSrc={p2}
        altText=""
        captionText="Promptly"
        containerHeight="200px"
        containerWidth="200px"
        imageHeight="200px"
        imageWidth="380px"
        rotateAmplitude={12}
        scaleOnHover={0.9}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      />
    ),
    description:
      "Developed a responsive, Gemini-style AI Chat App with real-time prompts and user interactions.",
    github: (
      <a href="https://github.com/Vishal-sharmak7/Promptly" target="_blank" rel="noopener noreferrer">
        <ShinyText text="Github" disabled={false} speed={3} className="custom-class" />
      </a>
    ),
    website: (
      <a href="https://promptly-two-peach.vercel.app/" target="_blank" rel="noopener noreferrer">
        <ShinyText text="Website" disabled={false} speed={3} className="custom-class" />
      </a>
    ),
  },
  {
    id: 3,
    title: <ShinyText text="IntruderSec" disabled={false} speed={3} className="custom-class" />,
    img: (
      <TiltedCard
        imageSrc={p3}
        altText=""
        captionText="IntruderSec"
        containerHeight="200px"
        containerWidth="200px"
        imageHeight="200px"
        imageWidth="380px"
        rotateAmplitude={12}
        scaleOnHover={0.9}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
      />
    ),
    description:
      "Master Cyber Security from Scratch. Learn ethical hacking, threat analysis, and digital defense with real-world projects.",
    github: (
      <a href="https://github.com/Vishal-sharmak7/Intrudersec" target="_blank" rel="noopener noreferrer">
        <ShinyText text="Github" disabled={false} speed={3} className="custom-class" />
      </a>
    ),
    website: (
      <a href="https://www.intrudersec.in/" target="_blank" rel="noopener noreferrer">
        <ShinyText text="Website" disabled={false} speed={3} className="custom-class" />
      </a>
    ),
  },
];

const Project = () => {
  return (
    <div className="bg-black text-white px-4 sm:px-6 md:px-10 py-10">
      <h1 className="text-center text-[10vw] sm:text-[8vw] lg:text-8xl font-extrabold tracking-tight select-none mb-16">
        <ShinyText text="projects" disabled={false} speed={3} className="custom-class" />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectList.map((project) => (
          <div key={project.id} className="w-full flex justify-center">
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
            >
              <div className="max-w-[480px] w-full p-6 flex flex-col items-center justify-evenly shadow-lg h-[500px] rounded-xl border border-white/10 backdrop-blur-sm bg-white/5">
                <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-2">{project.title}</h2>

                <div className="mb-4">{project.img}</div>

                <p className="text-sm text-center text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-4 py-2 rounded-3xl border-2 border-white hover:border-gray-400 hover:drop-shadow-[0_0_10px_rgba(239,32,235,1)] transition duration-300">
                    {project.github}
                  </button>
                  <button className="px-4 py-2 rounded-3xl border-2 border-white hover:border-gray-400 hover:drop-shadow-[0_0_10px_rgba(239,32,235,1)] transition duration-300">
                    {project.website}
                  </button>
                </div>
              </div>
            </GlareHover>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
