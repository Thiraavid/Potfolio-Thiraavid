import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";

const locomotiveScroll = new LocomotiveScroll();

const App = () => {
 
  return (
    <>
      
      <section>
        <Navbar />
      </section>
      <section name="home">
        <Hero />
      </section>
      <section name="about">
        <About />
      </section>
      <section name="skills">
        <Skills />
      </section>
      <section name="projects">
        <Projects />
      </section>
      <section name="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
