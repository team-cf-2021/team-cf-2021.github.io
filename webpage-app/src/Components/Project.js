import React from 'react'
import { Row, Col, Container, Image, Carousel } from 'react-bootstrap'

const Project = () => {  

    const objectiveTxt = () => (
        <div id='big-txt'>
        <p>
            The purpose of the NCDI 2.0 is to expand on the functionality of the current web application and 
            improve error feedback. The goal is to expand its functionalities which include gift certificate 
            importation and increased accuracy in data validation and date recognition.
        </p>
        </div>
    )

    const situationTxt = () => (
        <>
        <p>
            Checkfront receives bulk booking data from their clients which can widely vary from client to client. 
            They seek to streamline the process of importing large quantities of booking information so that 
            Checkfront can save time, resources, and also improve turn-around for their clients. This project will 
            increase ease-of-use for both the technical and non-technical Checkfront team members. 
        </p>
        <p>
            Our tasks with the New Customer Data Importer (NCDI) 2.0 are to improve the error handling, enhance data 
            recognition and validation, and add new functionality allowing users to: export and remap account information, 
            import gift certificates, and import guest information.  
        </p>
        </>
    )

    const parametersTxt = () => (
        <>
        <Row>
            <Col lg={6}>
                <p>
                    The NCDI 2.0 deliverables consist of adding the ability to: import gift certificates, import guest 
                    information, and export and remap booking information. The project scope includes the following:
                </p>
                <br/>
                <ul>
                    <li>Expand the accuracy of data validation.</li>
                    <li>Fix the absence of creation date validation.</li>
                    <li>Audit the error-handling and field type recognition.</li>
                    <li>Handle duplicate bookings.</li>
                    <li>Improve the date recognition.</li>
                    <li>Add gift certificate import functionality.</li>
                    <li>Add the ability to re-import bookings and remap the data.</li>
                    <li>Add guest information import functionality.</li>
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
        <div id='big-txt'>
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
                    Import CSV files of bookings, gift certificates, and guest information.
                </Col>
                <Col id='features-col'>
                    <Image src='../Images/map-items.png' id='col-img' fluid />  
                    <p />
                    Map items using the dropdown menus.
                </Col>
                <Col id='features-col'>
                    <Image src='../Images/duplicate-bookings.png' id='col-img' fluid />  
                    <p />
                    Option of removing duplicate bookings before importing.
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