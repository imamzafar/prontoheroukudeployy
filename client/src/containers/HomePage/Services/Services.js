import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Services.css";
import Image1 from "../../../img/service_img/car.gif";
import Image2 from "../../../img/service_img/milk.gif";
import Image3 from "../../../img/service_img/savings.gif";

const Services = () => {
  return (
    <>
      <>
        <Row className="mt-2">
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Row className="services-row-inner">
              <Image src={Image2} style={{ width: "112px", height: "112px" }} />
              <h2>Thousands of Items</h2>
              <p>
                From cleaning supplies & over-the-counter medicine to food,
                drinks, electronics, baby essentials and more.
              </p>
            </Row>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Row className="services-row-inner">
              <Image src={Image1} style={{ width: "112px", height: "112px" }} />
              <h2>Delivered Fast</h2>
              <p>
                From our micro-fulfillment center to your door means that you
                get your order in just 30 minutes*. We're open late to bring you
                what you need.
              </p>
            </Row>{" "}
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Row className="services-row-inner">
              <Image src={Image3} style={{ width: "112px", height: "112px" }} />
              <h2>$1.95 Delivery Fee</h2>
              <p>
                Everything you need from weekday to weekend, delivered for only
                $1.95. Or join the Fam to get unlimited free delivery on
                eligible orders.
              </p>
            </Row>
          </Col>
        </Row>
      </>
    </>
  );
};

export default Services;
