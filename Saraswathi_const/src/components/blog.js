import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import home from '..//assets/images/home.jpg';



export default function Appblog() {
    return (
        <section id="blog" className="block blog-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Latest Blog Post</h2>
                </div>
                <br></br>
                <Container>
                    <Row>
                        <Col>
                            <Card.Img src="" />
                            <Card.Body>

                            </Card.Body>
                            <br></br>

                        </Col>

                        <Col>
                            <Card.Img src={home} />
                            <Card.Body>
                                <br></br>

                                <Card.Title className='text-start'>New Constructions</Card.Title>
                                <br></br>
                                <Card.Text className='text-start'>
                                    New buildÂ is a term that denotes new constructions structures of all types such as houses, apartments, office blocks and so on.
                                </Card.Text>
                            </Card.Body>
                            <br></br>

                        </Col>

                        <Col>
                            <Card.Img src="" />
                            <Card.Body>
                                <br></br>

                            </Card.Body>
                            <br></br>
                           

                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <h2>Thanking You All...!</h2>
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