import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Email from '../assets/logos/Email.png'
import Git from '../assets/logos/Git.png';
import Linkedin from '../assets/logos/Linkedin.png'

function Contact() {
    return (
        <div>

            <Row className='contact-row'>
        
                <Container className='contact-container'>
                    <a target="blank" href="https://github.com/DianaLRS"> <img id="github" src={Git} /> </a>

                    <a target="blank" href="https://www.linkedin.com/in/dianalrs/"  > <img id="linkedIn" src={Linkedin} /></a>

                    <a href="mailto: dlramos194@gmail.comm"> <img src={Email} id="email" /></a>
                </Container>

            </Row>
            <Footer />
        </div>
    );
}

export default Contact;