import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Button, Alert } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function CartSummary({
  cart,
  totalPrice,
  setTotalPrice,
  userId,
}) {
  const [showBuyToast, setShowBuyToast] = useState(false);

  const decreaseItem = (item) => {
    if (cart[item.id].quantity > 1) {
      cart[item.id].price = cart[item.id].price - item.price / item.quantity;
      cart[item.id].quantity = cart[item.id].quantity - 1;
      setTotalPrice(totalPrice - item.price / item.quantity);
    }
    console.log(cart[item.id]);
    console.log(item);
  };

  const increaseItem = (item) => {
    if (item.quantity === 0) {
      cart[item.id].price = cart[item.id].price + item.price;
      cart[item.id].quantity = cart[item.id].quantity + 1;
    } else {
      cart[item.id].price = cart[item.id].price + item.price / item.quantity;
      cart[item.id].quantity = cart[item.id].quantity + 1;
    }

    setTotalPrice(totalPrice + item.price / item.quantity);
    console.log(cart[item.id]);
    console.log(item);
  };

  const deleteItem = (item) => {
    console.log(item);
    cart[cart.indexOf(item)] = null;
    setTotalPrice(totalPrice - item.price);
    console.log(cart);
  };

  const buyNowClick = () => {
    console.log(cart);
    if (totalPrice > 0) {
      cart.map((item) => {
        if (item !== null) {
          let orderProduct = {
            productId: item.id,
            userId: userId,
            quantity: item.quantity,
          };
          console.log(orderProduct);
          axios
            .post("http://localhost:5130/api/Order", orderProduct)
            .then((response) => {
              console.log(response);
            });
        }
      });

      setShowBuyToast(true);
    }
    cart.map((item) => {
      if (item) {
        deleteItem(item);
      }
    });
    setTotalPrice(0);
  };

  return (
    <div style={{ marginTop: "100px", marginBottom: "400px" }}>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            {cart &&
              cart.map((item) => (
                <>
                  {item && (
                    <Card style={{ width: "28rem", marginBottom: "25px" }}>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.price} $</Card.Text>
                        <Button
                          variant="outline-warning"
                          size="sm"
                          style={{ marginRight: "10px" }}
                          onClick={() => {
                            decreaseItem(item);
                          }}
                        >
                          <b>-</b>
                        </Button>
                        <label>
                          <b>{item.quantity}</b>
                        </label>
                        <Button
                          variant="outline-success"
                          size="sm"
                          style={{ marginLeft: "10px" }}
                          onClick={() => {
                            increaseItem(item);
                          }}
                        >
                          <b>+</b>
                        </Button>
                        <br />
                        <br />
                        <Button
                          variant="danger"
                          onClick={() => deleteItem(item)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </Card.Body>
                    </Card>
                  )}
                </>
              ))}
          </Col>
          <Col xs={6} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Total Price</Card.Title>
                <Card.Text>{totalPrice} $</Card.Text>
                <Button onClick={() => buyNowClick()} variant="success">
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {showBuyToast && (
        <>
          <br />
          <Alert variant="success">
            Your order has been received, thank you!
          </Alert>
        </>
      )}
    </div>
  );
}
