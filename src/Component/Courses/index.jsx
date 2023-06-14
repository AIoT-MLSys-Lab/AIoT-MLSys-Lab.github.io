import React from 'react'
import ContentTitle from '../ContentTitle'
import './courses.css'

function Courses() {
  return (
    <div>
      <ContentTitle title = "Courses" subtitle = "Courses"></ContentTitle>
      <div className='Course'>
        <div className='CourseTitle'>
          CSE 5469: Artificial Intelligence of Things
        </div>
        <div className='CourseContent'>
          <img src="./images/CSE5469.jpeg" alt="" className='CourseImg'/>
          <div className='CourseDesc'>
          <div className='CourseHighLight'>Course Description:</div> Of all the technology trends that are taking place right now, perhaps the biggest two are Internet of Things (IoT) and Artificial Intelligence (AI). The pervasiveness of sensor-equipped wireless connected IoT devices such as smartphones, drones, and smart home devices, combined with the power of AI , has led to a new computing paradigm, aka the “Artificial Intelligence of Things” (AIoT). The objective of this graduate-level seminar course is to introduce students to the building blocks of AIoT, the underlying sensing, computing, networking, and communication technologies as well as a wide range of applications that drive the AIoT revolution. In this course, you will read, present, and discuss recent research papers that cover the topics mentioned above. For some of the topics, we will also invite prominent researchers to present their research works that represent the state-of-the-arts in the areas. The overarching goals are to both gain familiarity with the fundamentals and recent advancements in AIoT as well as also to develop a deeper understanding of how to conduct high-quality research in this emerging area.
          </div>
        </div>

      </div>
    </div>
  )
}

export default Courses