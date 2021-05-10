import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <Container fluid>
            <Row className='footer'>
                <p> @made with react (2021)</p>
            </Row>
            </Container>
        </div>
    );
}

export default Footer;