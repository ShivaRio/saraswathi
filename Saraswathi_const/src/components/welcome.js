import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';

export default function Appwelcome() {
    return (
        <section id="services" className="block services-block">
            <Container fluid>
                <Container className="title">
                    <Row>
                        <Col md={8}>
                            <Stack gap={2} className='text-start'>
                                <h3>We Welcome You</h3>
                                <h4>About Us And Our Priorities</h4>
                                <p>Saraswathi Constructions an Engineering and Consultancy company handled by Professionals is Building <br></br> Projects in and around Chennai. House construction in chennai @ affordable price, chat with us & get contractor or builder help. We do interior for your dream house construction and get free interior design planning.</p>



                                <p> We are a construction group with an outstanding track record. Our number of constructions using branded products in and around the city speaks volumes about its Perfection, Aesthetic elegance, and user-friendly setup. New House construction contractor or Renovation construction company in Chennai or Professional buildings construction @ affordable price, we are one of best house construction contractors or builders in Chennai near <br></br> Velachery, Madipakkam, Chrompet, Tambaram, Pallavaram</p>
                            </Stack>
                        </Col>
                    </Row>
                    <Container>
                        <Row>
                            <Col xs={3}>
                                <ul className='list-unstyled'>
                                    <li className='text-start'>✓ Assured Quality</li>
                                    <li className='text-start'>✓ Quick Turnaround</li>
                                    <li className='text-start'>✓ Best Service</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <p className="text-start"><b>Mission : </b>To Deliver Quality Buildings</p>
                            <p className='text-start'><b>Vision : </b>To Serve the Humankind</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className='d-flex flex-row' >
                            <i className='fa-solid fa-building fs-1 p-1' ></i>
                            <div className='d-block'>
                                <p className='mb-0'><b>New Modern Technologies</b></p>
                                <p className='text-start pt-0'>New Model Homes</p>
                            </div>
                        </Col>

                        <Col className='d-flex flex-row' >
                            <i className='fa-solid fa-trophy fs-1 p-1' ></i>
                            <div className='d-block '>
                                <p className='mb-0'><b>Quality Is Our Pride</b></p>
                                <p className='text-start pt-0'>Best Quality in the Market</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-row' >
                            <i className='fa-solid fa-users fs-1 p-1' ></i>
                            <div className='d-block '>
                                <p className='mb-0'><b>Best Customer Reviews</b></p>
                                <p className='text-start pt-0'>Assured Reviews</p>
                            </div>
                        </Col>

                        <Col className='d-flex flex-row' >
                            <i className='fa-solid fa-shield-halved fs-1 p-1' ></i>
                            <div className='d-block '>
                                <p className='mb-0'><b>Awesome Stuff</b></p>
                                <p className='text-start pt-0'>High End Specification</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex flex-row' >
                            <i className='fa-solid fa-sitemap fs-1 p-1' ></i>
                            <div className='d-block '>
                                <p className='mb-0'><b>Professional Team Work</b></p>
                                <p className='text-start pt-0'>120+ workers</p>
                            </div>
                        </Col>

                        <Col className='d-flex flex-row' >
                            <i className='fa-solid fa-gears fs-1 p-1' ></i>
                            <div className='d-block '>
                                <p className='mb-0 me-5'><b>Good Planning</b></p>
                                <p className='text-start pt-0'>Best Architecture Plan and Elevation</p>
                            </div>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>






                </Container>

            </Container>
        </section>

    );
}

