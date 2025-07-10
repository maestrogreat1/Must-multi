import React, { useState } from "react";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";
import Title from "../Components/Title/Title";
import Videoplayer from "../Components/Videoplayer/Videoplayer";

const HomePage = () => {
    const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Hero />
      <About setPlayState={setPlayState} />
        <Title subTitle="OUR SERVICES" title="what we offer" />
        <Services />
        <Title subTitle="Let us talk about" title="Getting you that loan" />

        <Contact />
      <div className="container">
        
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default HomePage
