import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { contains } from "dom-helpers";
import { Container, Form, FormControl, Modal } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHome,
  faShoppingCart,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Navigator({
  setShowSignIn,
  setShowSignUp,
  setShowCart,
  userId,
  setUserId,
  accountValues,
  setAccountValues,
}) {
  const [showAccountModal, setShowAccountModal] = useState(false);

  const handleSubmit = () => {
    axios
      .put("http://localhost:5130/api/User", accountValues)
      .then((response) => {
        setShowAccountModal(false);
      });
    setShowSignIn(false);
    setShowSignUp(false);
    setShowCart(false);
  };

  const deleteAccount = () => {
    console.log(accountValues);
    axios
      .delete("http://localhost:5130/api/User?id=" + accountValues.id)
      .then((response) => {
        setShowAccountModal(false);
        setUserId(null);
      });
    setShowAccountModal(false);
    setShowSignIn(false);
    setShowSignUp(false);
    setShowCart(false);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Item>
              <Button
                variant="success"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  setShowSignIn(false);
                  setShowSignUp(false);
                  setShowCart(false);
                }}
              >
                <FontAwesomeIcon icon={faHome} />
                <b> Home</b>
              </Button>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            {userId ? (
              <>
                <Nav.Item>
                  <Button
                    variant="warning"
                    style={{ color: "White" }}
                    onClick={() => {
                      setShowSignIn(false);
                      setShowSignUp(false);
                      setShowCart(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                  </Button>{" "}
                </Nav.Item>
                <Nav.Item>
                  <Button
                    variant="warning"
                    style={{ color: "White", marginLeft: "10px" }}
                    onClick={() => {
                      setShowAccountModal(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faUser} /> Account Settings
                  </Button>{" "}
                </Nav.Item>
              </>
            ) : (
              <Nav.Item>
                <Button
                  variant="success"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    setShowSignIn(true);
                    setShowSignUp(false);
                    setShowCart(false);
                  }}
                >
                  <FontAwesomeIcon icon={faSignInAlt} /> Sign In
                </Button>{" "}
              </Nav.Item>
            )}
          </Nav>
        </Container>
      </Navbar>
      {showAccountModal && (
        <Modal
          show={showAccountModal}
          onHide={() => setShowAccountModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Account Settings</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form className="main" onSubmit={handleSubmit}>
              <FormControl
                value={accountValues.name}
                onChange={(e) =>
                  setAccountValues({
                    ...accountValues,
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
                value={accountValues.surname}
                onChange={(e) =>
                  setAccountValues({
                    ...accountValues,
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
                value={accountValues.email}
                onChange={(e) =>
                  setAccountValues({
                    ...accountValues,
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
                value={accountValues.password}
                onChange={(e) =>
                  setAccountValues({
                    ...accountValues,
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
                value={accountValues.address}
                onChange={(e) =>
                  setAccountValues({
                    ...accountValues,
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
            </Form>
            <Button variant="danger" size="lg" onClick={() => deleteAccount()}>
              Delete Account
            </Button>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowAccountModal(false)}
            >
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
