import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Proj1 from "../assets/workImg.jpeg";
import Proj2 from "../assets/realestate.jpg";
import Portfolio from "../assets/WhatsApp Image 2022-11-20 at 11.20.24 PM.jpeg";
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#EAEAEA] bg-[#222831]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF2E63] text-[#7B8FA1]'>
                    Work
                </p>
                <p className='py-6'>
                    /-- Check out my recent works --/ 
                </p>
            </div>
<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
<div className='bg-WorkImg bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover Effects */}
        <div>
            <Image src={Proj1} alt="workImg" className='pt-16' />
            <span className='text-2xl font-bold text-[#EAEAEA] tracking-wider pl-5 flex justify-center items-center'>
                Pet Care Site
            </span>
            <div className='pt-8 text-center'>
                <Link href={"https://github.com/lonewolf1503/happy-paws-project"}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:bg-[#EB455F] hover:text-[#EAEAEA]'>
                        Code
                    </button>
                </Link>
            </div>
        </div>
        
    </div>
    <div className='bg-WorkImg bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover Effects */}
        <div>
            <Image src={Portfolio} alt="workImg" className='pt-16' />
            <span className='text-2xl mt-4 blur-2 font-bold text-[#EAEAEA] tracking-wider pl-5'>
                Hospital Records App
            </span>
            <div className='pt-16 text-center'>
                <Link href={"https://github.com/night-raid-hackin/Hospital_records"}>
                    <button className='text-center rounded-lg px-4 py-3 m-1 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:bg-[#EB455F] hover:text-[#EAEAEA]'>
                        Code
                    </button>
                </Link>
            </div>
        </div>
        
    </div>
    <div className='bg-WorkImg bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* Hover Effects */}
        <div>
            <Image src={Proj2} alt="workImg" className='pt-16' />
            <span className='text-2xl font-bold text-[#EAEAEA] tracking-wider pl-5 flex items-center justify-center'>
                NFT Minting Site
            </span>
            <div className='pt-8 text-center'>
                <Link href={"https://github.com/lonewolf1503/mint-website-react"}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500 hover:bg-[#EB455F] hover:text-[#EAEAEA]'>
                        Code
                    </button>
                </Link>
            </div>
        </div>
        
    </div>
</div>
</div>
</div>
  )
}  

export default Work