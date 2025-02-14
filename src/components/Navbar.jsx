import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = ({ isLoggedIn, userEmail, onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Wood</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/location">Location</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
          {isLoggedIn ? (
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {userEmail}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={onLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
          <Button as={Link} to="/login" variant="outline-primary" className="me-2">Login</Button>
          <Button as={Link} to="/signup" variant="primary">Signup</Button>
          </>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;