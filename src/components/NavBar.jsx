import React,{useState} from 'react';
import Image from 'next/image';
import Logo from "../assets/logo.jpeg";
import {FaBars,FaTimes,FaGithub,FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from "react-icons/bs"
import { Element, Link } from 'react-scroll'

const NavBar = () => {

const[nav , setNav] = useState(false);

const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#222831] text-gray-300'>
    <div>
      <Image className='hidden md:flex' alt='logo img' src={Logo} style={{width:'160px'}}/>
    </div>


    {/* Menu */}
        <ul className='hidden md:flex'>
        <li><Link className='hover:border-b-2 hover:border-[#EB455F]' href={"./Main.jsx"} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li> <Link className='hover:border-b-2 hover:border-[#EB455F]' href={"./About.jsx"} to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li> <Link className='hover:border-b-2 hover:border-[#EB455F]' href={"./Skills.jsx"} to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        <li> <Link className='hover:border-b-2 hover:border-[#EB455F]' href={"./Work.jsx"} to="work" smooth={true} duration={500}>
          Work
        </Link></li>
        <li> <Link className='hover:border-b-2 hover:border-[#EB455F]' href={"./Contact.jsx"} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>
        </ul>


    {/* Hamburger */}
    <div onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>



    {/* Mobile Menu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#3E4149] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl '><Link onClick={handleClick} href={"./Main.jsx"} to="home" smooth={true} duration={500}>
          Home
        </Link></li>
        <li className='py-6 text-4xl '><Link onClick={handleClick} href={"./About.jsx"} to="about" smooth={true} duration={500}>
          About
        </Link></li>
        <li className='py-6 text-4xl '><Link onClick={handleClick} href={"./Skills.jsx"} to="skills" smooth={true} duration={500}>
          Skills
        </Link></li>
        <li className='py-6 text-4xl '><Link onClick={handleClick} href={"./Work.jsx"} to="work" smooth={true} duration={500}>
          Work
        </Link></li>
        <li className='py-6 text-4xl '><Link onClick={handleClick} href={"./Contact.jsx"} to="contact" smooth={true} duration={500}>
          Contact
        </Link></li>   
    </ul>



    {/* Social Icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 hover:bg-blue-900'>
          <a href="https://www.linkedin.com/in/harsh-mathur-88462722a/" className='flex justify-between items-center w-full text-gray-300
          '>
          LinkedIn<FaLinkedin size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] hover:bg-black'>
          <a href="https://github.com/Harsh-Mathur-1503" className='flex justify-between items-center w-full text-gray-300
          '>
          Github<FaGithub size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#57ccb3] hover:bg-green-600'>
          <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new" className='flex justify-between items-center w-full text-gray-300
          '>
          Email<HiOutlineMail size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] hover:bg-slate-800'>
          <a href="" className="flex justify-between items-center w-full text-gray-300">
         Resume<BsFillPersonLinesFill size={30} />
         </a>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default NavBar;
