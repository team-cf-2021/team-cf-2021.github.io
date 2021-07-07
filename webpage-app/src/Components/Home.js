import React from 'react';
import Team from './Team.js'
import { Container, } from 'react-bootstrap'
import FadeInSection from './FadeInSection.js';
import Sponsor from './Sponsor.js'
import Landing from './Landing.js'
import Project from './Project.js';
import Documents from './Documents.js';

const Home = () => {

    return (
        <Container id='home'>
            <Landing />
            <Project />
            <Sponsor />
            <Documents />
            <Team />
        </Container>
    );
}

export default Home