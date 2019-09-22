import React from 'react';
import { connect } from "react-redux";
import ProductsList from '../../components/productsList/productsList';
import { getProducts } from "../../store/selectors/selectors";
import "./category.scss";

const Category = (props) => {
  const currentCategory = props.match.params.category;
  const { products } = props;
  const filteredProductsByCategory = products.filter(product => product.category === currentCategory);
  const displayedProducts = currentCategory ? filteredProductsByCategory : products;
  const displayedHeader = currentCategory ? currentCategory : "All animals";

  return (
    <div className="container category">
      <h1 className="category-title">{displayedHeader}</h1>
      <ProductsList products={displayedProducts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: getProducts(state) };
};


export default connect(mapStateToProps)(Category);
