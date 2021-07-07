import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <Container id='header'>
            <Navbar fixed='top' expand='lg' id='navbar' variant='dark'>
                <Navbar.Brand id='navbar-brand' href="/">Team Checkfront</Navbar.Brand>
                <Navbar.Toggle id='navbar-toggle' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='navbar-collapse'>
                    <Nav className="me-auto" id='nav'>
                        <Nav.Link id='nav-link' href="/">Home</Nav.Link>
                        <Nav.Link id='nav-link' href="#project">Project</Nav.Link>
                        <Nav.Link id='nav-link' href="#sponsor">Sponsor</Nav.Link>
                        <Nav.Link id='nav-link' href="#documents">Documents</Nav.Link>
                        <Nav.Link id='nav-link' href="#team">Team</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default Header