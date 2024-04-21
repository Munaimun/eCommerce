import {React, Fragment} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as LOGO } from "../../assets/img/007 crown.svg"
import "./NavigationBar.scss"


const NavigationBar = () => {
  return (
    <Fragment>
        <div className='navigation'>
            <Link to="/" className='logo-container'>
                <LOGO className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link to="/shop" className='nav-link'>
                    SHOP
                </Link>
                <Link to="/contact" className='nav-link'>
                    CONTACT
                </Link>
                <Link to="/auth" className='nav-link'>
                    SIGN IN
                </Link>
                <Link className='nav-link'>
                    CART LOGO
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default NavigationBar;