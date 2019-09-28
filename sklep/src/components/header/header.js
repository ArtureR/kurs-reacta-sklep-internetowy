import React from "react";
import Cart from "../cart/cart";
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="mb-4">
      <nav className="navbar sticky-top navbar-dark">
        <span className="navbar-brand mb-0 h1">Animal Store</span>
        <Link to="/" className="text-white">Home</Link>
        <Link to="/category" className="text-white">All animals</Link>
        <Link to="/category/cats" className="text-white">Cats</Link>
        <Link to="/category/dogs" className="text-white">Dogs</Link>
        <Link to="/category/birds" className="text-white">Birds</Link>
        <Cart/>
      </nav>
    </header>
  );
};

export default Header;
