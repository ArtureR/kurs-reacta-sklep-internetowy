import React from 'react';

const Product = (props) => {
    return(
        <div>
            <h1>produkt</h1>
            <h2>{props.products[0].name}</h2>
            <h3>{props.products[0].id}</h3>
            <h4>{props.products[0].category}</h4>
        </div>
    );
};

export default Product;