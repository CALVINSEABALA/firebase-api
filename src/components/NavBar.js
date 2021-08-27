import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import  Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';




const NavBar = () => {
    return (

        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/"> <img
                    src={'/favicon.ico'}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="NavBar logo"
                />News Feed</Navbar.Brand>

                <Nav className="link">
                    <Link to="./UserDetails">Users</Link>
                </Nav>
            </Container>
        </Navbar>
    )

};
export default NavBar;