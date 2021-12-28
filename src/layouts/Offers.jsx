import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Offers() {
  return (
    <div style={{ marginBottom: "50px", marginTop: "50px" }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="offers.jpg" alt="First slide" />
          <Carousel.Caption>
            <h2>Discover Our Sport Selection</h2>
            <h4>-30% </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="offers.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h2>Holiday Gift Guide</h2>
            <h4>Find the perfect gifts for those closest to you</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="offers.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h2>Epic Daily Deals</h2>
            <h4>Shop early, save now</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
