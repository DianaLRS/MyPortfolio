import React from 'react';
import Navigation from '../components/Navigation'
import Landing from '../sections/Landing'
import SectionDividers from '../components/SectionDividers';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

function ScrollPage(props) {
    return (
        <div>
            <Navigation/>
            <Landing/>
            <About/>
            <SectionDividers/>
            <Projects/>
            <SectionDividers/>
            <Contact/>
        </div>
    );
}

export default ScrollPage;