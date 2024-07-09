import React from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Image, Row } from 'react-bootstrap';





export default function Appheaders() {
    return (
        <Container>
            <Row>
                <Col>
                    <Image src={require('./img/scs logo.png')} className="custom-logo" alt="Logo"></Image>
                </Col>
                <Col>
                    <i className="border fa fa-phone fs-1 p-1 mt-4 me-5" style={{ color: "yellow", fontSize: "30px" }} ></i>
                    <div className='d-inline-block'>
                        <p className='d-inline pt-3 fs-6 me-5'>Call Us</p>
                        <p className='d-call fs-6 me-5'>+91 80727 98551</p>
                    </div>
                </Col>

                <Col>
                    <i className="border fa fa-envelope fs-1 p-1 mt-4 me-5" style={{ color: "yellow", fontSize: "30px" }} ></i>
                    <div className='d-inline-block'>
                        <p className='d-inline pt-3 fs-6 me-5'>Mail Us</p>
                        <p className='d-call fs-6 me-5'>nanandn@gmail.com</p>
                    </div>
                </Col>
            </Row>
        </Container>

    )

}