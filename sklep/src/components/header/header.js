import React from "react";
import "./header.scss";
import Cart from "../cart/cart";
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="mb-4">
      <nav className="navbar sticky-top navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Animal Store</span>
        <Link to="/">Home</Link>
        <Link to="/category">All animals</Link>
        <Link to="/category/cats">Cats</Link>
        <Link to="/category/dogs">Dogs</Link>
        <Link to="/category/birds">Birds</Link>
        <Cart/>
      </nav>
    </header>
  );
};

export default Header;
