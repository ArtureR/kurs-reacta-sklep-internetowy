import React from "react";

const ProductsListItem = (props) => {
    return (
        <div className="col-2 products-list-item mb-4" key={props.product.id}>
            <div className="card">
                <img className="products-list-item-photo card-img-top" src={props.product.photo} alt={props.product.name} />
                <div className="card-body">
                    <h5 className="products-list-item-title card-title">{props.product.name}</h5>
                    <h6 className="products-list-item-price card-subtitle mb-2 text-muted">{props.product.price} zł</h6>
                    <p className="products-list-item-description card-text">{props.product.description}</p>
                    <button className="products-list-item-buy btn btn-primary" onClick={() => props.addToCart(props.product.id, 1)}>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsListItem;