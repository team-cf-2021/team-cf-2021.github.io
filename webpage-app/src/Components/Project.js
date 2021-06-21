import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Project = () => {
    return (
        <Container className="Project" fluid>
            <Row id='ncdi-txt'>
                <p>
                    The New Customer Data Importer (NCDI) 2.0 is an update to an existing tool developed by Team Checkfront. 
                    NCDI 2.0 expands the functionality and refines the user feedback and error-handling of its former version.
                </p>
            </Row>
        </Container>
    );
}

export default Project