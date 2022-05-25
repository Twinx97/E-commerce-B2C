import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Appbar = () => {
  return (
    <>
        <Navbar fixed="top" bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">Brand Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Support</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Cart</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Appbar