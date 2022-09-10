import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Outlet } from 'react-router-dom';

import '../Styles/navbar.css';

const NavigationBar = () => {

    return (
        <div>
            <Container className="nav-container">
                <Navbar className="nav-bar" bg="nav-bar" variant="dark" fixed="top" expand="sm" collapseOnSelect>
                    <Link to="/" className="logo-link" style={{ zIndex: "0" }}>
                        <img className="logonav" src={require("../Images/logonav.jpg")} alt="C-cube" />
                        {/* <img className="logo" src={require("../Images/logo.jpg")} alt="C-cube" /> */}
                    </Link>
                    {/* Navigation bar style, hamburger display for smaller devices */}
                    <Navbar.Toggle className="nav-toggle" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="nav-collapse">

                        <Nav className="nav">
                            <Nav.Link className="nav-link" as={Link} to="/" eventKey={0}>Home</Nav.Link>
                            <Nav.Link className="nav-link" as={Link} to="/dashboard" eventKey={1}>Dashboard</Nav.Link>
                            <Nav.Link className="nav-link" as={Link} to="/login" eventKey={2}>Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
            <Outlet />
        </div>
    );
}

export default NavigationBar;