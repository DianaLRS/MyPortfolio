import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import Contact from './Contact';

function Landing() {
    return (
        <div>
            <Container fluid>
            <Row className='landing-space'>
            
                <Col className='landing-col' id='text-col'>
                <div className='landing-text'>
                    <h1 id="landing-hdr"> H E L L O ! </h1>
                    <h2 id='landing-intro'>I'm Diana.</h2>
                    <h3 id='landing-txt'> I code user-friendly apps and websites.</h3>
                    <Contact/>
                    {/* <p id='landing-txt'> I code user-friendly apps and websites</p> */}
               </div> 

               
               </Col>
              

            </Row>
            </Container>
            </div>
   
    );
}

export default Landing;