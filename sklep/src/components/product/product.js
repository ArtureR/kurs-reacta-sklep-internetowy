import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="container">
      <h1>Product</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Product;