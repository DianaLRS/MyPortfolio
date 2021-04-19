import React from 'react';
import { Row } from 'react-bootstrap';




function SectionDividers(props) {
    return (
        <div>
            <Row className='section-divider'>
                {props.children}
            </Row>
        </div>
    );
}

export default SectionDividers;