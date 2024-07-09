import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function Appservicearea() {
    return (
        <section id="services" className="block services-block">
            <Container fluid>
                <Container className="title">
                    <Row>
                        <Col md={8}>
                            <Stack className='text-start'>
                                <h3>Our Service Area</h3>
                                <p>Adambakkam, Madipakkam, Ullagarm, Pallikaranai, Velachery,<br></br> Medavakkam, Puzhutivakkam, Tambaram and All Over Chennai city</p>
                                <br></br>
                                <h4 className='set'>contact us soon</h4>
                                <h3>Quality.Safety.Experience</h3>
                                <p className='text-justify'>Saraswathi Constructions have plenty of opportunity to expand our<br></br> procedures based on industry experience. Saraswathi Constructions has<br></br> a reputation for quality building. The key to attain the results you desire is<br></br> by the support of our clients throughout the process. Saraswathi<br></br> Constructions is a true partner in the constructions process since<br></br> your goals become our aims. To complete the work, we collaborate<br></br> with skilled local trade partners and ensure that our safety and<br></br> quality requirements are met.</p>
                            </Stack>
                        </Col>
                        <Col className='cal bg-dark text-white'>
                            <Form>
                                <Row className="mb-3 bg-dark">
                                    <Form.Group
                                        as={Col}
                                        className="text-start mb-3"
                                        controlId="formFullName"
                                    >
                                        <Form.Label className="bg-dark">
                                            Name
                                        </Form.Label>
                                        <Form.Control type="text" placeholder="Your name" />
                                    </Form.Group>

                                    <Form.Group
                                        as={Col}
                                        className="text-start mb-3 bg-dark"
                                        controlId="formUsername"
                                    >
                                        <Form.Label className="text-center bg-dark">
                                            Email
                                        </Form.Label>
                                        <InputGroup>
                                            <Form.Control
                                                type="email"
                                                placeholder="Your Email address"
                                            />

                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 bg-dark">
                                    <Col>

                                        <Form.Group
                                            as={Col}
                                            className="text-start mb-3"
                                            controlId="formsubject"
                                        >
                                            <Form.Label className="text-start">
                                                Subject
                                            </Form.Label>
                                            <Form.Control type="text" placeholder="Your subject" />
                                        </Form.Group>
                                    </Col>
                                    <Col>

                                        <Form.Group
                                            className='text-start'
                                            controlId="phoneNumber"  >
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                placeholder="Your phone number"
                                            />

                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="text-start mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>How Can We Help You...</Form.Label>
                                            <Form.Control
                                                placeholder='Write Your Messsage Here'
                                                style={{ height: '100px' }}
                                            />
                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Col>
                                    <div className="text-start msg">Solve</div> <br></br>
                                    <h2 className='text-start'>2+7</h2>
                                    <div className='text-start'>
                                        <input type="text-start number" name="captcha" placeholder="Enter the answer" required=""></input>
                                    </div>
                                    <br></br>
                                    <Button variant="warning text-white">REQUEST QUOTE</Button>{' '}
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </Container>
            </Container>
        </section>

    );
}
