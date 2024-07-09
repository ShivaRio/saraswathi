import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';





export default function AppHeader() {
    return (
        <Navbar expand="lg" className="bg-dark" >
         <Container>

                <Navbar.Brand href="#home" className="text-white fs-6">27/15 Shanthi Nagar Main Road, Adambakkam, Chennai </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
                <li><a href=""><i className="fab fa-facebook-f text-white"></i></a></li>
                <li><a href=""><i className="fab fa-linkedin-in text-white"></i></a></li>
                <li><a href=""><i className="fab fa-whatsapp text-white"></i></a></li>

                </Container>

        </Navbar>
    )

}