import React from "react";
import ProductsListItem from "../productsListItem/productsListItem";

const ProductsList = (props) => {
    const productsToDisplay = props.products.map((product, index) => {
        return (
            <ProductsListItem product={product} key={index} addToCart={props.addToCart} selectedAnimal={props.selectedAnimal}/>
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