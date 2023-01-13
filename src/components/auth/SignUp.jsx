import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import SignupSVG from "./Signup.svg";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (authState) => {
        const data = doc(db, "users", authState.user.uid);
        await setDoc(data, {
          uid: authState.user.uid,
          firstName: firstName,
          lastName: lastName,
          email: email,
        }).catch((err) => console.log(err.message));
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-lg-6">
            <h1 className="display-5 text-center">Create a new account</h1>
            <div className="signup-form mt-3">
              <Form id="signup" onSubmit={signUp}>
                <div className="row">
                  <Form.Group className="mb-3 col-md-6" controlId="first-name">
                    <Form.Label>First name </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 col-md-6" controlId="last-name">
                    <Form.Label>Last name </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </Form.Group>
                </div>

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
          </div>

          <div className="col-lg-6 mb-5 ">
            <img
              className="img-fluid "
              min-width="400px"
              src={SignupSVG}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
