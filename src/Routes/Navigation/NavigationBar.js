import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import "./NavigationBar.scss";

import { ReactComponent as LOGO } from "../../assets/img/007 crown.svg";
import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../utils/firebase/FirebaseUtils";

const NavigationBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

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
          <Link className="nav-link">CART LOGO</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
