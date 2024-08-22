import React from 'react'

const ProjectPage = ({params} : {params: {projectId: string}}) => {
  return (
    <div>ProjectPage {params.projectId} </div>
  )
}

export default ProjectPage