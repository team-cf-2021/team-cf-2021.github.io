import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const Sponsor = () => {    

    const sponsorTxt = () => (
        <div>
            <Row>
                <Col lg={6}>
                <p>
                    Our project sponsor, Checkfront, is a Victoria-based company providing an easy-to-use cloud-based 
                    booking platform. This platform is an inventory management and booking reservation system that 
                    continuously gains interest from new clients. It is utilized by businesses with schedule-based 
                    operations who offer services such as tours, events, rentals, and accomodations. 
                    Our primary contacts are with their Implementation Specialist, QA Automation Developer, 
                    and Sr. Customer Success Manager.
                </p>
                <br/>
                </Col>
                <Col lg={6}>
                    <Image width='auto' src='../Images/Checkfront_Color.png' fluid />
                </Col>
            </Row>
            
            

        </div>
    )

    const sponsorContent = [
        {
            title: 'Our sponsor',
            content: sponsorTxt()
        },
    ]
    
    const SponsorContent = (props) => {
        return(
            <div id='content-row'>
                <h1>{props.title}</h1>
                <span class='line-animation' />
                <br/>
                <br/>
                <p>{props.content}</p>
            </div>
        )
    }
    
    const sponsorContentArray = sponsorContent.map((data) => {
        return(
            <SponsorContent title={data.title} content={data.content} />
        )
    })

    return (
        <Container id='sponsor' className='content' fluid>
            {sponsorContentArray}
        </Container>
    );
}

export default Sponsor