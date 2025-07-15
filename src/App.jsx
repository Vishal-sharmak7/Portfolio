import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PortfolioHero from "./PortfolioHero";
import MagicBento from "./gsap/MagicBento";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import MarqueeSection from "./components/Marquee";
import Project from "./components/Project";

function App() {
  

  return (
    <BrowserRouter>
      {/* If you plan to use <Routes> and <Route> later, it should be here */}
      <PortfolioHero />

      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={true}
        spotlightRadius={600}
        particleCount={12}
        glowColor="132, 0, 255"
      />
      
      <Project/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
