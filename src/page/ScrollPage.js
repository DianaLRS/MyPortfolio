import React from 'react';
import Navigation from '../components/Navigation'
import Landing from '../sections/Landing'
import SectionDividers from '../components/SectionDividers';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
// import MainWrapper from '../components/Wrapper';
import { Container } from 'react-bootstrap';

function ScrollPage(props) {
    return (
        <div>
      {/* <Container fluid> */}
            <Landing/>
            <SectionDividers/>
            <About/>
            {/* <SectionDividers/> */}
            <Projects/>
            <SectionDividers/>
            <Contact/>
   {/* </Container> */}
        </div>
    );
}

export default ScrollPage;