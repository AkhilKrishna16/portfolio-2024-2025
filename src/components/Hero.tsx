import React from 'react'

import * as constants from '@/constants'

import Footer from './Footer'

const Hero = () => {
  return (
    <div className='flex flex-col justify-between h-max text-white'>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='max-w-2xl w-full px-4'>
          <div className='flex flex-col gap-3 items-start w-full text-left'>
            <h1 className='text-6xl font-bold'>
              {constants.NAME.toLowerCase().split('').map((char, charIndex) => {
                return <span key={charIndex} className='hover:text-red-400 transition duration-300 cursor-default'>
                  {char}
                </span>
              })}
            </h1>

            <h3 className='text-xl font-medium'>
              {constants.JOB_TITLE}
            </h3>

            <div className='mt-7 w-full text-gray-400 text-[15px]'>
              I build software and ML projects at <span className='text-white text-[15px] underline hover:text-red-400 hover:font-semibold transition duration-300'>UT Austin</span> and explore option trading.
              Currently, I&#8217;m working on ways to improve <span className='text-white text-[15px] underline hover:text-red-400 hover:font-semibold transition duration-300'>Longhorn Lunch</span> and updating the app.

              <br />
              <br />

              In my free time, I like playing chess, going to the gym, and watching NBA games.
            </div>
          </div>
        </div>

    
      </div> 
    </div>
  )
}

export default Hero