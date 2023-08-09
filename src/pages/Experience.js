import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'
import '../styles/Experience.css'

function Experience() {
  return (
    <div>
      <VerticalTimeline lineColor="navy">
        <VerticalTimelineElement className="vertical-timeline-element--training" 
        date ="June, 2023 - Present"
        iconStyle= {{background: "navy",color:"#fff"}}
        icon={<SchoolIcon/>}
        ><h3 className="vertical-timeline-element-title">MERN Stack Development Training</h3>
        <p>Broadway Infosys</p></VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--training" 
        date ="August, 2023 - Present"
        iconStyle= {{background: "navy",color:"#fff"}}
        icon={<WorkIcon/>}
        ><h3 className="vertical-timeline-element-title">Full Stack Development Internship</h3>
        <h5>Skills:- <span>React.Js</span> <span>.NET</span></h5>
        <p>Teksewa</p></VerticalTimelineElement>

    </VerticalTimeline>
    </div>
  )
}

export default Experience