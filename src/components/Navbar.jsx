import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthDetails from "./auth/NavOnAuthectication";

function NavBar() {
  return (
    <Navbar id="navbar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <i className="fa-solid fa-store fa-xl"></i> Shoppies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <>
              <AuthDetails />
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
