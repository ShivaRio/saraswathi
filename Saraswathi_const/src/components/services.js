import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import services1 from '..//assets/images/service-1.jpg';
import services2 from '..//assets/images/service-2.jpg';
import services3 from '..//assets/images/service-3.jpg';


export default function Appservices() {
    return (
        <section id="blog" className="block blog-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our Services</h2>
                    <p>We take up Projects from scratch to finish, from discussion to design, coordination with our Architect/<br></br> Consultant and implementation of ideas at site. We bring into our Engineering Expertise to make the whole process simple and cost effective.</p>
                </div>
                <br></br>
                <Container>
                    <Row>
                        <Col>
                            <Card.Img src={services1} />
                            <Card.Body>
                                <br></br>

                                <Card.Title>New Residential Buildings</Card.Title>
                                <br></br>
                                <Card.Text>
                                    'New build' is a term that denotes new construction of all types of structures such as houses, apartments, office blocks and so on.
                                </Card.Text>
                            </Card.Body>
                            <br></br>

                        </Col>

                        <Col>
                            <Card.Img src={services2} />
                            <Card.Body>
                                <br></br>

                                <Card.Title>Renovation of Existing Homes</Card.Title>
                                <br></br>
                                <Card.Text>
                                    Renovation is the process of improving a broken or outdated structure. Renovations are of commercial or residential type.
                                </Card.Text>
                            </Card.Body>
                            <br></br>

                        </Col>

                        <Col>
                            <Card.Img src={services3} />
                            <Card.Body>
                                <br></br>

                                <Card.Title>Complete Interior Solutions</Card.Title>
                                <br></br>
                                <Card.Text>
                                    At Interior Solutions, our services represent our investment in excellence. Well design to your specifications, cater to your success.
                                </Card.Text>
                            </Card.Body>
                            <br></br>

                        </Col>
                    </Row>
                </Container>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </section>
    )
}










