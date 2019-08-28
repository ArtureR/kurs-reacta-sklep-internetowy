import React from "react";
import ProductsList from '../productsList/productsList';

const Content = (props) => {
    return (
        <div className="content">
        <ProductsList addToCart={props.addToCart} />
        </div>
    );
};

export default Content;