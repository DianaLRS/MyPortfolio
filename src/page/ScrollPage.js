import React from 'react';
import Navigation from '../components/Navigation'
import Landing from '../sections/Landing'
import SectionDividers from '../components/SectionDividers';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
// import MainWrapper from '../components/Wrapper';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';

function ScrollPage(props) {
    return (
        <div>
   
            <Landing/>
            <SectionDividers/>
            <About/>
            <Projects/>
        <Footer/>

        </div>
    );
}

export default ScrollPage;