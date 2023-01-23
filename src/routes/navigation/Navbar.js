import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../../components/store/auth-context";
import { ReactComponent as CrownLogo } from "../../assets/87 - crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinkContainer,
} from "./navbar.styles.js";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../components/store/cart-context";

function Navbar() {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {authCtx.currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {cartCtx.isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
