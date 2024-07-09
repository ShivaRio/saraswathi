import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, Row, Col } from 'react-bootstrap';


export default function Appnavbar() {
    return (



        <Container>

            <Row>
                <Col lg={12}>
                    <Row>
                        <Container>

                            <Navbar bg="dark" data-bs-theme="dark">
                                <Col lg={8}>
                                    <Nav>
                                        <Nav.Link href="#home" className='text-warning'>HOME</Nav.Link>
                                        <Nav.Link href="#our services" className='text-white'>OUR SERVICES</Nav.Link>
                                        <Nav.Link href="#portfolio" className='text-white'>PORTFOLIO</Nav.Link>
                                        <Nav.Link href="#pricing" className='text-white'>PRICING</Nav.Link>
                                        <Nav.Link href="#more" className='text-white'>MORE</Nav.Link>
                                    </Nav>

                                </Col>
                                <Col lg={4} className='imgend'>
                                    <Image src={require('../assets/images/price.png')} className='imginfo'></Image>
                                </Col>
                            </Navbar>
                        </Container>

                    </Row>
                </Col>
            </Row>
        </Container>

    )

}