import React from "react";
import ShinyText from "../gsap/ShinyText";

const Footer = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col justify-between px-4 sm:px-8 py-6 sm:py-10 bg-no-repeat bg-cover bg-center"
    style={{  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), rgba(0,0,0,0.2), rgba(0,0,0,0)), url('/bg.svg')` }}
    >
      {/* Centered Thank You Section */}
      <div className="flex items-center justify-center relative mt-16 sm:mt-20 mb-20 sm:mb-32 text-center">
        <h1 className="text-[14vw] sm:text-[10vw] lg:text-[10vw] font-extrabold tracking-tight select-none">
          <ShinyText
            text="thankyou"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </h1>

        <h2 className="absolute top-full sm:top-1/2 translate-y-4 sm:-translate-y-1/2 text-red-500 text-4xl sm:text-5xl md:text-6xl font-myfont select-none">
          Vishal <span className="ml-2">sharma</span>
        </h2>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm sm:text-base text-center place-items-center">
        <p className="hover:-translate-y-1 transition-transform hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]  duration-300">
          <a
            href="https://www.linkedin.com/in/vishal-sharma-9a56a52bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </p>
        <p className="hover:-translate-y-1 transition-transform hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]  duration-300">
          <a
            href="https://github.com/Vishal-sharmak7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
        <p className="hover:-translate-y-1 transition-transform hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]  duration-300">
          Ghaziabad, India
        </p>
        <p className="hover:-translate-y-1 transition-transform hover:scale-105 break-all hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]  duration-300">
          <a href="mailto:vishalsharmak7@gmail.com">vishalsharmak7@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
