import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const Landing = () => {
    return (
        <Container className='Landing' fluid>
            <Row>
                <Col fluid>
                    <Image id='landing-img' width='100%' src='../Images/scrn-import-csv.png' fluid />
                </Col>
                <Col fluid>
                    <p id='landing-txt'>New Customer Data Importer 2.0</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing