import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/img/004 shopping-bag.svg";

import { CartContext } from "../../context/CartContext";

import "./CartIcon.scss";

const CartIcon = () => {
  // taking the values from the cartContext
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  // Setting the opposite value of isCartOpen
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
