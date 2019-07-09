import React, { Component } from "react";
import "./cart.scss";

class Cart extends Component {
    totalCartValue() {
        const { cart, getProductById } = this.props;
        const isCartEmpty = cart.addedToCartProducts.length === 0;
        if (isCartEmpty) {
            return 0;
        } else {
            return cart.addedToCartProducts.reduce((previousValue, currentItem) => {
                const currentItemValue = getProductById(currentItem.productId).price;
                const currentItemsValue = currentItemValue * currentItem.quantity;
                return previousValue + currentItemsValue;
            }, 0);
        }
    }

    totalCartQuantity() {
        const { cart } = this.props;
        const isCartEmpty = cart.addedToCartProducts.length === 0;
        if (isCartEmpty) {
            return 0;
        } else {
            return cart.addedToCartProducts.reduce((previousItem, currentItem) => {
                return previousItem + currentItem.quantity;
            }, 0);
        }
    }

    render() {
        const { cart, onSetSidebarOpen } = this.props;
        const displayedCartValue = `${this.totalCartValue()}${cart.currency}`;

        return (
            <div className="cart form-inline">
                <button
                    className="cart-btn btn btn-outline-success"
                    onClick={() => onSetSidebarOpen()}
                >
                    {displayedCartValue}
                </button>
                <div className="cart-quantity">{this.totalCartQuantity()}</div>
            </div>
        );
    }
};

export default Cart;