import React from 'react';
import Team from './Team.js'
import { Container, } from 'react-bootstrap'
import FadeInSection from './FadeInSection.js';
import Sponsor from './Sponsor.js'
import Landing from './Landing.js'
import Project from './Project.js';
import Documents from './Documents.js';

const Home = () => {

    const contentArray = [
        <Landing />,
        <Project />,
        <Sponsor />,
        <Documents />,
        <Team />,
    ]

    const Content = () => {
        const items = [];
        for (const item of contentArray) {
            items.push(<FadeInSection>{item}</FadeInSection>)
        }
        return items;
    }

    return (
        <Container id='home'>
            <Content />
        </Container>
    );
}

export default Home