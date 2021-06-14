
import React from "react";
import Landing from './pages/Landing';
import About from './pages/About'
import Projects from './pages/Projects';
import './App.css';
import Navigation from "./components/Navigation";
import SectionDividers from "./components/SectionDividers";
import Footer from "./components/Footer";





function App() {
  return (

    <div>

<Navigation/>
<Landing/>
<SectionDividers/>
<About/>
<Projects/>
<Footer/>



    </div>

  );
}

export default App;
