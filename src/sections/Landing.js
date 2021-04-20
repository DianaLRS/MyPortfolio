import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

function Landing() {
    return (
        <div>
            <Row className='landing-space'>
                <Col className='landing-col'></Col>
                <Col className='landing-col' id='text-col'>
                <Container className='landing-text'>
                    <h1 id="landing-hdr">HELLO!</h1>
                    <h3 id='landing-intro'>I'm Diana</h3>
                    <p id='landing-txt'> I code user-friendly apps and websites</p>
               </Container> 
               </Col>
              

            </Row>
        </div>
    );
}

export default Landing;