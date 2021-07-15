import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const Landing = () => {
    return (
        <Container id='landing' fluid>
            <Row>
                <Col fluid>
                    <Image id='landing-img' width='100%' src='../Images/login.png' fluid />
                </Col>
                <Col fluid>
                    <p id='landing-txt'>New Customer Data Importer 2.0</p>
                </Col>
            </Row>
            <Row id='big-txt'>
                <p>The New Customer Data Importer (NCDI) 2.0 is an update to an existing tool developed by Team Checkfront. 
                    NCDI 2.0 expands the functionality and refines the user feedback and error-handling of its former version.</p>
            </Row>
        </Container>
    );
}

export default Landing