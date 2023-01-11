import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="display-5 text-center mt-3">Create a new account</h1>
      <div className="signup-form mt-5">
        <Form id="signup" onSubmit={signUp}>
          <Form.Group className="mb-3 row" controlId="full-name">
            <div className="col-md-6">
              <Form.Label>First name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>

            <div className="col-md-6">
              <Form.Label>Last name </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Text className="text-muted">
            Already have an account?&nbsp;
            <Link className="text-reset text-decoration-none" to="/login">
              Login!
            </Link>
          </Form.Text>

          <div className="d-flex justify-content-center mt-2">
            <Button variant="dark" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
