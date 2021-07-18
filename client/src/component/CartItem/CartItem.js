import React, {useState} from 'react'

import './CartItem.css'

const CartItem = (props) => {
    const [qty, setQty] = useState(props.cartItem.qty);

    const { _id, name, price, img } = props.cartItem;
  
    const onQuantityIncrement = () => {
      setQty(qty + 1);
      props.onQuantityInc(_id, qty + 1);
    };
  
    const onQuantityDecrement = () => {
      if (qty <= 1) return;
      setQty(qty - 1);
      props.onQuantityDec(_id, qty - 1);
    };

    return (
        <>
         
         <div className="row cartt">
              <div className="row cartt main align-items-center">
                <div className="cartt col-2">
                  <img
                    className="img-fluid cartt"
                    src={img}
                  />
                </div>
                <div className="cartt col">
                  <div className="row cartt text-muted">Shirt</div>
                  <div className="row cartt">{name}</div>
                </div>
                <div className="cartt col">
                  {" "}
                  <a  onClick={onQuantityDecrement} className="cartt">
                    -
                  </a>
                  <a className="cartt" className="border">
                  {qty} 
                  </a>
                  <a  onClick={onQuantityIncrement} className="cartt">
                    +
                  </a>{" "}
                </div>
                <div className="cartt col">
                  € {price} <span onClick={() => props.onRemoveCartItem(_id)} className="close-cartt">✕</span>
                </div>
              </div>
            </div>
  

        </>
    )
}

export default CartItem
