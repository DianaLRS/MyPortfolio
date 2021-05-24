
import React from "react";
import ScrollPage from './page/ScrollPage';
import './App.css'
// import '../src/assets/stylesheets/style.css'
import Navigation from './components/Navigation';
// import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Landing from '../src/sections/Landing'



function App() {
  return (
  <Router>
    <div>

      <Navigation/>
  

      <ScrollPage className="scroll-page"/>

    </div>
</Router>
  );
}

export default App;
