import React from 'react'
import ProjectItem  from '../components/ProjectItem'
import { ProjectList} from '../helpers/ProjectLists'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className="projects">
      <div className="academic-projects">
        <h2>Academic Projects</h2>
        <div className="projectList">
          {ProjectList.map((project,index)=>{
            while(index<3){
            return <ProjectItem id= {index} name={project.name} image={project.image}/>
            }
          })
          }
        </div>
  </div>
      <div className="personal-projects">
        <h2 >Personal Projects</h2>
        <div className="projectList">
          {ProjectList.map((project,index)=>{
            while(index>2){
            return <ProjectItem id= {index} name={project.name} image={project.image}/>
            }
          })
          }
        </div>
  </div>
    </div>
  )
}

export default Projects