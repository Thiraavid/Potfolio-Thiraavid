import React from 'react'
import contact from "../assets/contact.jpg"
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <div className='hero-main relative top-[70px] h-auto m-10 w-auto'>
      <motion.h3 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{
  duration:1
}}} className='text-[#00c897] text-lg mb-5 uppercase max-sm:text-sm' >Contact</motion.h3>
      <motion.h2 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{
  duration:1
}}} className='font-bold capitalize text-3xl mb-5 max-sm:text-xl'>get in touch</motion.h2>
      <motion.div className="container flex justify-center items-center max-sm:flex-col gap-y-3 gap-x-10 ">
        <motion.div  initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1,transition:{
  duration:1
}}} className="left flex justify-center items-start flex-col gap-y-5 bg-[#f2ecff] shadow-md shadow-gray-700 p-5 rounded-lg w-[1000px] max-sm:w-auto  ">
<motion.img initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1,transition:{
  duration:1
}}} src={contact} alt="contact-img" className='rounded-lg' />
<motion.h2 initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0,transition:{
          duration:0.5,delay:1
        }}} className='font-bold text-xl'>THIRAAVID MS</motion.h2>
<motion.h3 initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0,transition:{
          duration:0.5,delay:1
        }}} className='font-semibold'>Full-Stack Developer and Web Designer</motion.h3>
<motion.p initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0,transition:{
          duration:0.5,delay:1
        }}} className='text-sm text-[#908E90]'>I am available for freelance or full-time positions. Contact me and let's talk.</motion.p>
<motion.h3 initial={{opacity:0,y:10}}
        animate={{opacity:1,y:0,transition:{
          duration:0.5,delay:1
        }}} className='text-[#00c897]'>CONNECT WITH ME</motion.h3>
<div className="contact-icons flex justify-center items-center gap-x-10 w-full  ">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
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
          <motion.div  initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} className="github w-20 h-20 bg-[#f2ecff] shadow-lg text-2xl text-[#02c595] shadow-slate-800 rounded-full flex justify-center items-center">
            <a href="https://github.com/Thiraavid">
              <FaGithub />
            </a>
          </motion.div>
          <motion.div  initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }} className="contact w-20 h-20 bg-[#f2ecff] shadow-lg text-2xl text-[#02c595] shadow-slate-800 rounded-full flex justify-center items-center">
          
            <Link className="cursor-pointer" to="contact" smooth={true}>   <IoIosContact /></Link>
          </motion.div>
        </div>
        </motion.div>
        <motion.div initial={{opacity:0,x:100,}} whileInView={{opacity:1,x:0,transition:{
  duration:1
}}} className="right bg-[#f2ecff] shadow-md shadow-slate-700 w-full h-auto p-5 rounded-lg m-24 ">
<form action="https://getform.io/f/bkkgnzlb" method='POST' className='flex justify-center items-start flex-col w-full h-auto uppercase text-sm gap-y-4'>
  <div className="name-ph flex justify-center items-start  gap-x-4 max-sm:flex-col w-full gap-y-8">
<div className="name space-y-3 flex justify-center items-start flex-col w-full ">
  <h2>name</h2>
  <input type="text" name="name"  className='max-sm:w-full rounded-md p-3' />
</div>
<div className="ph space-y-3  flex justify-center items-start flex-col w-full">
  <h2>Phone number</h2>
  <input type="number" name="number"  className='w-full rounded-md p-3'  />
</div>
  </div>
  <div className="email space-y-3 flex justify-center items-start flex-col w-full">
    <h2>email</h2>
    <input type="email" name="email"  className='w-full rounded-md p-3'  />
  </div>
  <div className="subject space-y-3  flex justify-center items-start flex-col w-full ">
    <h2>subject</h2>
    <input type="text" name="subject"  className='w-full rounded-md p-3' />
  </div>
  <div className="message space-y-3  flex justify-center items-start flex-col w-full">
    <h2>message</h2>
    <textarea name="message"  cols="30" rows="10" className='w-full rounded-md'></textarea>
  </div>
  <div className="submit flex justify-center items-start flex-col w-full font-bold text-lg ">
    <input type="submit"  value="submit" className='w-full p-3 rounded-md uppercase cursor-pointer text-white bg-[#00c897]' />
  </div>
</form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact