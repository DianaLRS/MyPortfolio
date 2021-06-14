import React from 'react';
import {  Row, Image, Container } from 'react-bootstrap';
import TechSkills from '../components/TechSkills';



function About() {
    return (
        <div>
            <Container fluid className='about-cntnr'>
                <Row className="about-row">
                    <br />
                    <div className=" txt-div">  
                    <Image className='thumbnail-pic about-col' />
                        <div className=' img-txt'>
                            <p>A determined and hard-working front-end web developer who loves mixing creativity and problem solving to deliver quality products. I aim to use my coding skills to help people in my under-served community breakout of the cycle of poverty and improve access to quality education.</p>
                        </div>

                        <div className='about-text-edu'>
                            <p> University of Texas at Austin</p>
                            <p>Coding Bootcamp in Full-Stack Web Development</p>
                            <p>B.A in Anthropology</p>
                            <p>B.A in Russian and Eastern European Studies</p>
                        </div>

                    </div>
                    <div className='skills-row'>
                        <TechSkills />
                    </div>

                </Row>
            </Container>
        </div>
    );
}

export default About;