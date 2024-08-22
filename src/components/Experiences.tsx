import React from 'react'

import { experiences } from '@/constants'

import Experience from '@/components/Experience'

const Experiences = () => {
  return (
    <div className='min-h-screen py-10 flex flex-col items-center justify-center gap-1.5'>
       {experiences.map((experience, index) => {
        return <Experience
          key={index}
          experience_name={experience['name']}
          experience_skills={experience['skills']}
          experience_description={experience['description']}
          experience_image={experience['image_link']}
          experience_link={experience['link']}
        />
      })}
    </div>
  )
}

export default Experiences