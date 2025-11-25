import React from 'react'

import Project from '@/components/Project'

import { projects } from '@/constants'

const Projects = () => {
  return (
    <div className='min-h-screen py-10 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start'>
        {projects.map((project, index) => {
          return <Project
            key={index}
            project_name={project['name']}
            project_skills={project['skills']}
            project_description={project['description'] || ''}
            project_image={project['image_link'] || ''}
            project_link={project['project_link'] || ''}
          />
        })}
      </div>
    </div>
  )
}

export default Projects