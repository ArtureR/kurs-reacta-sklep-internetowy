import React from "react";
import "./header.scss";
import Cart from "../cart/cart";

const Header = (props) => {
  const { cart, getProductById,onSetSidebarOpen } = props;
  return (
    <header className="">
      <nav className="navbar sticky-top navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Animal Store</span>
        <Cart cart={cart} getProductById={getProductById} onSetSidebarOpen={onSetSidebarOpen} />
      </nav>
    </header>
  );
};

export default Header;
