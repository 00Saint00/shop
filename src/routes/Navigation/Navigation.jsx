import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../../Components/cart-icon/Cart";
import CartDrpdwn from "../../Components/Cart-Dropdown/Cart-drpdwn";
import { selectCurrentUser } from "../../store/user/user.seletor";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import { signOutUser } from "../../Utils/Firebase/Firebase";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./NavStyle.jsx";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  // console.log(isCartOpen);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks className="links-container">
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/Auth">SIGN IN</NavLink>
          )}

          <Link>
            <Cart />
          </Link>
        </NavLinks>
        {isCartOpen && <CartDrpdwn />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
