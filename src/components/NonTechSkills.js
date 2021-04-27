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
 <div className='skills-contnr'>
 <ListGroup horizontal className='first-row-two'> Non-Technical Skills</ListGroup>
 <ListGroup horizontal className='skills-group'>   {listItem}</ListGroup>
 </div>

    </div>
    );
}

export default NonTechSkills;