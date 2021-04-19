import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap/';
import '../assets/stylesheets/style.css' 


function Navigation() {
    return (
        <div>

            <Navbar  variant="dark" className='nav-bar'>
                <Container>
                    <Nav className="navs">
                        <Nav.Item>
                            <Nav.Link>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>About Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>My Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Contact Me</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
}

export default Navigation;