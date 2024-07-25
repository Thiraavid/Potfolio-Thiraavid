import React from "react";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { motion } from "framer-motion";

import { Link } from "react-scroll";
const Hero = () => {

  return (
    <>
      <div className=" hero-wrapper flex justify-center items-center flex-col text-center w-auto h-[90vh] max-sm:m-10 gap-y-7 max-sm:h-auto max-sm:relative max-sm:top-[70px] max-sm:mb-24  ">
        <motion.h2 initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0,transition:{
          duration:0.5,delay:1
        }}} className="text-sm text-[#908E90] max-sm:text-[12px] ">
          LET'S BUILD SOMETHING TOGETHER
        </motion.h2>

        <motion.h1 initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0,transition:{
          duration:0.5,delay:1.7
        }}} className="font-bold text-5xl max-sm:text-2xl ">
          Hi, I'm &nbsp;
          <span className="text-[#00c897]">
            <ReactTyped
              strings={["Thiraavid"]}
              typeSpeed={200}
              backSpeed={200}
              loop
            ></ReactTyped>
          </span>{" "}
          <br />
          A Full-Stack Web Developer <br /> and Web Designer
        </motion.h1>
        <motion.p initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0,transition:{
          duration:0.5,delay:2
        }}} className="text-sm text-[#908E90] max-sm:text-[12px]">
          I’m focused on building responsive front-end web applications
          integrating back-end technologies.
        </motion.p>
        <div className="hero-icons flex justify-center items-center gap-x-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="linkedin w-20 h-20 bg-[#f2ecff] shadow-lg text-2xl text-[#02c595] shadow-slate-800 rounded-full flex justify-center items-center "
          >
            <a href="https://www.linkedin.com/in/thiraavid-ms-80332827b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHJh5rWQhTR%2BAwyrT0qF7fg%3D%3D">
              <FaLinkedin />
            </a>
          </motion.div>
          <motion.div    initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} className="github w-20 h-20 bg-[#f2ecff] shadow-lg text-2xl text-[#02c595] shadow-slate-800 rounded-full flex justify-center items-center">
            <a href="https://github.com/Thiraavid">
              <FaGithub />
            </a>
          </motion.div>
          <motion.div    initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} className="contact w-20 h-20 bg-[#f2ecff] shadow-lg text-2xl text-[#02c595] shadow-slate-800 rounded-full flex justify-center items-center">
            <Link className="cursor-pointer" to="contact" smooth={true}>
              {" "}
              <IoIosContact />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
