import React from 'react';
import { Container, Row } from 'react-bootstrap';




function SectionDividers(props) {
    return (
        <div>
            <Container fluid>
            <Row className='section-divider'>
                {props.children}
            </Row>
            </Container>
        </div>
    );
}

export default SectionDividers;