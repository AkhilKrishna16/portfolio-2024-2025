import React from 'react'

import Project from '@/components/Project'

import { projects } from '@/constants'

const Projects = () => {
  return (
    <div className='min-h-screen py-10 flex flex-col items-center justify-center gap-1.5'>
      {projects.map((project, index) => {
        return <Project
          key={index}
          project_name={project['name']}
          project_skills={project['skills']}
          project_description={project['description']}
          project_image={project['image_link']}
          project_link={project['project_link']}
        />
      })}
    </div>
  )
}

export default Projects