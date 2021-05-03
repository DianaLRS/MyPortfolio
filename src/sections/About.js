import React from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import TechSkills from '../components/TechSkills';
import '../assets/stylesheets/style.css'
import about from '../assets/images/about.jpg'
import NonTechSkills from '../components/NonTechSkills';

function About() {
    return (
        <div>
            <Container fluid className='about-cntnr'>
                <Row className="about-row">
                    <Col md={7} className='about-col left clearfix' id='about-text'>
                        <div className='img-txt-div'>
                            <p className=' img-txt'  > <Image src={about} roundedCircle className='thumbnail-pic' />
                         A determined and hard-working front-end web developer who loves mixing creativity and problem solving to deliver quality products. I aim to use my coding skills to help people in my under-served community breakout of the cycle of poverty and improve access to quality education.</p>
                        </div>
                        <div className='about-text-edu'>
                            <p> University of Texas at Austin</p>
                            <p>Coding Bootcamp in Full-Stack Web Development</p>
                            <p>B.A in Anthropology</p>
                            <p>B.A in Russian and Eastern European Studies</p>
                        </div>
                    </Col>
                    <Col md={5} className='about-col ' id='about-col-right'>
                        <TechSkills />
                    
                        <NonTechSkills />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;