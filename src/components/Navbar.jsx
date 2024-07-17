import React, { useState } from "react";
import MST from "../assets/mst.png";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";



const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [navbar,setNavbar] = useState(false);
  const menuVariants={
    hidden:{
      x:'100%'
    },
show:
{
  x:0,
  transition:{
    ease:[0.6,0.01,-0.05,0.9]
  }
}
  }


  const changeBackground = () => {
    if (window.scrollY > 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <motion.nav initial={{opacity:0,y:-100}} animate={{opacity:1,y:0,transition:{
        duration: 0.7
      }}}  className={navbar?" z-40 justify-between fixed top-0 max-h-[70px] w-full flex items-center bg-[#f2ecff] shadow-md shadow-gray-600 ":" z-40 justify-between fixed top-0 max-h-[70px] w-full flex items-center bg-[#f2ecff] "}>
        <img src={MST} alt="Main-logo" className="w-[120px] h-[80px] " />
        <ul className=" justify-center items-center gap-x-10 mr-12 hidden lg:flex text-md font-semibold capitalize ">
        <li className="cursor-pointer ">
            <Link to="home" className="hover:underline" smooth={true}>Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link className="menu-items hover:underline" to="about" smooth={true}>About</Link>
          </li>
          <li className="cursor-pointer">
            <Link className="menu-items hover:underline" to="skills" smooth={true}>Skills</Link>
          </li>
          <li className="cursor-pointer">
            <Link className="menu-items hover:underline" to="projects" smooth={true}>Projects</Link>
          </li>
          <li className="cursor-pointer">
            <Link className="menu-items hover:underline" to="contact" smooth={true}>Contact</Link>
          </li>
        </ul>

        <div
          className="mobile-menu text-2xl mr-5 z-20 flex lg:hidden "
          onClick={() => setMenu(!menu)}
        >
          {/* <IoMenu />
<MdOutlineCancel /> */}
          {!menu ? <IoMenu /> : <MdOutlineCancel />}
        </div>
        <motion.div variants={menuVariants}
        initial="hidden"
        animate={menu?'show':'h'} 
          className={
            !menu
              ? "container bg-[#f2ecff] absolute top-0 right-0 max-w-[250px] h-screen hidden"
              : "container bg-[#f2ecff] absolute top-0 right-0 max-w-[250px] h-screen drop-shadow-2xl shadow-black lg:hidden "
          }
        >
          <ul className=" flex flex-col text-black justify-center items-center h-screen gap-y-10 text-lg font-bold capitalize ">
          <li className="cursor-pointer ">
            <Link className="menu-items" to="home" smooth={true}>Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link className="menu-items" to="about" smooth={true}>About</Link>
          </li>
          <li className="cursor-pointer">
            <Link className="menu-items" to="skills" smooth={true}>Skills</Link>
          </li>
          <li className="cursor-pointer">
            <Link className="menu-items" to="projects" smooth={true}>Projects</Link>
          </li>
          <li className="cursor-pointer">
            <Link className="menu-items" to="contact" smooth={true}>Contact</Link>
          </li>
          </ul>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
