import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface ExperienceProps {
  experience_name: string,
  experience_skills: string[],
  experience_description: string,
  experience_image: string,
  experience_link: string,
}

const Experience = ({experience_name, experience_skills, experience_description, experience_image, experience_link}: ExperienceProps) => {
  return (
    <Link href={experience_link} rel='noreferrer noopener' target='__blank' className='bg-tab-color border-none w-3/4 flex flex-row items-center justify-between h-40 px-4 my-2 hover:scale-110 transition-all duration-300'>
      <div className='left-side flex flex-col justify-between h-full py-2'>
        <div className='experience_header flex flex-col text-left'>
          <h2 className='text-white font-medium text-2xl'>
            {experience_name.toLowerCase().split('').map((char, charIndex) => {
              return <span key={charIndex} className='hover:text-red-400 transition-all duration-200 cursor-default'>
                {char}
              </span>
            })}
          </h2>

          <div className='flex flex-row gap-1 mt-1'>
            {experience_skills.map((value, index) => {
                return <div key={index} className='text-xs tracking-[.20em] text-white'>{value.toUpperCase()} {index !== experience_skills.length - 1 ? ' | ' : ''}</div>
              })}
          </div>
            
        </div>

        <div className='experience_description text-sm mt-auto text-gray-400 mb-4'>
          {experience_description}
        </div>
      </div>

      <div className='right-side w-1/2 h-full flex items-center justify-end'>
        <div className=''>
          <Image alt={`${experience_name}_media`} src={experience_image} width={150} height={150} className={`${experience_image !== '' ? '': 'hidden'}`} objectFit='contain'/>
        </div>
        
      </div>
    </Link>
      
  )
}

export default Experience