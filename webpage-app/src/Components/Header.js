import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <Container id='header'>
            <Navbar fixed='top'>
                <Navbar.Brand id='navbar-brand' href="/">Team Checkfront</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='navbar-collapse'>
                    <Nav className="me-auto" id='nav-links'>
                        <Nav.Link id='nav-link' href="/">Home</Nav.Link>
                        <Nav.Link id='nav-link' href="/project">Project</Nav.Link>
                        <Nav.Link id='nav-link' href="#about">About</Nav.Link>
                        <Nav.Link id='nav-link' href="#sponsor">Sponsor</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header