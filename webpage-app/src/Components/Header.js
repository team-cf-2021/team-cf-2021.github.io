import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed='top'>
                <Navbar.Brand href="/">Team Checkfront</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#AboutUs">About Us</Nav.Link>
                        <Nav.Link href="#OurSponsor">Our Sponsor</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header