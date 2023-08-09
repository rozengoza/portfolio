import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectLists';
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/ProjectsDisplay.css'
function ProjectsDisplay() {
    const { id } = useParams();
    const project =ProjectList[id];
  return (
    <div className="project">
        <h1>{project.name}</h1>
        <img src ={project.image} alt="none"/>
        <p>
            <b>TechStack :-</b> {project.techStack}
        </p>
        <GitHubIcon/> <p>{project.githubLink}</p>
    </div>
  )
}

export default ProjectsDisplay