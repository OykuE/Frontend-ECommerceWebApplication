import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navigator from "./Navigator";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Offers from "./Offers";

export default function Dashboard({ setCategory, products, addCart }) {
  return (
    <div>
      <Container className="main">
        <Row>
          <Col xs={5} md={3}>
            <Categories setCategory={setCategory} />
          </Col>
          <Col xs={13} md={9}>
            <Offers />
          </Col>
        </Row>
      </Container>
      <Container className="main">
        <ProductList products={products} addCart={addCart} />
      </Container>
    </div>
  );
}
