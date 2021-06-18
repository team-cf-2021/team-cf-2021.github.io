import React from 'react';
import AboutUs from './AboutUs.js'
import OurSponsor from './OurSponsor.js'
import Landing from './Landing.js'
import { Container } from 'react-bootstrap'

const Home = () => {

    return (
        <Container className='Home'>
            <Landing/>
            <AboutUs/>
            <OurSponsor/>
        </Container>
        
    );
}

export default Home