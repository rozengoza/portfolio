import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectLists';
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/ProjectsDisplay.css'
function ProjectsDisplay() {
    const { id } = useParams();
    const project =ProjectList[id];
    // const [input,setInput] = useState("");
    const [aboutProjectVisibility, setAboutProjectVisibility] =useState(false)
    // const [blockDiagramVisibility, setBlockDiagramVisibility] =useState(false)
    const handleAboutOnClick = () => {
      if(aboutProjectVisibility === false){
        setAboutProjectVisibility(true);
      }
      else{
        setAboutProjectVisibility(false);
      }
    }

    // const handleBDOnClick=() =>{
    //   if(blockDiagramVisibility === false){
    //     setBlockDiagramVisibility(true);
    //   }
    //   else{
    //     setBlockDiagramVisibility(false);
    //   }
    // }
  return (
    <div className="project">
        <h1>{project.name}</h1>
        <img src ={project.image} alt="none"/>
        <p>
            <b>TechStack :-</b> {project.techStack}
        </p>
        <GitHubIcon onClick={() => { window.location.href = project.githubLink } }/> 

          <button onClick={handleAboutOnClick} type="button" className="about-this-Button">About This Project</button>
          {aboutProjectVisibility &&
          <div className="show">
            <p>{project.aboutProject}</p>
            </div>
            }
          

        {/* <button onClick={handleBDOnClick} type="button" className="view-blockDiagram-Button">View Block Diagram</button>
        <div className="blockDiagram">
        {blockDiagramVisibility &&
          <div className="show-blockDiagram">
            <h5>Block Diagram of <span>{project.name}</span></h5>
            <img src ={project.blockDiagramImage} alt="none"/>
            </div>
            }
        </div> */}
          

        </div>
  )
}

export default ProjectsDisplay