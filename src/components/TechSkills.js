import React from 'react';
import { Col, Container, ListGroup } from 'react-bootstrap';
// import '../assets/stylesheets/style.css'


function TechSkills() {

    const list = ['HTML5-', 'CSS-', 'JavaScript-',  'React.js-', 'Node.js-', 'Express-', 'MERN-', 'NPM','JQuery-', 'MongoDB-', 'Mongoose-', 'MySQL-', 'Sequelize-', 'Bootstrap-', 'Material UI','UI Kit-',  'React bootstrap-', 'Git-', 'Bash-', 'Heroku-', 'Handlebars-', 'Third Party API',];
    const listItem = list.map((item) => (

        <p className='skills-items'>{item}</p>

    )
    );
    return (
        <div>

            <Container className='skills-contnr '>
              
                {/* <h3 className='first-row'>Technical Skills</h3> */}
          
                <ListGroup horizontal className='skills-group ' > {listItem.slice(0,8)}</ListGroup>
                <ListGroup horizontal className='skills-group ' >{listItem.slice(8, 15)}</ListGroup>
                <ListGroup horizontal className='skills-group ' >{listItem.slice(15, 24)}</ListGroup>
                {/* <ListGroup horizontal className='skills-group ' >{listItem.slice(19, 24)}</ListGroup> */}
            </Container>
        </div>
    );
}

export default TechSkills;