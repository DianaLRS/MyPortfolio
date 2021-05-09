import React from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import TechSkills from '../components/TechSkills';
import NonTechSkills from '../components/NonTechSkills';
import headshot from '../assets/images/headshot.jpeg'
import headshotfull from '../assets/images/headshotfull.jpeg'
import bwheadshot from '../assets/images/bwheadshot.jpeg'


function About() {
    return (
        <div>
            <Container fluid className='about-cntnr'>
                <Row className="about-row">
                    <Col className='about-col left' id='about-text'>
                        <div className='img-txt-div'>
                            <p className=' img-txt'  > 
                            <Image  className='thumbnail-pic' />
                            <br/>
                         A determined and hard-working front-end web developer who loves mixing creativity and problem solving to deliver quality products. I aim to use my coding skills to help people in my under-served community breakout of the cycle of poverty and improve access to quality education.</p>
                        </div>
                        <div className='about-text-edu'>
                            <p> University of Texas at Austin</p>
                            <p>Coding Bootcamp in Full-Stack Web Development</p>
                            <p>B.A in Anthropology</p>
                            <p>B.A in Russian and Eastern European Studies</p>
                        </div>
                    </Col>
                    </Row>
                 <Row className="skills-row">  
                     
                      <TechSkills />
                  
{/*                   
                    <NonTechSkills /> */}
                    
                </Row>
                     
                  
              
            </Container>
        </div>
    );
}

export default About;