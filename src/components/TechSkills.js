import React from 'react';
import { Col, Container, ListGroup } from 'react-bootstrap';
// import '../assets/stylesheets/style.css'


function TechSkills() {

    const list = ['HTML5', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express', 'MERN', 'NPM', 'JQuery', 'MongoDB', 'Mongoose', 'MySQL', 'Sequelize', 'Bootstrap', 'Material UI', 'UI Kit', 'React bootstrap', 'Git', 'Bash', 'Heroku', 'Handlebars', 'Third Party API',];
    const listItem = list.map((item) => (

        <li className='skills-items'>{item}</li>

    )
    );
    return (
        <div>



            {/* <h3 className='first-row'>Technical Skills</h3> */}
            <div className='skills-cntnr'>
                <ul className='skills-group ' > {listItem.slice(0, 8)}</ul>  
           
                <ul className='skills-group ' >{listItem.slice(8, 15)}</ul>
                <ul className='skills-group ' >{listItem.slice(15, 24)}</ul>
           </div>
        </div>
    );
}

export default TechSkills;