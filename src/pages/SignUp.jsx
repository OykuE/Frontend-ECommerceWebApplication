import React, { useState } from "react";
import { Container, Form, FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function SignUp({ setShowSignIn, setShowSignUp }) {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    address: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5130/api/User", values).then((response) => {
      //TODO kullanici basariyla oluşturuldu uyarısı
      console.log(response);
      setShowSignUp(false);
    });
  };

  return (
    <div
      style={{
        marginLeft: "250px",
        marginRight: "250px",
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
          value={values.name}
          onChange={(e) =>
            setValues({
              ...values,
              name: e.target.value,
            })
          }
          required
          className="mb-3"
          placeholder="Name"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <FormControl
          value={values.surname}
          onChange={(e) =>
            setValues({
              ...values,
              surname: e.target.value,
            })
          }
          required
          className="mb-3"
          placeholder="Surname"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
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
          placeholder="E-mail"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
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
        <FormControl
          value={values.address}
          onChange={(e) =>
            setValues({
              ...values,
              address: e.target.value,
            })
          }
          required
          className="mb-3"
          as="textarea"
          placeholder="Address"
          style={{ height: "100px" }}
        />
        <br />
        <Button variant="outline-success" size="lg" type="submit">
          Sign Up
        </Button>{" "}
        <br />
        <br />
        <br />
        <br />
        <label>Already have an account?</label>
        <br />
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => {
            setShowSignIn(true);
            setShowSignUp(false);
          }}
        >
          Sign In
        </Button>
      </Form>
    </div>
  );
}
