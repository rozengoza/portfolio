import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'


function Academics() {
  return (
    <div>
      <VerticalTimeline lineColor="navy">
        <VerticalTimelineElement className="vertical-timeline-element--training" 
        date ="April, 2001 - April 2015"
        iconStyle= {{background: "navy",color:"#fff"}}
        icon={<SchoolIcon/>}
        ><h3 className="vertical-timeline-element-title">School Leaving Certificate</h3>
        <p>Mount SEB School</p></VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--training" 
        date ="July, 2015 - April, 2017"
        iconStyle= {{background: "navy",color:"#fff"}}
        icon={<SchoolIcon/>}
        ><h3 className="vertical-timeline-element-title">+2</h3>
        <h5>Science</h5>
        <p>Khwopa Higher Secondary School</p></VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--training" 
        date ="October, 2018 - July, 2023"
        iconStyle= {{background: "navy",color:"#fff"}}
        icon={<SchoolIcon/>}
        ><h3 className="vertical-timeline-element-title">Bachelors of Computer Engineering</h3>
        <p>National College of Engineering, TU</p></VerticalTimelineElement>

    </VerticalTimeline>
    </div>
  )
}

export default Academics