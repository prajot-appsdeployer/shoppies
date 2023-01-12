import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import AuthDetails from "./NavOnAuthectication";

function NavBar() {
  return (
    <Navbar
      sticky="top"
      id="navbar"
      variant="light"
      expand="lg"
      className="shadow"
    >
      <Container>
        <NavLink to="/" className="text-decoration-none">
          <Navbar.Brand>
            <i className="fa-solid fa-store fa-2xl"></i> Shoppies
          </Navbar.Brand>
        </NavLink>
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
