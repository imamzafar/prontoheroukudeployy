// similar to specifix product detail page

// product detail page contains it 

import React, {useState, useEffect} from "react";
import { Container, Image } from "react-bootstrap";
import user1 from "../../../img/user/user1.jpg";
import {Link,Redirect }from 'react-router-dom'
import { addToCart } from "../../../actions/cart.action";
import { useDispatch, useSelector } from "react-redux";


import "./SingleProduct.css";

const SingleProduct = (props) => {


  
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(props.quantity);
  const [showCart, setShowCart] = useState(false);

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${props._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Product</button>
        </Link>
      )
    );
  };

  useEffect(() => {
    // const { productId } = props.match.params;
    const productId = props._id;
    console.log(props,'hi')
    const payload = {
      params: {
        productId,
      },
    };
    // dispatch(getProductDetailsById(payload));
  }, []);


  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };


  return (
    <>
    <div className="item product">
      {shouldRedirect(redirect)}
      <Image className="product-image-slider" src={props.image} />{" "}
      <div className="addToCartButton">
        <i 
           onClick={() => {
            const { _id, name, price } = props;
            const img = props.productPictures[0].img;
            
            dispatch(addToCart({ _id, name, price, img }));
            // props.history.push(`/cart`);
          }}
         style={{ color: "white", fontSize: "10px" }} class="fas fa-plus"></i>
      </div>
      <div className="flex">
        <div class="product-title">{props.title}</div>{" "}
        <div class="product-description">
          <p>{props.description.slice(0, 45)}...</p>
        </div>
        <div class="product-rate">
          <p>{props.rate}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleProduct;

