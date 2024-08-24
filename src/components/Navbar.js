import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../Assets/logo.png'; // Update with the path to your logo
import AdvertisementBar from './AdvertisementBar'; // Import the new component
import { Link } from 'react-scroll'; // Import Link from react-scroll

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
              <Nav.Link>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="products"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="categories"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Categories
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="catalogs"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Catalogs
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="about-us"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="contact-us"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Contact Us
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbar-spacer"></div> {/* Spacer to add space below the navbar */}
    </>
  );
};

export default NavbarComponent;
