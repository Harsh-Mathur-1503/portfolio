import React,{useState} from 'react';
import {FaBars,FaTimes,FaGithub,FaLinkedin} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from "react-icons/bs"
import Link from 'next/link';
const NavBar = () => {

const[nav , setNav] = useState(false);

const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#222831] text-gray-300'>
    <div>

    </div>


    {/* Menu */}
        <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
        </ul>


    {/* Hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>



    {/* Mobile Menu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#3E4149] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl '>Home</li>
        <li className='py-6 text-4xl '>About</li>
        <li className='py-6 text-4xl '>Skills</li>
        <li className='py-6 text-4xl '>Work</li>
        <li className='py-6 text-4xl '>Contact</li>   
    </ul>



    {/* Social Icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
      <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 hover:bg-blue-900'>
          <Link href="/" className='flex justify-between items-center w-full text-gray-300
          '>
          LinkedIn<FaLinkedin size={30} />
          </Link>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] hover:bg-black'>
          <Link href="/" className='flex justify-between items-center w-full text-gray-300
          '>
          Github<FaGithub size={30} />
          </Link>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#57ccb3] hover:bg-green-600'>
          <Link href="/" className='flex justify-between items-center w-full text-gray-300
          '>
          Email<HiOutlineMail size={30} />
          </Link>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] hover:bg-slate-800'>
          <Link href="/" className='flex justify-between items-center w-full text-gray-300
          '>
         Resume<BsFillPersonLinesFill size={30} />
          </Link>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default NavBar;