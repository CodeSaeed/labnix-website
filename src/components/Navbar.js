import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../Assets/logo.png'; // Update with the path to your logo
import AdvertisementBar from './AdvertisementBar'; // Import the new component

const NavbarComponent = () => {
  return (
    <>
      <AdvertisementBar /> {/* Include the advertisement bar */}

      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Products</Nav.Link>
              <Nav.Link href="#">Categories</Nav.Link>
              <Nav.Link href="#">Catalogs</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbar-spacer"></div> {/* Spacer to add space below the navbar */}
    </>
  );
};

export default NavbarComponent;
