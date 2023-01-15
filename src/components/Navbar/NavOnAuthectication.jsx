import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { auth } from "../../firebase";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/Context";

function AuthDetails() {
  const { GlobalState, userState } = useContext(CartContext);
  const cartItems = GlobalState.state;

  const userSignOut = () => {
    signOut(auth).then(() => {
      alert("Logged out Successfully").catch((error) => console.error());
    });
  };

  return (
    <>
      {userState ? (
        <>
          <Nav.Item className="me-3">
            <NavLink to="/wishlist" className="cart-icon-link ">
              <i className=" cart-icon fa-solid fa-clipboard-list fa-xl"></i>
            </NavLink>
          </Nav.Item>

          <Nav.Item className="me-2">
            <NavLink to="/cart" className="cart-icon-link ">
              <i className="cart-icon fa-solid fa-cart-shopping fa-xl"></i>
              <Badge className="cart-badge" bg="">
                {cartItems.length}
              </Badge>
            </NavLink>
          </Nav.Item>

          <NavDropdown title={userState.displayName} id="basic-nav-dropdown">
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
