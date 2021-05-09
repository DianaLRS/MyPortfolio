import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap/';
// import '../assets/stylesheets/style.css' 


function Navigation() {
    return (
        <div>

            <Navbar  variant="dark" className='nav-bar'>
                <Container>
                    <Nav className="navs">
                        <Nav.Item>
                            <Nav.Link className='nav-link'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='nav-link'>About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='nav-link'>My Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='nav-link'>Contact Me</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
}

export default Navigation;