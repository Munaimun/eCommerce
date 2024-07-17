import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import "./CheckOut.css";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <span>{quantity}</span>
            <br />
            <span onClick={() => removeItemFromCart(cartItem)}>decremetn</span>
            <br />
            {/* As we already have the function to add the item */}
            <span onClick={() => addItemToCart(cartItem)}>increament</span>
          </div>
        );
      })}
    </div>
  );
};

export default CheckOut;
