import React from "react";

const ProductsList = (props) => {
    const productsToDisplay = props.products.map((product, index) => {
        return (
            <div className="col-4 product" key={index}>
                <div className="product-title">{product.name}</div>
                <img className="product-photo" src={product.photo} alt={product.name} />
                <div className="product-description">{product.description}</div>
                <div className="product-row row">
                    <div className="product-price">{product.price}</div>
                    <div className="product-sizes">{product.avalibleSizes}</div>
                </div>
                <button className="product-buy">Buy</button>
            </div>
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