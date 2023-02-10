import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";
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
<div>
    <div>
        <div>
            <span>

            </span>
            <div>
                <Link href={"/"}>
                    <button>
                        
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