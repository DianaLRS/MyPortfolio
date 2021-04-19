import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import '../assets/stylesheets/style.css'

function NonTechSkills(){

    const list =[ 'English', 'Spanish', 'Russian']
    const listItem = list.map((item) => (

        <p className='skills-items'>{item}</p>

    )
    );
    return (

    <div> 
 <Container className='skills-contnr'>
 <ListGroup horizontal className='skills-group'> <span className='first-row two'>Non-Technical Skills:</span>   {listItem} </ListGroup>

 </Container>

    </div>
    );
}

export default NonTechSkills;