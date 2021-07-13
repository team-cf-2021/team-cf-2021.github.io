import React from 'react'
import { Row, Col } from 'react-bootstrap'


const Footer = () => {
    return (
        <div id='footer'>
            <Row>
                <Col>
                    <h5>Territorial Acknowledgement</h5>
                    <p>
                        We are respectfully acknowledging the traditional lands we live on:
                        the Lekwungen territories of the Esquimalt and Songhees Nations, and W̱SÁNEĆ territories 
                        of the Tsartlip, Tseycum and Tsawout Nations.
                        We express our gratitude to have the opportunity to pursue our studies and to live on their territories.
                    </p>
                </Col>
                <Col>
                    <h5>Links</h5>
                    <p><a href='https://www.checkfront.com/'>Checkfront</a></p>
                    <p><a href='https://camosun.ca/'>Camosun College</a></p>
                    <p><a href='http://capstone.camosun.bc.ca/'>Capstone Projects</a></p>
                </Col>
            </Row>
            <Row>
                <Col><p className='text-center'>&copy; {new Date().getFullYear()}: Team Checkfront</p></Col>
            </Row>
        </div>
    );
}

export default Footer