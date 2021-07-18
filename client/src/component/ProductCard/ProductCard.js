import React from "react";
import "./ProductCard.css";
import { Card } from "react-bootstrap";

const ProductCard = (props) => {
  return (
    <>
      <Card className="mainProductCard" style={{ width: `${props.width}` }}>
        {" "}
        <Card.Img
          className={props.zoom ? "" : "increase-on-hover"}
          variant="top"
          src={props.src}
        />
        {/* <Card.Body> */}
        {props.cardText ? (
          <Card.Text className="mainProductCardText">
            {props.cardText}
          </Card.Text>
        ) : (
          ""
        )}
        {/* </Card.Body> */}
      </Card>{" "}
    </>
  );
};

export default ProductCard;
