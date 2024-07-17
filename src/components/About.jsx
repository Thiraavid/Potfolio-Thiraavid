import React from 'react'
import { Link } from 'react-scroll'
import Aboutpage from '../assets/about.jpg'
import { motion } from 'framer-motion'
const About = () => {
  
  return (
    <div className=' about-main h-auto relative top-[70px] m-10 mb-44 max-sm:mb-24'>
<motion.h3 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{
  duration:1
}}} className='text-[#00c897] text-lg mb-5 uppercase max-sm:text-sm' >About</motion.h3>
<motion.h2 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{
  duration:1
}}}  className='font-bold capitalize text-3xl mb-5 max-sm:text-xl'>who i am</motion.h2>
<div className="container max-w-auto h-auto flex justify-center items-start max-sm:flex-col-reverse">
<div className="content flex justify-center items-start flex-col gap-y-5 ">
  <motion.p initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{
  duration:1,
}}} className='text-sm text-[#515151] mr-10 max-sm:text-[12px]'>I specialize in building mobile responsive front-end UI applications that connect with APIs and other backend technologies. I am passionate about learning new technologies and understand that there are multiple ways to accomplish a task. While I am most proficient in building front-end applications using HTML, CSS, JavaScript, and React, I also have experience with Tailwind CSS and Bootstrap for styling. On the backend, I work with Node.js and Express.js to create robust server-side applications and utilize PostgreSQL for database management. Additionally, I design user interfaces in Figma to ensure a seamless user experience. I am a quick learner and can adapt to new tech stacks as needed. I believe that being a great developer means not just using one specific language but choosing the best tool for the job.</motion.p>
<motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{
  duration:1,
}}} >
<Link className='underline text-sm text-[#00c897] cursor-pointer max-sm:text-[12px]' to='projects' smooth={true}>Check out some of my latest projects.</Link></motion.div>
</div>
<div className="img">
  <motion.img initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1,transition:{
  duration:1
}}}  src={Aboutpage} alt="about-img" className='w-[150rem] rounded-md max-sm:hidden' />
</div>
</div>
    </div>
  )
}

export default About