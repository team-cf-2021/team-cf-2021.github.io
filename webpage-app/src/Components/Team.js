import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const Team = () => {

    const teamMembers = [
        {
            name: 'Dylan Spence',
            photo: '../Images/dylan.png',
            roles: ['Back-End Developer', 'Technical Editor'],
            bio: `
                Dylan is a detail-oriented worker who enjoys the problem solving and logical design aspects of programming. 
                He has a keen interest in back-end development, including network programming and cloud development. 
                He is a quick learner, able to adapt to new environments, and apply new concepts and practices. 
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
    
    const TeamMember = (props) => {
        return(
            <Row id='content-row' fluid>
                <Col>
                <p><Image id='member-img' src={props.photo} fluid /></p>
                </Col>
                <Col id="bio-txt" lg={8}>
                    <h4>{props.name}</h4>
                    <b>Roles: </b>{props.roles.map(function(role, index) {
                                return <span>{ (index ? ', ' : '') + role }</span>
                            })}
                    <p/>
                    <p>{props.bio}</p>
                </Col>
            </Row>
        )
    }

    const teamMembersArray = teamMembers.map((teamMember) => {
        return(
            <TeamMember name={teamMember.name} photo={teamMember.photo} roles={teamMember.roles} bio={teamMember.bio} />
        )
    })

    return (
        <Container id='team' className='content' fluid>
            <h1>About Us</h1>
            <span class='line-animation' />
            <br/>
            <br/>
            {teamMembersArray}

        <div id='big-txt'>
            <h1>Thank you to our sponsors and instructors</h1>
            <span class='line-animation' />
            <br/>
            <br/>
            <p>Our team would like to thank Robert McMynn, Manjot Singh, and Julianne Johnson at Checkfront for giving us 
                the opportunity to work on this project. We also thank the ICS Department Chair, Saryta Schaerer, and our 
                instructors, Katie Tanigawa, Jonas Bambi, and Ben Leather for supporting us throughout this project.
            </p>
        </div>
        
        </Container>
    );
}

export default Team