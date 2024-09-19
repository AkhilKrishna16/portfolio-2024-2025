import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { FaXTwitter, FaGithub } from 'react-icons/fa6'
import { MdArrowOutward } from 'react-icons/md'

import Link from 'next/link'


const Footer = () => {
  return (
    <div className='flex flex-row justify-evenly items-center mb-20 w-full'>
      <Link href='https://www.linkedin.com/in/akhil-krishnamurthy/' rel='noopener noreferrer' target='__blank'>
        <Avatar className='hover:shadow-red-400 hover:shadow-lg transition duration-300'>
          <AvatarImage src='/profile-img.jpeg'/>
          <AvatarFallback>Me!</AvatarFallback>
        </Avatar>
      </Link>

      <Link href='https://x.com/AkhilKrish70600' rel='noopener noreferrer' target='__blank'>
        <FaXTwitter className='text-white w-[24px] h-[24px] hover:text-red-400 transition duration-300' />
      </Link>

      <Link href='https://github.com/AkhilKrishna16' rel='noopener noreferrer' target='__blank'>
        <FaGithub className='text-white w-[24px] h-[24px] hover:text-red-400 transition duration-300'/>
      </Link>

      <Link href='/Akhil_Krishnamurthy_UT_Austin_Resume_2028.pdf' rel='noreferrer noopener' target='__blank'>
        <button className='relative rounded-md text-black border-none bg-white px-3 py-2 overflow-hidden group'>
          <span className='relative z-10 font-semibold group-hover:text-white transition-colors duration-500 flex flex-row items-center'>
            Resume
            <MdArrowOutward className='ml-2 '/>
          </span>
          <div className='absolute inset-0 bg-red-400 translate-y-[90%] group-hover:translate-y-0 transition-transform duration-500 ease-out'></div>
        </button>
      </Link>
    </div>
  )
}

export default Footer