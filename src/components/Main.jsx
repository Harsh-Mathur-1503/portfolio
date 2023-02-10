import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai";

const Main = () => {
  return (
    <div name='home' className = 'w-full h-screen bg-[#222831]'>
    {/* Containers */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-[#FF2E63] text-xl'>Hi, my name is </p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#EEEEEE]'>Harsh Mathur</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#7B8FA1]'>I am a full Stack Developer.</h2>
      <p className='text-[#7B8FA1] py-4 max-w-[700px]'>I am a full stack developer specialized in building websites and digital experiences. Currently , I am focused on building full stack web applications.</p>
      <div>
       <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF2E63] hover:border-[#FF2E63]'>
        View Work 
        <span className='group-hover:rotate-90 duration-300'>
        <AiOutlineArrowRight className='ml-3' />
        </span>
       </button>
      </div>
    </div>


    </div>
  )
}

export default Main