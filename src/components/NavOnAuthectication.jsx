import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { auth } from "../firebase";

function AuthDetails(props) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
      alert("Logged out Successfully").catch((error) => console.error());
    });
  };

  return (
    <>
      {authUser ? (
        <>
          <Nav.Link href="/cart" className="cart-icon-link">
            <i className="cart-icon fa-solid fa-cart-shopping fa-xl"></i>
            <Badge className="cart-badge" bg="">
              9
            </Badge>
          </Nav.Link>

          <NavDropdown title={authUser.email} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <i className="fa-regular fa-user"></i> My Account
            </NavDropdown.Item>
            <NavDropdown.Item onClick={userSignOut}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </>
      ) : (
        <>
          <Nav.Link href="/signup">
            <Button variant="outline-dark">
              <i className="fa-solid fa-user-plus"></i> Sign-Up
            </Button>
          </Nav.Link>

          <Nav.Link href="/login">
            <Button variant="dark">
              <i className="fa-regular fa-user"></i> Login
            </Button>
          </Nav.Link>
        </>
      )}
    </>
  );
}

export default AuthDetails;
