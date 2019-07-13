import React, { Component } from "react";
import "./cartSidebar.scss";

class CartSidebar extends Component {
    render() {
        const { cart, getProductById } = this.props;
        const productsToDisplay = cart.addedToCartProducts.map((product, index) => {
            const productInfo = getProductById(product.productId);
            const totalProductValue = `${product.quantity * productInfo.price} ${cart.currency}`;
            return (
                <li className="cart-sidebar-list-item list-group-item d-flex justify-content-between" key={product.productId}>
                    <h6 className="cart-sidebar-list-item-name mb-1">{productInfo.name}</h6>
                    <p className="cart-sidebar-list-item-quantity mb-1">{product.quantity}</p>
                    <p className="cart-sidebar-list-item-value mb-1">{totalProductValue}</p>
                    <button 
                        className="cart-sidebar-list-item-remove btn"
                        onClick={() => console.log('removed')}
                        ></button>
                </li>
            );
        });

        return (
            <div className="cart-sidebar">
                Lista produktów:
                <ul className="list-group cart-sidebar-list">
                    <li className="cart-sidebar-list-item cart-sidebar-list-item_header list-group-item d-flex justify-content-between ">
                        <h6 className="cart-sidebar-list-item-name mb-1">Nazwa</h6>
                        <p className="cart-sidebar-list-item-quantity mb-1">Ilość</p>
                        <p className="cart-sidebar-list-item-value mb-1">Cena</p>
                        <p >Usuń</p>
                    </li>
                    {productsToDisplay}
                    </ul>
            </div>
        );
    }
};

export default CartSidebar;