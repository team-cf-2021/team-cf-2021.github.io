import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FadeInSection from './FadeInSection'

const projectContent = [
    {
        title: 'Our sponsor',
        content: `Our sponsor, Checkfront, is a Victoria-based company that provides online booking management software. 
                    The platform streamlines the process of guest booking so that clients can focus on their administrative tasks.
                    It is utilized by businesses with schedule-based operations such as tours, events, and accomodations and they continue
                    to gain interests from new clients.`
    },
    {
        title: 'Thank you to our sponsors and instructors',
        content: `Our team would like to thank Robert McMynn, Manjot Singh, and Julianne Johnson at Checkfront for giving us 
                    the opportunity to work on this project. We also thank the ICS Department Chair, Saryta Schaerer, and our 
                    instructors, Katie Tanigawa, Jonas Bambi, and Ben Leather for supporting us throughout this project.`
    }
]

const ProjectContent = (props) => {
    return(
        <div id='about-content'>
            <h1>{props.title}</h1>
            <span class='line-animation' />
            <br/>
            <br/>
            <p>{props.content}</p>
        </div>
    )
}

const projectContentArray = projectContent.map((data) => {
    return(
        <FadeInSection>
            <ProjectContent title={data.title} content={data.content} />
        </FadeInSection>
    )
})

const Project = (props) => {    

    return (
        <Container id='content' fluid>
            {projectContentArray}
        </Container>
    );
}

export default Project