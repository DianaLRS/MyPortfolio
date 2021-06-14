import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Media from '../components/Media';
import Construction from '../assets/images/Construction.jpg';

function Projects() {
    return (
        <div>   
      <Media/>
            <Row className='psa-cont'>
          
           <Col className='psa' md={7}>      
           <Image className='under-contruction-img' src={Construction} alt='funny-img'/>
                <h3 > I'm currently undergoing some cosmetic changes.</h3> 
                <h3 > Please be patient.</h3>
                 <h3> Websites have insecurities too.</h3>
            </Col>  

            </Row>

            

         
       
        </div>
    );
}

export default Projects;