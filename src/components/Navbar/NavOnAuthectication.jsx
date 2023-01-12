import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { auth } from "../../firebase";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/Context";

function AuthDetails() {
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

  const GlobalState = useContext(CartContext);
  const cartItems = GlobalState.state;

  return (
    <>
      {authUser ? (
        <>
          <Nav.Item>
            <NavLink to="/cart" className="cart-icon-link ">
              <i className="cart-icon fa-solid fa-cart-shopping fa-xl"></i>
              <Badge className="cart-badge" bg="">
                {cartItems.length}
              </Badge>
            </NavLink>
          </Nav.Item>

          <NavDropdown title={authUser.email} id="basic-nav-dropdown">
            <NavDropdown.Item>
              <i className="fa-regular fa-user"></i> My Account
            </NavDropdown.Item>
            <NavDropdown.Item onClick={userSignOut}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </>
      ) : (
        <>
          <Nav.Item>
            <NavLink to="/signup">
              <Button variant="outline-dark" className="m-2">
                <i className="fa-solid fa-user-plus"></i> Sign-Up
              </Button>
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to="/login">
              <Button variant="dark" className="m-2">
                <i className="fa-regular fa-user"></i> Login
              </Button>
            </NavLink>
          </Nav.Item>
        </>
      )}
    </>
  );
}

export default AuthDetails;