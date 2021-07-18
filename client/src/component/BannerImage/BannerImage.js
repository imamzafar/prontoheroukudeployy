import React from "react";
import { Container } from "react-bootstrap";
import "./BannerImage.css";
import LocationSearchInput from "../../component/LocationSearchInput/LocationSearchInput";
import { Spring } from "react-spring";

const BannerImage = () => {
  return (
    <>
      <section className="hero">
        <Container className="hero-container">
          <h1>
            <span style={{ display: "block" }}>Daily essentials,</span>
            <span> delivered in minutes</span>
          </h1>

          <LocationSearchInput></LocationSearchInput>
        </Container>
      </section>
      <section className="wave"></section>
    </>
  );
};

export default BannerImage;
