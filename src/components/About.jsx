import React from 'react'

function About() {
  return (
    <div className='text-center p-6  bg-zinc-600 min-h-[100lvh] text-white space-y-4'>
        <h1 className='text-5xl font-bold text-white'>About me</h1>

        <div className='bg-amber-200 p-4 rounded-lg mt-4 lg:w-[50%] mx-auto space-y-4 text-black '>
            <h1 className='bg-zinc-800 text-orange-800 p-[10px] rounded-[10px]'>Academic Background</h1>
            <p className='bg-zinc-800 text-orange-800 p-[10px] rounded-[10px]'>I graduated from Alex- Ekwueme federal university with a B.sc in Computer science and with a second class upper division <br />After my university education, I went ahead to acquire more skills in web development</p>
            <p className='bg-zinc-800 text-orange-800 p-[10px] rounded-[10px]'>Anchorsoft web development training</p>
            
        </div>
        <div className='bg-amber-200 p-4 rounded-lg mt-4 lg:w-[50%] mx-auto space-y-4 text-black '>
            <h1 className='text-5xl font-bold text-white'>Hobbies</h1>
            <p>I love to do the following</p>
            <ul className='bg-zinc-800 text-orange-800 p-[10px] rounded-[10px]'>
                <li>Coding</li>
                <li>Playing games</li>
                <li>adventures</li>
            </ul>
        </div>
        <div className='bg-amber-200 p-4 rounded-lg mt-4 lg:w-[50%] mx-auto space-y-4 text-black '>
            <h1 className='text-5xl font-bold text-white'>Interests</h1>
            <p className='bg-zinc-800 text-orange-800 p-[10px] rounded-[10px]'>I have interests in Game development, cyber security and streaming and money</p>
        </div>
        <div className='bg-amber-200 p-4 rounded-lg mt-4 lg:w-[50%] mx-auto space-y-4 text-black '>
            <h1 className='text-5xl font-bold text-white'>Certification</h1>
            <p className='bg-zinc-800 text-orange-800 p-[10px] rounded-[10px]'>Certificate of completion</p>
        </div>
    </div>
  )
}

export default About