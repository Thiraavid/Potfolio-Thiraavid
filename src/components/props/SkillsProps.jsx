import React from "react";
import { motion } from "framer-motion";
const SkillsProps = (props) => {
  return (
    <>
      <motion.div initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0,transition:{
  duration:1,
}}} className="box w-[200px] h-[100px] flex justify-center p-5 items-center rounded-lg shadow-lg  shadow-slate-700 gap-x-10 ">
        <div className="left">
          <img src={props.img} alt={props.name} />
        </div>
        <div className="right text-md font-bold ">
          <h2>{props.name}</h2>
        </div>
      </motion.div>
    </>
  );
};

export default SkillsProps;
