import React from "react";
import ProductsList from '../productsList/productsList';

const Content = (props) => {
    return (
        <div className="content">
        <ProductsList products={props.products} />
        </div>
    );
};

export default Content;