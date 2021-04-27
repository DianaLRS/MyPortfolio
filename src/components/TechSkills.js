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

            <div className='skills-contnr'>
                <ListGroup horizontal  className='first-row'> Technical Skills</ListGroup>
                <ListGroup horizontal className='skills-group ' > {listItem.slice(0, 6)}</ListGroup>
                <ListGroup horizontal className='skills-group ' >{listItem.slice(6, 12)}</ListGroup>
                <ListGroup horizontal className='skills-group ' >{listItem.slice(12, 17)}</ListGroup>
                <ListGroup horizontal className='skills-group ' >{listItem.slice(17, 24)}</ListGroup>
            </div>
        </div>
    );
}

export default TechSkills;