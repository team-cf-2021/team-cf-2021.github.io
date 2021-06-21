import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import FadeInSection from './FadeInSection'

const teamMembers = [
    {
        name: 'Dylan Spence',
        photo: '../Images/dylan.jpg',
        roles: ['Back-End Developer', 'Technical Editor'],
        bio: `
            Dylan is a detail-oriented worker who enjoys the problem solving and logical design aspects of programming. 
            He has a keen interest in back-end development, including network programming, cloud development, and database 
            design. He is a quick learner, able to adapt to new environments, and apply new concepts and practices. 
            After graduation he looks forward to being in a position where he is challenged and can continue to learn 
            and develop new skills.
        `
    },
    {
        name: 'Selina B. Hashemi',
        photo: '../Images/selina.jpg',
        roles: ['Team Lead', 'Front-End Developer', 'Technical Writer'],
        bio: `
            Selina’s interest in front-end development and UI/UX design stems from her passion for art, design, and technology. 
            As a graduate of the Visual Arts program at Camosun College and with over 10 years of experience as an artist, 
            Selina is committed to providing quality user experience and a visually appealing interface in her projects. 
            Outside of school, Selina spends her time creating digital art and photo editing.
        `
    },
    {
        name: 'Seiji Sagawa',
        photo: '../Images/seiji.jpg',
        roles: ['Front-End Developer', 'Technical Writer'],
        bio: `
            Seiji was born and raised in Japan and moved to Victoria in order to pursue his education at Camosun College. 
            He is keen on learning new skills and integrating them into his projects. His main focus is analyzing problems 
            from multiple perspectives and discovering any possible solutions. He enjoys writing programs of any kind and 
            any language. In his free time, he enjoys playing sports and the guitar.
        `
    }
]


const TeamMember = props => {
    return(
        <Row>
            <Col>
            <p><Image width='50%' src={props.photo} fluid /></p>
            </Col>
            <Col id="bio-txt">
                <p>{props.name}</p>
                
                {/* <p>Roles: {props.roles.forEach()}</p> */}
                Roles: <br/>{props.roles.map(role => (
                            <>{'- ' + role}<br/></>
                ))}
                <p>{props.bio}</p>
            </Col>
        </Row>
    )
}

const About = props => {

    const teamMembersArray = teamMembers.map((teamMember) => {
        return(
            <FadeInSection>
                <TeamMember name={teamMember.name} photo={teamMember.photo} roles={teamMember.roles} bio={teamMember.bio} />
            </FadeInSection>
        )
    })

    return (
        <Container className="About" fluid>
            {teamMembersArray}
        </Container>
    );
}

export default About