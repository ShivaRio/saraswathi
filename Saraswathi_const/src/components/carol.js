import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/images/slide-1.jpg';
import slide2 from '../assets/images/slide-2.jpg';
import slide3 from '../assets/images/slide-3.jpg';
import Button from 'react-bootstrap/Button';
import { Container, InputGroup, Row, Col, Form, Card } from 'react-bootstrap';

export default function Appcarol() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img src={slide1} text="First slide" />
                <Carousel.Caption className='carousel-caption'>
                    <h3>NEW CONSTRUCTION</h3>
                    <Button variant="warning">GET A QUOTE</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide2} text="Second slide" />
                <Carousel.Caption className='carousel-caption'>
                    <h3>COMPLETE INTERIOR SOLUTIONS</h3>
                    <Button variant="warning">GET A QUOTE</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide3} text="Third slide" />
                <Carousel.Caption className='carousel-caption'>
                    <h3>RENOVATION OF EXISTING HOMES</h3>
                    <Button variant="warning">GET A QUOTE</Button>{' '}

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        
    );
}

