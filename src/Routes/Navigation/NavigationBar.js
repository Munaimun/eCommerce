import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../Component/cart-icon/CartIcon";

import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/CartContext";

import { ReactComponent as LOGO } from "../../assets/img/007 crown.svg";
import { signOutUser } from "../../utils/firebase/FirebaseUtils";

import "./NavigationBar.scss";
import CartDropdown from "../../Component/cart-dropdown/CartDropdown";

const NavigationBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <LOGO className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>

        {/* if the both side is true then return the last item */}
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
