import React from "react";

const ProductsListItem = (props) => {
    return (
        <div className="col-4 products-list-item mb-4" key={props.product.id}>
            <div class="card">
                <img className="products-list-item-photo card-img-top" src={props.product.photo} alt={props.product.name} />
                <div class="card-body">
                    <h5 class="products-list-item-title card-title">{props.product.name}</h5>
                    <h6 class="products-list-item-price card-subtitle mb-2 text-muted">{props.product.price} zł</h6>
                    <p class="products-list-item-description card-text">{props.product.description}</p>
                    <button class="products-list-item-buy btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsListItem;