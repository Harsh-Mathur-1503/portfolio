import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#222831] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF2E63] text-[#7B8FA1]'>
                    About 
                </p>
                </div>
                <div>
                </div> 
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>
                            Hi. I am Harsh , nice to meet you . Please take a look around.
                        </p>
                    </div>
                    <div>
                        <p>
                        I am a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript.
                        I am curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.
                        </p>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default About