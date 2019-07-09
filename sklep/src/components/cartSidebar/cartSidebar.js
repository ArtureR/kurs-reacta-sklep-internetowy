import React, { Component } from "react";
import "./cartSidebar.scss";

class CartSidebar extends Component {
    render() {
        const { cart, getProductById } = this.props;
        const productsToDisplay = cart.addedToCartProducts.map((product, index) => {
            const productInfo = getProductById(product.productId);
            const totalProductValue = product.quantity * productInfo.price;
            return (
                <li className="list-group-item d-flex justify-content-between" key={product.productId}>
                    <h5 className="mb-1">{productInfo.name}</h5>
                    <p className="mb-1">{product.quantity}</p>
                    <p className="mb-1">{totalProductValue}</p>
                </li>
            );
        });

        return (
            <div className="cart-sidebar">
                Lista produktów:
                <ul className="list-group cart-sidebar-list">
                    <li className="list-group-item d-flex justify-content-between">
                        <h5 className="mb-1">Nazwa</h5>
                        <p className="mb-1">Ilość</p>
                        <p className="mb-1">Cena</p>
                    </li>
                    {productsToDisplay}
                    </ul>
            </div>
        );
    }
};

export default CartSidebar;