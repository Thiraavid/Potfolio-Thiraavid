import React from 'react'
import { Form } from 'react-router-dom'
import { motion } from 'framer-motion'


const ProjectsProps = (props) => {
  return (
    <>
    <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1,transition:{
  duration:1
}}}  className="box  h-auto w-auto bg-[#f2ecff] flex justify-center items-center flex-col   pt-5 shadow-md shadow-slate-700 rounded-lg px-3">
      <img src={props.img} alt={props.name}  className='w-[40rem] mb-5 rounded-lg shadow-md shadow-slate-700 '/>
      <div className="content flex justify-center items-center flex-col gap-y-5 ">
        <h3 className='capitalize text-md'>{props.name}</h3>
        <div className="content-bottom flex justify-center items-center gap-x-10 mb-5">
          <h3 className='text-sm text-[#908E90] capitalize'>{props.project}</h3>
          <a href={props.href} className='text-[#00c997] underline text-sm flex justify-center items-center gap-x-2'>{props.link} {props.icon}</a>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default ProjectsProps