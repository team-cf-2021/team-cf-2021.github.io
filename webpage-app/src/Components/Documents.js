import React, { useEffect } from 'react'
import { Row, Col, Container, Accordion, ListGroup } from 'react-bootstrap'
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
            <div>
                <p><a href={props.path}>{props.name}</a></p>
            </div>
        )
    }; 
    const fileContentArray = files.map((file) => {
        return(
            <div>
                <FileContent path={file.path} name={file.name} />
            </div>
        )
    }); 

    return(
        <Container id='documents'>
            <h1>Documents</h1>
            <span class='line-animation' />
            <br/>
            <br/>
            {fileContentArray}
        </Container>
    )
}

export default Documents;