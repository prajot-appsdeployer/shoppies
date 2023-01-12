import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthDetails from "./NavOnAuthectication";

function NavBar({ totalItem }) {
  return (
    <Navbar id="navbar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <i className="fa-solid fa-store fa-2xl"></i> Shoppies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <>
              <AuthDetails totalItem={totalItem} />
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
