import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
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
import { selectCurrentUser } from "../../redux/user/user-selector";

function Navbar() {
  const user = useSelector(selectCurrentUser);
  const cart = useSelector((state) => state.cart.isCartOpen);

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

          {user ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {cart && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;
