import React, { Component } from "react";
import "./cart.scss";
import { connect } from "react-redux";
import { toggleSidebar } from "../../store/actions/actions";

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
        const { cart, toggleSidebar } = this.props;
        const displayedCartValue = `${this.totalCartValue()}${cart.currency}`;

        return (
            <div className="cart form-inline">
                <button
                    className="cart-btn btn btn-outline-success"
                    onClick={() => toggleSidebar()}
                >
                    {displayedCartValue}
                </button>
                <div className="cart-quantity">{this.totalCartQuantity()}</div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        cart2: state.cart
    };
}

const mapDispatchToProps = {
    toggleSidebar
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);