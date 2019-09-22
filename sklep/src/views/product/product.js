import React from 'react';
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/actions";
import { getProducts } from "../../store/selectors/selectors";
import ProductsListItem from "../../components/productsListItem/productsListItem";

const Product = (props) => {
  const currentId = parseInt(props.match.params.id);
  const { products } = props;
  const filteredProductsByCategory = products.find(product => product.id === currentId);

  return (
    <div className="container">
      <h1>Product name placeholder</h1>
      <ProductsListItem product={filteredProductsByCategory}  addToCart={addToCart}/>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart
};

const mapStateToProps = (state) => {
  return { products: getProducts(state) };
};


export default connect(mapStateToProps, mapDispatchToProps)(Product);