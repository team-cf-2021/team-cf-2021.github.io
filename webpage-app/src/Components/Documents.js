import React, { useEffect } from 'react'
import { Row, Col, Container, ListGroup } from 'react-bootstrap'
import FadeInSection from './FadeInSection'


const Documents = (props) => {

   const files = []

    function getFiles() {
        for (let i = 1; i <= 8; i++) {
            files.push({
                'name': `Weekly Status Report ${i}`,
                'path': `../Files/Weekly_Status_Report_${i}.pdf`,
            })
        }
    }
    getFiles();

    const FileContent = (props) => {
        return(
            <><a href={props.path}>{props.name}</a></>
        )
    }; 
    const fileContentArray = files.map((file) => {
        return(
            <>
            <ListGroup.Item>
                <FileContent path={file.path} name={file.name} />
                
            </ListGroup.Item>
            </>
        )
    }); 

    return(
        <Container id='documents' className='content'>
            <h1>Documents</h1>
            <span class='line-animation' />
            <br/>
            <br/>
            <div id='content-row'>
                 <Row>
                    <Col lg={6}>
                        Our team is required to submit a weekly status report to our instructors at Camosun College every week.
                        These reports documented our project progress throughout the semester and ensured that our team stayed on 
                        track to complete the project by the estimated deadline.
                    </Col>
                    <Col lg={6}>
                        <ListGroup>
                            {fileContentArray}
                        </ListGroup>
                        
                    </Col>
                </Row>
            </div>
           
            
        </Container>
    )
}

export default Documents;