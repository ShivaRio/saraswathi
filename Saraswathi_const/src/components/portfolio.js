import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import new4 from '..//assets/images/new_4.jpg';
import new5 from '..//assets/images/new_5.jpg';
import new1 from '..//assets/images/new_1.jpg';
import new3 from '..//assets/images/new_3.jpg';
import one from '..//assets/images/one.jpg';
import new2 from '..//assets/images/new_2.jpg';
import three from '..//assets/images/three.jpg';
import renow1 from '..//assets/images/renow1.jpg';
import two from '..//assets/images/two.jpg';
import renow3 from '..//assets/images/renow3.jpg';
import renow4 from '..//assets/images/renow4.jpg';
import renow2 from '..//assets/images/renow2.jpg';
import renow6 from '..//assets/images/renow6.jpg';
import renow5 from '..//assets/images/renow5.jpg';




export default function Appportfolio() {
    return (
        <section id="blog" className="block blog-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Portfolio</h2>
                    <p>We are committed to serve in order to fit your needs.<br></br>
                        Have a look at some of our recent project and greatest jobs below.</p>
                </div>
                <br></br>
                <Container>
                    <Row>
                        <Col>
                            <Card.Img src={new4} />
                            <Card.Body>
                                <br></br>
                            </Card.Body>

                        </Col>

                        <Col>
                            <Card.Img src={new5} />
                            <Card.Body>

                            </Card.Body>

                        </Col>

                        <Col>
                            <Card.Img src={new1} />
                            <Card.Body>

                            </Card.Body>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Img src={new3} />
                            <Card.Body>

                            </Card.Body>

                        </Col>

                        <Col>
                            <Card.Img src={one} />
                            <Card.Body>
                                <br></br>
                            </Card.Body>

                        </Col>

                        <Col>
                            <Card.Img src={new2} />
                            <Card.Body>

                            </Card.Body>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Img src={three} />
                            <Card.Body>
                                <br></br>
                            </Card.Body>

                        </Col>

                        <Col>
                            <Card.Img src={renow1} />
                            <Card.Body>

                            </Card.Body>

                        </Col>

                        <Col>
                            <Card.Img src={two} />
                            <Card.Body>

                            </Card.Body>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Img src={renow3} />
                            <Card.Body>
                                <br></br>
                            </Card.Body>

                        </Col>

                        <Col>
                            <Card.Img src={renow4} />
                            <Card.Body>

                            </Card.Body>

                        </Col>

                        <Col>
                            <Card.Img src={renow2} />
                            <Card.Body>

                            </Card.Body>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Img src={renow6} />
                            <Card.Body>
                                <br></br>
                            </Card.Body>

                        </Col>

                        <Col>
                            <Card.Img src={renow5} />
                            <Card.Body>

                            </Card.Body>

                        </Col>
                    </Row>
                </Container>
            </Container>
            <br></br>
            <br></br>
        </section>
        
    )
}
