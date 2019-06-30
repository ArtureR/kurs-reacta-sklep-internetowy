import React from "react";
import ProductsListItem from "../productsListItem/productsListItem";

const ProductsList = (props) => {
    const productsToDisplay = props.products.map((product, index) => {
        return (
            <ProductsListItem product={product} key={index}/>

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

export default ProductsList;