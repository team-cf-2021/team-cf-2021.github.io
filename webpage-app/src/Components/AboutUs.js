import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'


const AboutUs = () => {
    return (
        <Container className="AboutUs" fluid>
            <Row id='ncdi-txt'>
                <p>
                    The New Customer Data Importer (NCDI) 2.0 is an update to an existing tool developed by Team Checkfront. 
                    NCDI 2.0 expands the functionality and refines the user feedback and error-handling of its former version.
                </p>
            </Row>
            <Row>
                <Col id="bio-txt">
                    <p>
                        Dylan Spence
                        Back-End Developer and Technical Editor
                        Dylan is a detail-oriented worker who enjoys the problem solving and logical design aspects of programming. 
                        He has a keen interest in back-end development, including network programming, cloud development, and database 
                        design. He is a quick learner, able to adapt to new environments, and apply new concepts and practices. 
                        After graduation he looks forward to being in a position where he is challenged and can continue to learn 
                        and develop new skills.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col id="bio-txt">
                    <p>
                        Selina B. Hashemi
                        Team Lead, Front-End Developer, Technical Writer
                        Selina’s interest in front-end development and UI/UX design stems from her passion for art, design, and technology. 
                        As a graduate of the Visual Arts program at Camosun College and with over 10 years of experience as an artist, 
                        Selina is committed to providing quality user experience and a visually appealing interface in her projects. 
                        Outside of school, Selina spends her time creating digital art and photo editing.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col id="bio-txt">
                    <p>
                        Seiji Sagawa
                        Front-End Developer
                        Technical Writer
                        Seiji was born and raised in Japan and moved to Victoria in order to pursue his education at Camosun College. 
                        He is keen on learning new skills and integrating them into his projects. His main focus is analyzing problems 
                        from multiple perspectives and discovering any possible solutions. He enjoys writing programs of any kind and 
                        any language. In his free time, he enjoys playing sports and the guitar.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs