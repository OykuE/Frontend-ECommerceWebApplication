import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";

export default function ({ products, addCart }) {
  const [smShow, setSmShow] = useState(false);

  return (
    <div style={{ marginBottom: "50px" }}>
      <Row xs={2} md={4} className="g-4">
        {products &&
          products.map((product) => (
            <Col>
              <Card style={{ height: "400px", width: "200px" }}>
                <Card.Img
                  variant="top"
                  src={`data:image/jpeg;base64, ${product.image}`}
                  style={{ height: "250px", width: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price} $</Card.Text>
                </Card.Body>
                <Button
                  variant="secondary"
                  onClick={() => {
                    addCart(product);
                    setSmShow(true);
                  }}
                >
                  Add to Cart
                </Button>{" "}
              </Card>
            </Col>
          ))}
      </Row>
      {smShow && (
        <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Added to Cart!</Modal.Title>
          </Modal.Header>
        </Modal>
      )}
    </div>
  );
}
