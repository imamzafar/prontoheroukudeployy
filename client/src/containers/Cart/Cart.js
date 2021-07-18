import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import {
  addToCart,
  getCartItems,
  removeCartItem,
} from "../../actions/cart.action";
import CartItem from "../../component/CartItem/CartItem";
import "./Cart.css";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, [auth.authenticate]);


  
  const onQuantityIncrement = (_id, qty) => {
    //console.log({_id, qty});
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };


console.log(cartItems)

  return (
    <>
      <div className="card cartt" style={{ background: "transparent" }}>
        <div className="row">
          <div className="cartt col-md-8 cart">
            <div className="cartt title">
              <div className="row cartt">
                <div className="cartt col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="cartt col align-self-center text-right text-muted">
                  {Object.keys(cart.cartItems).length} items
                </div>
              </div>
            </div>

            {/* cart items */}
            {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
              onRemoveCartItem={onRemoveCartItem}
            />
          ))}

            <div className="back-to-shop">

              {/* <a className="cartt" > */}
               
              {/* </a> */}
              {/* <Link to='/shop'> */}
              
              <span onClick={props.onClose}   className="text-muted"> ← Back to shop</span>
              {/* </Link> */}
            </div>
          </div>
          <div className="cartt col-md-4 summary">
            <div>
              <h5 className="cartt">
                <b>Summary</b>
              </h5>
            </div>
            <hr className="cartt" />
            <div className="row cartt">
              {/* if required make me alive later */}
              {/* <div className="cartt col" style={{ paddingLeft: 0 }}>
                ITEMS 3
              </div>
              <div className="cartt col text-right">€ 132.00</div> */}
            </div>
            <form className="cartt">
              <p>SHIPPING</p>{" "}
              <select className="cartt">
                <option className="text-muted">Standard-Delivery- €5.00</option>
              </select>
              <p>GIVE CODE</p>{" "}
              <input
                className="input-cartt"
                id="code"
                placeholder="Enter your code"
              />
            </form>
            <div
              className="row cartt"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="cartt col">TOTAL PRICE</div>
              <div className="cartt col text-right">€ {Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          }, 0)}</div>
            </div>{" "}
            <button className="btn cartt">CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
