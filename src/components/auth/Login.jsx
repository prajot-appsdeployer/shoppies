import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

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
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="display-4 text-center mt-3">Login to Shoppies</h1>
      <div className="login-form mt-5">
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
            <Link className="text-reset text-decoration-none" to="/signup">
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
    </>
  );
}

export default Login;
