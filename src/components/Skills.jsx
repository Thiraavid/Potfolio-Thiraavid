import React from "react";
import SkillsProps from "./props/SkillsProps";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import react from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import BootStrap from "../assets/bootstrap.png";
import Node from "../assets/nodejs.png";
import Express from "../assets/express.png";
import PostgreSQL from "../assets/postgreSQL.png";
import Github from "../assets/github.png";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="skills-main h-auto relative top-[70px] m-10 mb-44 max-sm:mb-32 '">
      <motion.h3 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{
  duration:1,
}}} className=" text-lg mb-5 text-[#00c897] uppercase max-sm:text-sm">
        skills
      </motion.h3>
      <motion.h2 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{
  duration:1,
}}} className="text-3xl  font-bold mb-5 max-sm:text-xl">What Can I Do</motion.h2>
      <div className="container h-auto w-full grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 place-items-center ">
        <SkillsProps img={HTML} name="HTML" />
        <SkillsProps img={CSS} name="CSS" />
        <SkillsProps img={JavaScript} name="JavaScript" />
        <SkillsProps img={react} name="React" />
        <SkillsProps img={Tailwind} name="Tailwind" />
        <SkillsProps img={BootStrap} name="BootStrap" />
        <SkillsProps img={Node} name="Node" />
        <SkillsProps img={Express} name="Express" />
        <SkillsProps img={PostgreSQL} name="PostgreSQL" />
        <SkillsProps img={Github} name="Github" />
      </div>
    </div>
  );
};

export default Skills;
