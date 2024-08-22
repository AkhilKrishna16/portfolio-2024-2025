import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  project_name: string,
  project_skills: string[],
  project_description: string,
  project_image: string,
  project_link: string,
}

const Project = ({project_name, project_skills, project_description, project_image, project_link}: ProjectProps) => {
  return (
    
    <Link href={project_link} target='__blank' rel='noreferrer noopener' className='bg-tab-color border-none w-3/4 flex flex-row items-center justify-between h-40 px-4 my-2 hover:scale-110 transition-all duration-300'>
      <div className='left-side flex flex-col justify-between h-full py-2'>
        <div className='project_header flex flex-col text-left'>
          <h2 className='text-white font-medium text-2xl'>
            {project_name.toLowerCase().split('').map((char, charIndex) => {
              return <span key={charIndex} className='hover:text-red-400 transition-all duration-200 cursor-default'>
                {char}
              </span>
            })}
          </h2>

          <div className='flex flex-row gap-1 mt-1'>
            {project_skills.map((value, index) => {
                return <div key={index} className='text-[10px] tracking-[.20em] text-white'>{value.toUpperCase()} <span className='invisible xl:visible'>{index !== project_skills.length - 1 ? '|' : ''}</span></div>
              })}
          </div>
            
        </div>

        <div className='project_description text-sm mt-auto text-gray-400 mb-4'>
          {project_description}
        </div>
      </div>

      <div className='right-side w-1/2 h-full flex items-center justify-end'>
        <div className=''>
          <Image alt={`${project_name}_media`} src={project_image} width={150} height={150} className={`${project_image !== '' ? '': 'hidden'}`} objectFit='contain'/>
        </div>
        
      </div>
    </Link>
  )
}

export default Project