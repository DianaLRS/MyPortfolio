import React from 'react';
import { Container, ListGroup, Col } from 'react-bootstrap';
// import '../assets/stylesheets/style.css'

function NonTechSkills(){

    const list =[ 'English', 'Spanish', 'Russian']
    const listItem = list.map((item) => (

        <p className='skills-items'>{item}</p>

    )
    );
    return (

    <div> 
 <Container className='skills-contnr '>
 <ListGroup horizontal className='first-row-two'> 
 <h4>Non-Technical Skills</h4>
 </ListGroup>
 <ListGroup horizontal className='skills-group'>   {listItem}</ListGroup>
 </Container>

    </div>
    );
}

export default NonTechSkills;