import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import '../App.css'



function Cards(props) {
    const mediaItem = props.mediaItems.map((item) => (
        <div className='car-col'>
            <h3 className='headers' >{item.title}</h3>
            <Carousel className='projects-carousel' >
                {item.images.map((img, i) => (
                    <Carousel.Item interval={3000}>
                        <img className='project-imgs' src={img.src} alt={img.alt} />
                        <p >{item.text}</p>

                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    ))
    return (

        <div>

            <Row className='project-row' >
                {mediaItem.slice(0, 3)}
                {mediaItem.slice(3, 4)}

                </Row>

                {/* <Row className='project-row' >
                {mediaItem.slice(3, 6)}
            </Row> */}

        </div>
    );
}

export default Cards;