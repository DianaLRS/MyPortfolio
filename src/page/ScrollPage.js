import React from 'react';
import Navigation from '../components/Navigation'
import Landing from '../sections/Landing'

import SectionDividers from '../components/SectionDividers';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';


// import '../assets/stylesheets/style.css'

function ScrollPage(props) {
    return (
        <div>
            <Navigation/>
            <Landing/>
            {/* <SectionDividers/> */}
            <About/>
            <SectionDividers/>
            <Projects/>
            <SectionDividers/>
            <Contact/>
        </div>
    );
}

export default ScrollPage;