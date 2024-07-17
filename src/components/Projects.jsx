import React from "react";
import ProjectsProps from "./props/ProjectsProps"
import Notes from "../assets/notes.png"
import Todo from "../assets/todo.png"
import Bashala from "../assets/bashala.png"
import { motion } from "framer-motion";

import { FaLink } from "react-icons/fa";
const Projects = () => {
  return (
    <div
      className="h-auto w-auto relative top-[70px] m-10 mb-44 max-sm:mb-32 "
    >
      <motion.h2 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{
  duration:1,
}}} className="text-lg text-[#00c897] max-sm:text-sm mb-5">PROJECTS</motion.h2>
      <motion.h2 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{
  duration:1,
}}} className="font-bold capitalize text-3xl mb-5 max-sm:text-xl">what i’ve built and design</motion.h2>
      <div className="container w-auto h-auto grid grid-cols-2 place-content-center gap-x-10 max-sm:grid-cols-1 max-sm:gap-y-7 gap-y-10 ">
<ProjectsProps 
img={Notes} name="Notes Taking Website" project="Backend Project" link="Click here" icon={<FaLink />} href="https://note-web-application-and-user.onrender.com/"
/>
<ProjectsProps 
img={Todo} name="Todo List Application" project="Backend Project" link="Click here" icon={<FaLink />} href="https://todo-list-ivdk.onrender.com/"
/>
<ProjectsProps 
img={Bashala} name="Bashala Centre of Language Excellence" project="Web Design" 
/>
      </div>
    </div>
  );
};

export default Projects;
