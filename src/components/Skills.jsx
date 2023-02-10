import React from 'react'
import Image from 'next/image';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Next from "../../public/favicon.ico"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#222831] text-[#EAEAEA]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#FF2E63] text-[#7B8FA1]'>
                Skills
            </p>
            <p className='py-4'>
                /-- These are the technologies i have worked with  --/
            </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#161515] hover:scale-110 duration-500'>
                <Image className='w-20 mx-auto' src={HTML} alt='html' />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#161515] hover:scale-110 duration-500'>
                <Image className='w-20 mx-auto' src={CSS} alt='html' />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#161515] hover:scale-110 duration-500'>
                <Image className='w-20 mx-auto' src={JavaScript} alt='html' />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#161515] hover:scale-110 duration-500'>
                <Image className='w-20 mx-auto' src={ReactImg} alt='html' />
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#161515] hover:scale-110 duration-500'>
                <Image className='w-20 mx-auto' src={Github} alt='html' />
                <p className='my-4'>GitHub</p>
            </div>
            <div className='shadow-md shadow-[#161515] hover:scale-110 duration-500'>
                <Image className='w-20 mx-auto' src={Tailwind} alt='html' />
                <p className='my-4'>TailwindCSS</p>
            </div>
            <div className='shadow-md shadow-[#161515] hover:scale-110 duration-500'>
                <Image className='w-20 mx-auto' src={Next} alt='html' />
                <p className='my-4'>Next</p>
            </div>
            <div className='shadow-md shadow-[#161515] hover:scale-110 duration-500'>
                <Image className='w-20 mx-auto' src={Mongo} alt='html' />
                <p className='my-4'>Mongo</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills