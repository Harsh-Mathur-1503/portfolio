import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#222831] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/26a42f1e-dcd3-41a3-b825-8ad3eda979ef" className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF2E63] text-[#7B8FA1]'>
                    Contact Me
                </p>
                <p className='text-[#EAEAEA] py-4'>/- Submit the form below or shoot me an Email -  harshmathur0315@gmail.com -/</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='bg-[#444F5A] p-2 rounded-md text-[#FCFFE7]' />
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#444F5A] rounded-md text-[#FCFFE7]' />
            <textarea name="message" id="" cols="30" placeholder='Message' rows="10" className='bg-[#444F5A] p-2 rounded-md text-[#FCFFE7]'></textarea>
            <button className='text-white border-2 hover:bg-[#FF2E63] hover:border-[#FF2E63] px-4 py-3 my-8 mx-auto rounded-md flex items-center hover:scale-110 duration-500'>Lets Connect</button>
        </form>
    </div>
  )
}

export default Contact