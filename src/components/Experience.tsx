import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface ExperienceProps {
  job_title: string,
  company_name: string,
  start_date: string,
  end_date: string,
  experience_skills: string[],
  experience_description: string | undefined,
  experience_image: string,
  experience_link: string | undefined,
}

const Experience = ({ job_title, company_name, start_date, end_date, experience_skills, experience_description, experience_image, experience_link }: ExperienceProps) => {
  const CardContent = () => (
    <div className='bg-tab-color border-none w-full h-[380px] flex flex-col overflow-hidden px-5 py-4 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 rounded-lg cursor-pointer'>
      <div className='flex flex-row items-start justify-between mb-3'>
        <div className='flex flex-col flex-1 pr-3 min-w-0'>
          <h2 className='text-white font-bold text-xl mb-1.5 leading-tight'>
            {job_title.split('').map((char, charIndex) => {
              return <span key={charIndex} className='hover:text-red-400 transition-all duration-200 cursor-default'>
                {char}
              </span>
            })}
          </h2>
          <h3 className='text-gray-300 font-normal text-base mb-1.5 leading-tight'>
            {company_name.split('').map((char, charIndex) => {
              return <span key={charIndex} className='hover:text-blue-400 transition-all duration-200 cursor-default'>
                {char}
              </span>
            })}
          </h3>
          <p className='text-gray-400 text-xs mb-3'>
            {start_date} - {end_date}
          </p>

          <div className='flex flex-col gap-1.5'>
            {experience_skills.map((value, index) => {
              return (
                <span key={index} className='text-[10px] tracking-[.2em] text-gray-300 bg-gray-800/60 px-2.5 py-1 rounded w-fit border border-gray-700/40'>
                  {value.toUpperCase()}
                </span>
              )
            })}
          </div>
        </div>

        {experience_image && (
          <div className='right-side w-20 h-20 flex items-center justify-center flex-shrink-0'>
            <div className='relative w-full h-full'>
              <Image
                alt={`${company_name}_media`}
                src={experience_image}
                fill
                className='object-contain'
              />
            </div>
          </div>
        )}
      </div>

      {experience_description && (
        <div className='experience_description text-sm text-gray-300 leading-relaxed mt-auto pt-3 border-t border-gray-700/30'>
          {experience_description}
        </div>
      )}
    </div>
  )

  if (experience_link) {
    return (
      <a href={experience_link} rel='noreferrer noopener' target='_blank' className='block'>
        <CardContent />
      </a>
    )
  }

  return <CardContent />
}

export default Experience