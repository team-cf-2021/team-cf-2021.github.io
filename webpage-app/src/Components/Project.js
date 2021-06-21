import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FadeInSection from './FadeInSection'

const projectInfo = [
    {
        text: `The New Customer Data Importer (NCDI) 2.0 is an update to an existing tool developed by Team Checkfront. 
                NCDI 2.0 expands the functionality and refines the user feedback and error-handling of its former version.`
    },
]

const ProjectInfo = (props) => {
    return(
        <Row id='project-txt'>
            <p>{props.text}</p>
        </Row>
    )
    
}

const Project = (props) => {    

    const projectInfoArray = projectInfo.map((data) => {
        return(
            <FadeInSection>
                <ProjectInfo text={data.text} />
            </FadeInSection>
        )
    })

    return (
        <Container id='project' fluid>
            {projectInfoArray}
        </Container>
    );
}

export default Project