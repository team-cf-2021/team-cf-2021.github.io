import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const Project = () => {  

    const objectiveTxt = () => (
        < /* id='big-txt' */>
        <p>
            The purpose of the NCDI 2.0 is to expand on the functionality of the current web application allowing to user to import gift certificates 
            and guest information, improve user feedback for invalid data, and allow the user to update all existing items in their account. 
        </p>
        </>
    )

    const situationTxt = () => (
        <>
        <p>
            Checkfront receives bulk booking data from their clients which can widely vary in both format and data type from client to client. 
            They seek to streamline the process of importing large quantities of booking information so that 
            Checkfront can save time, resources, and also improve turn-around for their clients. This project will 
            increase ease-of-use for both the technical and non-technical Checkfront team members. 
        </p>
        </>
    )

    const parametersTxt = () => (
        <>
        <Row>
            <Col lg={6}>
                <p>
                    The NCDI 2.0 deliverables consist of adding the the following features: import gift certificates, import guest 
                    information, and update all items in the users account. 
                </p>
                <br/>
                <p>The project scope also includes the following:</p>
                <ul>
                    <li>Expand the accuracy of data validation.</li>
                    <li>Fix the absence of creation date validation.</li>
                    <li>Enhance data recognition.</li>
                    <li>Audit the error-handling and field type recognition.</li>
                    <li>Handle duplicate bookings.</li>
                    <li>Improve the date recognition.</li>
                </ul>
                <br/>
            </Col>
            <Col lg={6}>
                <Image id='col-img' width='100%' src='../Images/menu.png' fluid />
            </Col>
        </Row>
        </>
    )

    const logisticsTxt = () => (
        <div /*  id='big-txt' */>
        <p>
            Management of the NCDI’s tasks is performed using Jira (An issue and project tracking software). 
            The project's source code is hosted on Github providing a remote repository with version control. 
            All documentation is hosted on Google Drive which allows for quick and easy collaboration and 
            file-sharing between team members. 
        </p>
        <p>
            Communication during the project has been done through the following tools: Discord for team meetings and 
            internal team communication, Zoom for planned sponsor meetings, and Slack for miscellaneous questions and 
            updates for the sponsor.
        </p>
        </div>
    )

    const featuresTxt = () => (
        <>
            <Row>
                <Col id='features-col'>
                    <Image src='../Images/import-bookings.png' id='col-img' fluid /> 
                    <p />
                    Import CSV files containing either booking, gift certificate, or guest information.
                </Col>
                <Col id='features-col'>
                    <Image src='../Images/map-items.png' id='col-img' fluid />  
                    <p />
                    Map items to headers contained in the CSV file using the dropdown menus.
                </Col>
                <Col id='features-col'>
                    <Image src='../Images/duplicate-bookings.png' id='col-img' fluid />  
                    <p />
                    Menu displaying all duplicates found allowing removal before importing.
                </Col>            
            </Row>                

        </>

    )
    
    const projectContent = [
        {
            title: 'Objective',
            content: objectiveTxt(),
        },
        {
            title: 'Situation',
            content: situationTxt(),
        },
        {
            title: 'Parameters',
            content: parametersTxt(),
        },
        {
            title: 'Logistics',
            content: logisticsTxt()
        },
        {
            title: 'Features',
            content: featuresTxt()
        },
    ]
    
    const ProjectContent = (props) => {
        return(
            <div id='content-row'>
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
            <ProjectContent title={data.title} content={data.content} />
        )
    })

    return (
        <Container id='project' className='content' fluid>
            {projectContentArray}
        </Container>
    );
}

export default Project