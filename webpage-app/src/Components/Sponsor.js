import React from 'react'
import { Container } from 'react-bootstrap'
import FadeInSection from './FadeInSection';


const Sponsor = () => {
    return (
        <FadeInSection>
            <Container className="Sponsor">
                <p>
                    Our sponsor, Checkfront, is a Victoria-based company that provides online booking management software. 
                    The platform streamlines the process of guest booking so that clients can focus on their administrative tasks.
                </p>
            </Container>
        </FadeInSection>
        
    );
}

export default Sponsor