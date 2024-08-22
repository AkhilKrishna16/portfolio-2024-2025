import React from 'react'

const ExperiencePage = ({params}: {params: {experienceId: string}}) => {
  return (
    <div>Experience sub page {params.experienceId} </div>
  )
}

export default ExperiencePage