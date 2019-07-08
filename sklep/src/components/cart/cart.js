import React from "react";
import "./cart.scss";

const Cart = (props) => {
    const { cart,getProductById } = props;
    const totalCartValue = cart.addedToCartProducts.reduce((previousValue, currentItem) => {
        const currentItemValue = getProductById(currentItem.productId).price;
        const currentItemsValue = currentItemValue * currentItem.quantity;
        return previousValue + currentItemsValue;
    },0);
    const totalCartQuantity = cart.addedToCartProducts.reduce((previousItem, currentItem) => {
        return previousItem.quantity + currentItem.quantity;
    });
    const displayedCartValue = `${totalCartValue}${cart.currency}`;

    return (
        <form className="cart form-inline">
            <button className="cart-btn btn btn-outline-success">{displayedCartValue}</button>
            <div className="cart-quantity">{totalCartQuantity}</div>
        </form>
    );
};

export default Cart;