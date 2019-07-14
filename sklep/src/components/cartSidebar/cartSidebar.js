import React, { Component } from "react";
import "./cartSidebar.scss";
import adoppt  from "../../assets/adoppt.svg";

class CartSidebar extends Component {
    render() {
        const { cart, getProductById, removeFromCart, addToCart } = this.props;
        const isCartEmpty = cart.addedToCartProducts.length === 0;
        const productsToDisplay = !isCartEmpty && cart.addedToCartProducts.map((product, index) => {
            const productInfo = getProductById(product.productId);
            const totalProductValue = `${product.quantity * productInfo.price}${cart.currency}`;
            const productValue = `${productInfo.price}${cart.currency}/szt.`;
            return (
                <li className="cart-sidebar-list-item list-group-item d-flex justify-content-between align-items-center" key={product.productId}>
                    <div className="cart-sidebar-list-item-description d-flex flex-column">
                        <h6 className="cart-sidebar-list-item-name mb-1">{productInfo.name}</h6>
                        <p className="cart-sidebar-list-item-price mb-1">{productValue}</p>
                    </div>
                    <p className="cart-sidebar-list-item-quantity mb-1">
                        <button
                            className="cart-sidebar-list-item-quantity-less btn mr-1"
                            onClick={() => addToCart(product.productId, -1)}
                        >-</button>
                        <span>{product.quantity}</span>
                        <button
                            className="cart-sidebar-list-item-quantity-more btn ml-1"
                            onClick={() => addToCart(product.productId, 1)}
                        >+</button>
                    </p>
                    <p className="cart-sidebar-list-item-value mb-1">{totalProductValue}</p>
                    <button
                        className="cart-sidebar-list-item-remove btn"
                        onClick={() => removeFromCart(product.productId)}
                    ></button>
                </li>
            );
        });

        return (
            <div className="cart-sidebar">
                {isCartEmpty ? (
                    <h5 className="cart-sidebar-empty d-flex justify-content-center align-items-center flex-column">
                        <p>Twoj koszyk jest pusty!</p>
                        <img className="img-fluid" src={adoppt} alt="adoppt" />
                        <p>Przygarnij przyjaciela</p>
                    </h5>
                ) : (
                <ul className="list-group cart-sidebar-list">
                    <li className="cart-sidebar-list-item cart-sidebar-list-item_header list-group-item d-flex justify-content-between align-items-center">
                        <div className="cart-sidebar-list-item-description d-flex flex-column">
                            <h6 className="cart-sidebar-list-item-name mb-1">Nazwa</h6>
                        </div>
                        <p className="cart-sidebar-list-item-quantity mb-1">Ilość</p>
                        <p className="cart-sidebar-list-item-value mb-1">Cena</p>
                        <p className="mb-1">Usuń</p>
                    </li>
                    {productsToDisplay}
                </ul>
                )}
            </div>
        );
    }
};

export default CartSidebar;