import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >
                            <Link to="/" className='text-white'> Home </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/modalpage" className='text-white'> Modal </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/counter" className='text-white'> Counter </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/form" className='text-white'> Form </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/quiz" className='text-white'> Quiz </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}

export default NavbarComponent