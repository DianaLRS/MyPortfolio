import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import '../App.css'

// const styles = {
//     carousel: {
//         height: 320,
//         width: 600,
//         margin: "auto",
//         padding: 0,
//         backgroundColor: "black",
      
//     },
//     item: {
//         color: "black",
//         // backgroundColor: "red",
//         marginBottom: -20,
//         marginLeft: -58,
//         width: 530,
//         height: 80,
//         padding: 0
//     },
//     img: {
//         maxHeight: 360,
//         maxWidth: 580,
//         display: "block",
//         marginLeft: "auto",
//         marginRight: "auto",
//         padding:0,
//         marginTop: 10
//     },
//     title: {
//         // fontSize: "1rem",
//         marginLeft: 3,
//         paddingTop: 5
//     },
//     text: {
//         // fontSize: 15,
//         marginLeft: 3,
//         marginRight: 3
//     },
//     tech:{
//         // fontSize: 12,
//         marginLeft: 3,
//         paddingBottom: 3
//     },
//     col: {
       
//         margin: "auto", 
//     },
   
//     overlay:{
//         margin: "auto",
//         marginTop: 10,
//         backgroundColor:"#FEC3AD",
//         width: 600,
//         height: "fit-content",
//     },
// }

function Cards(props) {
    const mediaItem = props.mediaItems.map((item) => (
        <Col md={3} className='car-col'>
              <h3 className='headers' >{item.title}</h3>
            <Carousel className='projects-carousel' >
                {item.images.map((img, i) => (
                    <Carousel.Item interval={3000}>
                        <img className='project-imgs' src={img.src} alt={img.alt} />
                        <Carousel.Caption >
                            
                        </Carousel.Caption>
                        <p >{item.text}</p> 

                    </Carousel.Item>
                ))}   
            </Carousel>
             <div >    
         
         
            </div> 
        </Col>
    ))
    return (

        <div>

            <Row className='project-row' >
               
                {mediaItem.slice(0, 1)}
              
                {mediaItem.slice(1, 2)}
               
                {mediaItem.slice(2, 3)}
              
                {mediaItem.slice(3, 4)}
              
            </Row>

        </div>
    );
}

export default Cards;