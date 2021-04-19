import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import '../assets/stylesheets/style.css'


function TechSkills() {

    const list = ['HTML5', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express', 'MERN', 'NPM','JQuery', 'MongoDB', 'Mongoose', 'MySQL', 'Sequelize', 'Bootstrap', 'UI-Kit', 'Material-UI', 'React-bootstrap', 'Git', 'Bash', 'Heroku', 'Handlebars', 'Third-Party APIs',];
    const listItem = list.map((item) => (

        <p className='skills-items'>{item}</p>

    )
    );
    return (
        <div>

            <Container className='skills-contnr'>

              
                <ListGroup horizontal className='skills-group'  >  <span className='first-row'>Technical Skills:</span>  {listItem.slice(0, 4)} </ListGroup>
                <ListGroup horizontal className='skills-group rows' >{listItem.slice(4, 10)}</ListGroup>
                <ListGroup horizontal className='skills-group rows' >{listItem.slice(10, 16)}</ListGroup>
                <ListGroup horizontal className='skills-group rows' >{listItem.slice(16, 24)}</ListGroup>
            </Container>
        </div>
    );
}

export default TechSkills;