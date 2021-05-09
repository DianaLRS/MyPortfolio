import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
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
                    <a target="blank" href="https://github.com/DianaLRS"> 
                    <Image id="github"  roundedCircle src={Git} className='contact-img' /> 
                    </a>

                    <a target="blank" href="https://www.linkedin.com/in/dianalrs/"  > 
                    <Image id="linkedIn"  roundedCircle src={Linkedin} className='contact-img' />
                    </a>

                    <a href="mailto: dlramos194@gmail.comm">
                         <Image src={Email}  roundedCircle id="email" className='contact-img'/>
                         </a>
                </div>

            </Row>
            </Container>
        </div>
    );
}

export default Contact;