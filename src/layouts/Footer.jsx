import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "black", padding: "50px" }}>
      <Container>
        <Row>
          <Col>
            <label style={{ color: "white" }}>
              <b>Store</b>
            </label>
            <br />
            <br />
            <a href="link" style={{ color: "white" }}>
              Store locations
            </a>
            <br />
            <a href="link" style={{ color: "white" }}>
              Store hours
            </a>
            <br />
            <a href="link" style={{ color: "white" }}>
              Store support
            </a>
          </Col>
          <Col>
            <label style={{ color: "white" }}>
              <b>Follow Us</b>
            </label>
            <br />
            <img src="social.jpg" href="link" style={{ height: "100px" }}></img>
          </Col>
          <Col>
            <label style={{ color: "white" }}>
              <b>About Us</b>
            </label>
            <br />
            <br />
            <a href="link" style={{ color: "white" }}>
              Our story
            </a>
            <br />
            <a href="link" style={{ color: "white" }}>
              Careers with store
            </a>
            <br />
            <a href="link" style={{ color: "white" }}>
              News
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
