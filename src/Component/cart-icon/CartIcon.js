import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/img/004 shopping-bag.svg";

import { CartContext } from "../../context/CartContext";

import "./CartIcon.scss";

const CartIcon = () => {
  const { isCartOpen, SetIsCartOpen } = useContext(CartContext);

  // Setting the opposite value of isCartOpen
  const toggleIsCartOpen = () => SetIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
