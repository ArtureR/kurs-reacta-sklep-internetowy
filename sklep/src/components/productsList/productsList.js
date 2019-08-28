import React from "react";
import ProductsListItem from "../productsListItem/productsListItem";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { products: state.products };
  };

const ProductsList = (props) => {
    const productsToDisplay = props.products.map((product, index) => {
        return (
            <ProductsListItem product={product} key={index} addToCart={props.addToCart}/>
        );
    });

    return (
        <div className="products-list container-fluid">
            <div className="row">
                {productsToDisplay}
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(ProductsList);