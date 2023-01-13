import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

import LoginSVG from "./Login.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className=" container mt-5">
        <div className="row ">
          <div className="col-lg-6 mb-5">
            <img
              className="img-fluid "
              min-width="400px"
              src={LoginSVG}
              alt=""
            />
          </div>

          <div className="col-lg-6 mb-5">
            <h1 className="display-5 text-center ">Login to Shoppies</h1>
            <div className="login-form mt-3">
              <Form id="login" onSubmit={signIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
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

                <Form.Group className="mb-2" controlId="formBasicPassword">
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

                <Form.Text className="text-muted ">
                  Don't have an account?&nbsp;
                  <Link
                    className="text-reset text-decoration-none"
                    to="/signup"
                  >
                    Sign Up!
                  </Link>
                </Form.Text>

                <div className="d-flex justify-content-center mt-2">
                  <Button variant="dark" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
