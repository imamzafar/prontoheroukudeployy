import React from "react";
import { Carousel, Image, Button } from "react-bootstrap";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  return (
    <>
      <Carousel
        pause="hover"
        indicators={false}
        className="bg-dark pro-carousel"
      >
        <Carousel.Item className="pro-carousel-item">
          <Image src="/img/Carousel_2.png" />
          <Carousel.Caption>
            <h6>Weekend Promotion</h6>
            <h3>
              HAPPY SUMMER COMBO SUPER COOL UP TO <span>40% OFF</span>
            </h3>

            <Button size="">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="pro-carousel-item">
          <Image src="/img/Carousel.png" />
          <Carousel.Caption>
            <h6>Weekend Promotion</h6>
            <h3>
              HAPPY SUMMER COMBO SUPER COOL UP TO <span>40% OFF</span>
            </h3>

            <Button size="sm">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ProductCarousel;
