import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Email from '../assets/logos/Email.png'
import Git from '../assets/logos/Git.png';
import Linkedin from '../assets/logos/Linkedin.png'

function Contact() {
    return (
        <div>

<Container fluid>

            <Row className='contact-row'>
        
                <div className='contact-container'>
                    <a target="blank" href="https://github.com/DianaLRS"> <img id="github" src={Git} className='contant-img' /> </a>

                    <a target="blank" href="https://www.linkedin.com/in/dianalrs/"  > <img id="linkedIn" src={Linkedin} className='contant-img' /></a>

                    <a href="mailto: dlramos194@gmail.comm"> <img src={Email} id="email" className='contant-img'/></a>
                </div>

            </Row>
   
          
            <Footer />
            </Container>
        </div>
    );
}

export default Contact;