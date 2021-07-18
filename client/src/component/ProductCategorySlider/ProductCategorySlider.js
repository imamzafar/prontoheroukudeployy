import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import "./ProductCategorySlider.css";
import user1 from "../../img/user/user1.jpg";
import ScrollContainer from "react-indiana-drag-scroll";
import SingleProduct from "./SingleProduct/SingleProduct";
import axios from "axios";

// iske pass jo product ka naam aaya h vahi product ka list show krna h
// abhi ke liye ek dummy product h products krna
// baad me jo naam as props aa rha h uske accordin g fetch karege
// to sbka apana apna seperate aayega
// produt name can be same issiliye props me id bhi bhejo or uska use karo

class ProductCategorySlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { products: [] };
  }


  state = {
    showH1: false,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/product/cat/${this.props.productCatId}`)
      .then((response) => this.setState({ products: response.data.products }));

    console.log(this.state.products);
    console.log();
  }

  onInViewChange = (inview) => {
    if (!this.state.showH1 && inview) this.setState({ showH1: true });
  };

  render() {
    return (
      <>
        <div className="productcatname">{this.props.productcatname}</div>
        <ScrollContainer horizontal={true} className="scroll-container">
          <div
            className="quote-wrapper productcatslider"
            style={{ flexDirection: "row" }}
          >
            {/* here we need to get every product
             according to the product productctnme send as props */}
            {this.state.products.map((el) => (
              <SingleProduct
                title={el.name}
                image={el.productPictures[0].img}
                description={el.description}
                rate={el.price}
                quantity = {el.quantity}
                _id = {el._id}
                productPictures = {el.productPictures}
                name = {el.name}
                price ={el.price}
                // whole product
                product = {el}
              />
            ))}
          </div>
        </ScrollContainer>
      </>
    );
  }
}

export default ProductCategorySlider;
