import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCartAction, removeFromCart } from "../../store/actions/actions";
import { getProductsInCart, getCurrency } from "../../store/selectors/selectors";

class CartList extends Component {
    render() {
        const { removeFromCart, addToCart, currency, productsInCart, readOnly } = this.props;
        const isReadOnlyMode = readOnly ? readOnly : false;
        const isCartEmpty = productsInCart.length === 0;
        const productsToDisplay = !isCartEmpty && productsInCart.map((product) => {
            const totalProductValue = `${currency}${product.totalPrice}`;
            const productValue = `${currency}${product.price}/each`;
            return (
                <li className="cart-list-item list-group-item d-flex justify-content-between align-items-center" key={product.id}>
                    <div className="cart-list-item-description d-flex flex-column">
                        <h6 className="cart-list-item-name mb-1">{product.name}</h6>
                        <p className="cart-list-item-price mb-1">{productValue}</p>
                    </div>
                    <p className="cart-list-item-quantity mb-1">
                        {!isReadOnlyMode && (
                            <button
                                className="cart-list-item-quantity-less btn mr-1"
                                onClick={() => addToCart({
                                    id: product.id,
                                    quantity: -1
                                })}
                            >-</button>
                        )}

                        <span>{product.quantity}</span>
                        {!isReadOnlyMode && (
                            <button
                                className="cart-list-item-quantity-more btn ml-1"
                                onClick={() => addToCart({
                                    id: product.id,
                                    quantity: 1
                                })}
                            >+</button>
                        )}
                    </p>
                    <p className="cart-list-item-value mb-1">{totalProductValue}</p>
                    {!isReadOnlyMode && (
                        <button
                            className="cart-list-item-remove btn"
                            onClick={() => removeFromCart(product.id)}
                        ></button>
                    )}
                </li>
            );
        });

        return (
            <ul className="list-group cart-list">
                <li className="cart-list-item cart-list-item_header list-group-item d-flex justify-content-between align-items-center">
                    <div className="cart-list-item-description d-flex flex-column">
                        <h6 className="cart-list-item-name mb-1">Name</h6>
                    </div>
                    <p className="cart-list-item-quantity mb-1">Amount</p>
                    <p className="cart-list-item-value mb-1">Price</p>
                    {!isReadOnlyMode && (
                        <p className="mb-1">Remove</p>
                    )}
                </li>
                {productsToDisplay}
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartList);