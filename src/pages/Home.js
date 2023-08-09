import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import {Link} from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
        <div className= "about">
            <h2>Hello, This is Rozen Shrestha.</h2>
            <div class="prompt">
                <p>A software developer with passion for full stack web development.</p>
               <LinkedInIcon/>
                <GitHubIcon/>
                <EmailIcon/>
            </div>
        </div>
        <div className= "skills">
            <h2>Skills</h2>
            <div className = "skills-list">
                <div className= "skills-type">
                    <h4>Programming Languages</h4>
                    <span >
                        <li className= "list">JavaScript</li>
                        <li className= "list">Python</li>
                        <li className= "list">C</li>
                        <li className= "list">C++</li>
                    </span>
                </div>

                <div className= "skills-type">
                    <h4>Frameworks</h4>
                    <span>
                        <li className= "list">Next.Js</li>
                        <li className= "list">React.Js</li>
                        <li className= "list">Node.Js</li>
                        <li className= "list">RESTful</li>
                        <li className= "list">Machine Learning</li>
                    </span>
                </div>

                <div className= "skills-type">
                    <h4>Databases</h4>
                    <span>
                        <li className= "list">SQL</li>
                        <li className= "list">MongoDB</li>
                    </span>
                </div>

                <div className= "skills-type">
                    <h4>Soft Skills</h4>
                    <span>
                        <li className= "list">Problem Solving</li>
                        <li className= "list">Team Work</li>
                        <li className= "list">Critical Thinking</li>
                        <li className= "list">Active Learner</li>
                    </span>
                </div>
            </div>
            


        </div>
    </div>
  )
}

export default Home