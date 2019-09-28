import React, { Component } from "react";
import adoppt from "../../assets/adoppt.svg";
import { connect } from "react-redux";
import { addToCartAction, removeFromCart } from "../../store/actions/actions";
import { getProductsInCart, getCurrency } from "../../store/selectors/selectors";

class CartSidebar extends Component {
    render() {
        const { removeFromCart, addToCart, currency, productsInCart } = this.props;
        const isCartEmpty = productsInCart.length === 0;
        const productsToDisplay = !isCartEmpty && productsInCart.map((product) => {
            const totalProductValue = `${currency}${product.totalPrice}`;
            const productValue = `${currency}${product.price}/szt.`;
            return (
                <li className="cart-sidebar-list-item list-group-item d-flex justify-content-between align-items-center" key={product.id}>
                    <div className="cart-sidebar-list-item-description d-flex flex-column">
                        <h6 className="cart-sidebar-list-item-name mb-1">{product.name}</h6>
                        <p className="cart-sidebar-list-item-price mb-1">{productValue}</p>
                    </div>
                    <p className="cart-sidebar-list-item-quantity mb-1">
                        <button
                            className="cart-sidebar-list-item-quantity-less btn mr-1"
                            onClick={() => addToCart({
                                id: product.id,
                                quantity: -1
                            })}
                        >-</button>
                        <span>{product.quantity}</span>
                        <button
                            className="cart-sidebar-list-item-quantity-more btn ml-1"
                            onClick={() => addToCart({
                                id: product.id,
                                quantity: 1
                            })}
                        >+</button>
                    </p>
                    <p className="cart-sidebar-list-item-value mb-1">{totalProductValue}</p>
                    <button
                        className="cart-sidebar-list-item-remove btn"
                        onClick={() => removeFromCart(product.id)}
                    ></button>
                </li>
            );
        });

        return (
            <div className="cart-sidebar">
                {isCartEmpty ? (
                    <h5 className="cart-sidebar-empty d-flex justify-content-center align-items-center flex-column">
                        <p>Your cart is empty!</p>
                        <img className="img-fluid" src={adoppt} alt="adoppt" />
                        <p>Find yourself a friend</p>
                    </h5>
                ) : (
                        <ul className="list-group cart-sidebar-list">
                            <li className="cart-sidebar-list-item cart-sidebar-list-item_header list-group-item d-flex justify-content-between align-items-center">
                                <div className="cart-sidebar-list-item-description d-flex flex-column">
                                    <h6 className="cart-sidebar-list-item-name mb-1">Name</h6>
                                </div>
                                <p className="cart-sidebar-list-item-quantity mb-1">Quantity</p>
                                <p className="cart-sidebar-list-item-value mb-1">Price</p>
                                <p className="mb-1">Remove</p>
                            </li>
                            {productsToDisplay}
                        </ul>
                    )}
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        currency: getCurrency(state),
        productsInCart: getProductsInCart(state),
    };
}

const mapDispatchToProps = {
    addToCart: addToCartAction,
    removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar);