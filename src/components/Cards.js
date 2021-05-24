import {React} from 'react';
import { Container, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css'
import { Redirect, Link } from "react-router-dom"



function Cards(props) {
    const mediaItem = props.mediaItems.map((item) => (
        <div className='car-col'>
            <h3 className='headers' >{item.title}</h3>
            <Carousel className='projects-carousel' >
                {item.images.map((img, i) => (
                    <Carousel.Item interval={3000}>    
                        <img className='project-imgs' src={img.src} alt={img.alt} />
                       <p className='card-txt'>{item.text} 
                       <br/>
                       <a href={item.url} target="_blank">Visit App   </a>
                       | 
                       <a href={item.git} target="_blank"> Github Repo </a>
                       </p> 
                    </Carousel.Item> 

                
                ))}
            </Carousel>
        </div>
    ))
    return (

        <div>

            <Row className='project-row' >
                {mediaItem.slice(0, 2)}
                {mediaItem.slice(2, 4)}
                {/* {mediaItem.slice(4,6)} */}

            </Row>

        </div>
    );
}

export default Cards;