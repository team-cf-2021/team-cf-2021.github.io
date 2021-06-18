import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'


const Footer = () => {
    return (
        <div>
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Territorial Acknowledgement</Card.Title>
                        <Card.Text>
                            <p>
                                We are respectfully acknowledging the traditional, unceded lands we live on:
                                the Lekwungen territories of the Esquimalt and Songhees Nations, and W̱SÁNEĆ territories 
                                of the Tsartlip, Tseycum and Tsawout Nations.
                                We express our gratitude to have the opportunity to pursue our studies and to live on their territories.
                            </p>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Thank you to our sponsors and instructors</Card.Title>
                        <Card.Text>
                            <p>
                                Our team would like to thank Robert McMynn, Manjot Singh, and Julianne Johnson at Checkfront for giving 
                                us the opportunity to work on this project. We also thank the ICS Department Chair, Saryta Schaerer, 
                                and our instructors, Katie Tanigawa, Jonas Bambi, and Ben Leather for supporting us throughout this project. 
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
        </Row>
        </div>
    );
}

export default Footer