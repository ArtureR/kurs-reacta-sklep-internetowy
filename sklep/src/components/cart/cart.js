import React from "react";
import "./cart.scss";

const Cart = (props) => {
    const { cart } = props;
    const displayedCartValue = `${cart.computedTotalCartValue}${cart.currency}`;

    return (
        <form className="cart form-inline">
            <button className="cart-btn btn btn-outline-success">{displayedCartValue}</button>
            <div className="cart-quantity">{cart.computedTotalCartQuantity}</div>
        </form>
    );
};

export default Cart;