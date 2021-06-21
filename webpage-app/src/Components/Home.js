import React from 'react';
import About from './About.js'
import Sponsor from './Sponsor.js'
import Landing from './Landing.js'
import { Container } from 'react-bootstrap'
import FadeInSection from './FadeInSection.js';
import Project from './Project.js';

const Home = () => {

    return (
        <Container className='Home'>
            <Landing/>
            <Project/>
            <About />
            <Sponsor/>
        </Container>
        
    );
}

export default Home