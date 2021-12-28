import React, { useState } from "react";
import { Container, Form, FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function SignIn({
  setShowSignUp,
  setShowSignIn,
  setUserId,
  setAccount,
}) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        "http://localhost:5130/api/User/" + values.email + "/" + values.password
      )
      .then((response) => {
        console.log(response);

        setUserId(response.data[0]?.id);
        setAccount(response.data[0]);

        if (response.data.length !== 0) {
          setShowSignIn(false);
        }
      });
  };

  return (
    <div
      style={{
        marginLeft: "300px",
        marginRight: "300px",
        marginBottom: "100px",
        marginTop: "50px",
      }}
    >
      <img src="Welcome.jpg" alt="welcome" />
      <br />
      <br />
      <br />
      <br />
      <Form className="main" onSubmit={handleSubmit}>
        <FormControl
          value={values.email}
          onChange={(e) =>
            setValues({
              ...values,
              email: e.target.value,
            })
          }
          required
          className="mb-3"
          type="email"
          placeholder="Enter email"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <br />
        <FormControl
          value={values.password}
          onChange={(e) =>
            setValues({
              ...values,
              password: e.target.value,
            })
          }
          required
          className="mb-3"
          type="password"
          placeholder="Password"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <br />
        <Button variant="outline-success" size="lg" type="submit">
          Sign In
        </Button>{" "}
        <br />
        <br />
        <br />
        <label>Need an account? </label>
        <div>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => {
              setShowSignUp(true);
              setShowSignIn(false);
            }}
          >
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
}
