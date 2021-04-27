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
                <Col md={3} className ='about-col left' id='about-pic-col'>
                <Image src={about} roundedCircle className='thumbnail-pic'/>
                </Col>
                <Col md={5} className ='about-col left' id='about-text'>
                <p> A determined and hard-working front-end web developer who loves mixing creativity and problem solving to deliver quality products. I aim to use my coding skills to help people in my under-served community breakout of the cycle of poverty and improve access to quality education.</p>
                <br/>
                <span className='about-text-edu'>
                <p> University of Texas at Austin</p>
                <p>Coding Bootcamp in Full-Stack Web Development</p>
                <p>B.A in Anthropology</p>
                <p>B.A in Russian and Eastern European Studies</p>
                </span>
                </Col>
                <Col md={4}className ='about-col' id='about-col-right'>
                    
                <TechSkills/>
                <br/>
                <NonTechSkills/> 
               
                </Col>
              
            </Row>
            </Container>
        </div>
    );
}

export default About;