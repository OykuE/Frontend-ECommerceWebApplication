import React from "react";
import Nav from "react-bootstrap/Nav";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import {
  faArchive,
  faBasketballBall,
  faBook,
  faDesktop,
  faLaptop,
  faLaptopCode,
  faMusic,
  faTableTennis,
  faTshirt,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ({ setCategory }) {
  function alertClicked() {
    alert("You clicked the third ListGroupItem");
  }
  return (
    <div style={{ marginBottom: "50px", marginTop: "50px" }}>
      <ListGroup>
        <ListGroup.Item variant="light">
          <b>Categories</b>
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => setCategory("fashion")}
          variant="dark"
        >
          <FontAwesomeIcon icon={faTshirt} /> Fashion
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => setCategory("technology")}
          variant="dark"
        >
          <FontAwesomeIcon icon={faLaptop} /> Technology
        </ListGroup.Item>

        <ListGroup.Item
          action
          onClick={() => setCategory("book")}
          variant="dark"
        >
          <FontAwesomeIcon icon={faBook} /> Book
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => setCategory("sport")}
          variant="dark"
        >
          <FontAwesomeIcon icon={faTableTennis} /> Sport
        </ListGroup.Item>
        <ListGroup.Item
          action
          onClick={() => setCategory("kitchen")}
          variant="dark"
        >
          <FontAwesomeIcon icon={faWineGlass} /> Kitchen
        </ListGroup.Item>

        <ListGroup.Item
          action
          onClick={() => setCategory("music")}
          variant="dark"
        >
          <FontAwesomeIcon icon={faMusic} /> Music
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
