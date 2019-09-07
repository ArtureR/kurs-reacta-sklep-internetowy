import React from "react";
import "./header.scss";
import Cart from "../cart/cart";

const Header = (props) => {
  return (
    <header className="mb-4">
      <nav className="navbar sticky-top navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Animal Store</span>
        <Cart/>
      </nav>
    </header>
  );
};

export default Header;
